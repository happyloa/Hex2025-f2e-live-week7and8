import { createHash } from "node:crypto";
import { mkdir, readFile, readdir, writeFile } from "node:fs/promises";
import { createRequire } from "node:module";
import { join } from "node:path";
import { defineNuxtModule } from "nuxt/kit";

const require = createRequire(import.meta.url);
const subsetFont = require("subset-font") as (
  font: Buffer,
  text: string,
  options: { targetFormat: string; preserveNameIds: number[] },
) => Promise<Buffer>;

export default defineNuxtModule({
  meta: { name: "local-font-subsets" },
  async setup(_, nuxt) {
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
    const text = [...new Set(content)].sort().join("");
    const unicodeRange = [...text]
      .map((character) => `U+${character.codePointAt(0)!.toString(16)}`)
      .join(",");
    const outputDir = join(
      nuxt.options.rootDir,
      "node_modules/.cache/font-subsets",
    );
    await mkdir(outputDir, { recursive: true });

    const faces = await Promise.all(
      [400, 600, 700].map(async (weight) => {
        const font = await readFile(
          require.resolve(
            `@fontsource/noto-sans-tc/files/noto-sans-tc-chinese-traditional-${weight}-normal.woff2`,
          ),
        );
        const hash = createHash("sha256")
          .update(font)
          .update(text)
          .digest("hex")
          .slice(0, 12);
        const filename = `noto-sans-tc-${weight}-${hash}.woff2`;
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
        return `@font-face {
          font-family: "Noto Sans TC";
          font-style: normal;
          font-weight: ${weight};
          font-display: swap;
          src: url("./${filename}") format("woff2");
          unicode-range: ${unicodeRange};
        }`;
      }),
    );
    const stylesheet = join(outputDir, "fonts.css");
    await writeFile(stylesheet, faces.join("\n"));
    nuxt.options.css.push(stylesheet);
  },
});
