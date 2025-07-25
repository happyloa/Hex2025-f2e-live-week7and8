// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: "2025-07-15",
  devtools: { enabled: true },

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
          content: "/ogImage.webp",
        },
        { property: "og:type", content: "website" },
        { property: "og:locale", content: "zh_TW" },
        { name: "twitter:card", content: "/ogImage.webp" },
        {
          name: "twitter:image",
          content: "/ogImage.webp",
        },
      ],
    },
  },
  modules: ["@nuxtjs/google-fonts", "@nuxtjs/tailwindcss", "nuxt-swiper"],

  // Google Fonts 的相關配置
  googleFonts: {
    families: {
      "Noto+Sans+TC": [400, 600, 700],
    },
    download: true,
    inject: true,
    display: "swap",
  },

  css: ["~/assets/css/fonts.css"],
});
