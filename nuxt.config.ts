import tailwindcss from "@tailwindcss/vite";
import fontSubsets from "./build/font-subsets";

// 社群分享圖需使用絕對網址，社群平台才能正確抓取
const siteUrl = "https://zobaa.worksbyaaron.com";

// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: "2025-07-15",
  devtools: { enabled: true },
  nitro: { compressPublicAssets: true },
  experimental: {
    defaults: {
      nuxtLink: { prefetchOn: { visibility: false, interaction: true } },
    },
  },

  // 網站 meta 設定
  app: {
    head: {
      title: "2025 切版直播班 - ZOBAA! 旅遊網站 W7&W8",
      htmlAttrs: {
        lang: "zh-Hant",
      },
      meta: [
        {
          name: "description",
          content: `不只是帶你抵達目的地，更在每一次出發前，替你預想所有細節。ZOBAA 希望你能放心探索世界，把記憶留給旅程本身。`,
        },
        {
          property: "og:title",
          content: "2025 切版直播班 - ZOBAA! 旅遊網站 W7&W8",
        },
        {
          property: "og:description",
          content: `不只是帶你抵達目的地，更在每一次出發前，替你預想所有細節。ZOBAA 希望你能放心探索世界，把記憶留給旅程本身。`,
        },
        {
          property: "og:image",
          content: `${siteUrl}/ogImage.webp`,
        },
        { property: "og:type", content: "website" },
        { property: "og:locale", content: "zh_TW" },
        { name: "twitter:card", content: "summary_large_image" },
        {
          name: "twitter:image",
          content: `${siteUrl}/ogImage.webp`,
        },
      ],
    },
  },
  modules: [fontSubsets, "nuxt-swiper"],
  // 不載入包含所有模組的 Swiper bundle，需要的模組在 plugins/swiper-modules.client.ts 安裝
  swiper: { bundled: false },

  // Tailwind CSS 4 使用 Vite 外掛
  vite: {
    plugins: [tailwindcss()],
  },

  css: ["~/assets/css/main.css"],
});
