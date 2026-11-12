import { createHash } from "node:crypto";
import { mkdir, readFile, readdir, writeFile } from "node:fs/promises";
import { createRequire } from "node:module";
import { basename, dirname, join } from "node:path";
import { defineNuxtModule } from "nuxt/kit";

const require = createRequire(import.meta.url);
const subsetFont = require("subset-font") as (
  font: Buffer,
  text: string,
  options: { targetFormat: string; preserveNameIds: number[] },
) => Promise<Buffer>;
const fontkit = require("fontkit") as {
  openSync(path: string): { hasGlyphForCodePoint(codePoint: number): boolean };
};

// 子集字型使用獨立的字型家族名稱，在 main.css 中排在 Fontsource 完整字型之前
const FAMILY = "Noto Sans TC Subset";
const WEIGHTS = [400, 600, 700];

// 把排序後的碼位合併成 unicode-range 區段，例如 U+4e00-4e02
function toUnicodeRange(codePoints: number[]) {
  const ranges: string[] = [];
  for (let i = 0; i < codePoints.length; i++) {
    const start = codePoints[i]!;
    let end = start;
    while (codePoints[i + 1] === end + 1) end = codePoints[++i]!;
    ranges.push(
      start === end
        ? `U+${start.toString(16)}`
        : `U+${start.toString(16)}-${end.toString(16)}`,
    );
  }
  return ranges.join(",");
}

// 解析 Fontsource CSS，取得每個分割字型檔涵蓋的碼位範圍
function parseChunks(css: string) {
  return [
    ...css.matchAll(
      /url\(\.\/files\/([^)]+?\.woff2)\)[^}]*?unicode-range:\s*([^;}]+)/g,
    ),
  ].map(([, file, ranges]) => ({
    file: file!,
    ranges: ranges!.split(",").map((range) => {
      const [start, end] = range.trim().replace(/^U\+/i, "").split("-");
      return [parseInt(start!, 16), parseInt(end ?? start!, 16)] as const;
    }),
  }));
}

export default defineNuxtModule({
  meta: { name: "local-font-subsets" },
  async setup(_, nuxt) {
    // 收集頁面原始碼中出現的所有字元
    const appDir = nuxt.options.srcDir;
    const files = await readdir(appDir, { recursive: true });
    const sources = await Promise.all(
      files
        .filter((file) => /\.(vue|ts|js|json)$/.test(file))
        .sort()
        .map((file) => readFile(join(appDir, file), "utf8")),
    );
    const content = sources
      .join("\n")
      .replace(/<!--[\s\S]*?-->/g, "")
      .replace(/\/\*[\s\S]*?\*\//g, "")
      .replace(/^\s*\/\/.*$/gm, "");
    const codePoints = [
      ...new Set([...content].map((char) => char.codePointAt(0)!)),
    ]
      .filter((codePoint) => codePoint >= 0x20)
      .sort((a, b) => a - b);

    const fontsourceDir = dirname(
      require.resolve("@fontsource/noto-sans-tc/package.json"),
    );
    const outputDir = join(
      nuxt.options.rootDir,
      "node_modules/.cache/font-subsets",
    );
    await mkdir(outputDir, { recursive: true });

    const faces: string[] = [];
    for (const weight of WEIGHTS) {
      // 繁中字型檔缺少的字元（例如全形標點），改從 Fontsource 原本提供該字元的分割檔取用
      const basePath = join(
        fontsourceDir,
        `files/noto-sans-tc-chinese-traditional-${weight}-normal.woff2`,
      );
      const chunks = parseChunks(
        await readFile(join(fontsourceDir, `${weight}.css`), "utf8"),
      );
      const opened = new Map<string, ReturnType<typeof fontkit.openSync>>();
      const open = (path: string) => {
        if (!opened.has(path)) opened.set(path, fontkit.openSync(path));
        return opened.get(path)!;
      };
      const groups = new Map<string, number[]>();
      for (const codePoint of codePoints) {
        let path = basePath;
        if (!open(basePath).hasGlyphForCodePoint(codePoint)) {
          const chunk = chunks.find((c) =>
            c.ranges.some(([a, b]) => codePoint >= a && codePoint <= b),
          );
          if (!chunk) continue;
          path = join(fontsourceDir, "files", chunk.file);
          if (!open(path).hasGlyphForCodePoint(codePoint)) continue;
        }
        groups.set(path, [...(groups.get(path) ?? []), codePoint]);
      }

      for (const [path, points] of groups) {
        const font = await readFile(path);
        const text = String.fromCodePoint(...points);
        const hash = createHash("sha256")
          .update(font)
          .update(text)
          .digest("hex")
          .slice(0, 12);
        const filename = `${basename(path, ".woff2")}-${hash}.woff2`;
        const destination = join(outputDir, filename);
        try {
          await readFile(destination);
        } catch {
          const subset = await subsetFont(font, text, {
            targetFormat: "woff2",
            preserveNameIds: [0, 13, 14],
          });
          await writeFile(destination, subset);
        }
        faces.push(`@font-face {
  font-family: "${FAMILY}";
  font-style: normal;
  font-weight: ${weight};
  font-display: swap;
  src: url("./${filename}") format("woff2");
  unicode-range: ${toUnicodeRange(points)};
}`);
      }
    }

    const stylesheet = join(outputDir, "fonts.css");
    await writeFile(stylesheet, faces.join("\n"));
    nuxt.options.css.push(stylesheet);
  },
});
