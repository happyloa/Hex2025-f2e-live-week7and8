<script setup>
useSeoMeta({
  title: "購物車 | 2025 切版直播班 - 旅遊網站 W7&W8",
  ogTitle: "購物車 | 2025 切版直播班 - 旅遊網站 W7&W8",
});
</script>

<template>
  <!-- 還沒有商品 -->
  <section class="bg-neutral-15 px-3 py-20">
    <div class="mx-auto justify-items-center space-y-6 text-center">
      <img src="/images/cart/empty.svg" alt="沒有商品" />
      <p class="text-title text-neutral-80">購物車還沒有商品，立即逛逛！</p>
      <NuxtLink
        to="/product-info"
        class="block w-full max-w-[229px] rounded-xl bg-primary p-4 text-center text-title text-white transition hover:bg-primary-120 md:max-w-[258px]"
      >
        看看其他行程
      </NuxtLink>
    </div>
  </section>
  <!-- 其他旅人也買了 -->
  <section class="bg-neutral-15 py-10 pl-3 md:py-[120px] lg:px-3">
    <div class="mx-auto max-w-container">
      <h2 class="mb-10 flex items-center gap-2 text-h3 md:mb-6">
        <svg
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="m17.227 10.292-.713 3.33h2.746v2.702h-3.33L15.15 20h-2.875l.778-3.676H9.12L8.34 20H5.486l.779-3.676H3v-2.702h3.849l.713-3.33H4.32V7.589h3.827L8.903 4h2.854L11 7.59h3.935L15.692 4h2.876l-.757 3.59h2.767v2.702zm-2.876 0h-3.935l-.713 3.33h3.935z"
            fill="#4A3830"
          />
        </svg>
        其他旅人也買了
      </h2>
      <CommonAttractionsCarousel />
    </div>
  </section>
</template>
