// nuxt-swiper 設為 bundled: false 後只註冊核心版 <swiper-container>，
// 這裡補上需要的模組；Nuxt 會等 app:created 完成才掛載畫面，輪播出現前模組已就緒。
export default defineNuxtPlugin((nuxtApp) => {
  nuxtApp.hook("app:created", async () => {
    await import("~/lib/swiper-modules");
  });
});
