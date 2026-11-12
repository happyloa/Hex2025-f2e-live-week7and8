// 頁面上的文字都已由建置時產生的子集字型涵蓋（build/font-subsets.ts）。
// Fontsource 完整字型只在使用者於輸入框打出子集以外的字時才需要，而輸入框都是
// 400 字重，因此只載入 400，並等頁面載入完成、瀏覽器閒置時再引入，不和首屏資源搶頻寬。
export default defineNuxtPlugin(() => {
  const load = () => import("@fontsource/noto-sans-tc/400.css");
  const whenIdle = () =>
    "requestIdleCallback" in window
      ? requestIdleCallback(() => load())
      : setTimeout(load, 200);

  if (document.readyState === "complete") whenIdle();
  else window.addEventListener("load", whenIdle, { once: true });
});
