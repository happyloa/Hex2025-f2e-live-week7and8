<script setup>
// 跑馬燈的速度，單位：秒，數值越小越快
const marqueeSpeed = 20;
</script>

<template>
  <!-- 跑馬燈 -->
  <section class="overflow-hidden whitespace-nowrap">
    <div
      class="marquee | flex items-center gap-2 text-[32px] font-bold leading-[1.2] text-primary-10 md:gap-6 md:text-[130px]"
      :style="`--marquee-duration: ${marqueeSpeed}s;`"
    >
      <span># ZOBAA</span>
      <span># WHERETOGO</span>
      <span># TODAY</span>
      <span># ZOBAA</span>
      <span># WHERETOGO</span>
      <span># TODAY</span>
    </div>
  </section>
  <!-- 為什麼選擇 ZOBAA ? -->
  <section
    class="relative overflow-hidden bg-primary-40 px-3 py-10 lg:py-[120px]"
  >
    <!-- 裝飾圓圈1 -->
    <img
      src="/images/home/bg-circle.svg"
      alt="裝飾圓圈1"
      class="absolute -left-[240px] -top-[360px] z-20 hidden size-[800px] xl:block"
    />
    <!-- 裝飾圓圈2 -->
    <img
      src="/images/home/bg-circle.svg"
      alt="裝飾圓圈2"
      class="absolute -bottom-[480px] right-10 z-0 hidden xl:block"
    />
    <!-- 裝飾線條 -->
    <img
      src="/images/home/bg-line.svg"
      alt="裝飾線條"
      class="absolute bottom-[295px] left-1/2 z-0 hidden w-full -translate-x-1/2 xl:block"
    />
    <div class="relative z-10 mx-auto max-w-container">
      <!-- 圖片 -->
      <picture>
        <source
          media="(max-width: 640px)"
          srcset="/images/home/card-mobile.webp"
        />
        <img
          src="/images/home/card.webp"
          alt="把旅行變成生活的養分。"
          class="mb-2 w-full lg:mb-6"
        />
      </picture>
      <!-- 內容 -->
      <div
        class="grid grid-cols-1 gap-6 rounded-3xl bg-[#F3EEEC80] p-6 backdrop-blur lg:grid-cols-2 lg:rounded-[32px] lg:p-8"
      >
        <!-- 標題、敘述 -->
        <div class="space-y-4 lg:space-y-6">
          <h2 class="text-h5 lg:text-h1">為什麼選擇 ZOBAA ?</h2>
          <p class="text-neutral">
            不只是帶你抵達目的地，更在每一次出發前，替你預想所有細節。<br />
            ZOBAA 希望你能放心探索世界，把記憶留給旅程本身。
          </p>
          <!-- 電腦版按鈕 -->
          <NuxtLink
            to="/product-info"
            class="group hidden w-fit items-center gap-2 rounded-full bg-black px-6 py-4 text-subtitle text-white transition hover:bg-white hover:text-black md:gap-4 md:px-8 md:py-6 md:text-h6 lg:flex"
          >
            立即探索我們的精心旅程
            <!-- 裝飾 icon -->
            <svg
              width="32"
              height="32"
              viewBox="0 0 32 32"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              class="transition group-hover:translate-x-2"
            >
              <rect width="32" height="32" rx="16" fill="#fff" />
              <g clip-path="url(#a)">
                <path
                  d="m16 8-1.41 1.41L20.17 15H8v2h12.17l-5.58 5.59L16 24l8-8z"
                  fill="#000"
                />
              </g>
            </svg>
          </NuxtLink>
        </div>
        <!-- 績效 -->
        <div class="grid grid-cols-1 gap-4 lg:grid-cols-2">
          <div
            class="content-center rounded-2xl border border-[#E9E9E9] bg-white p-6 lg:p-8"
          >
            <h3 class="mb-2 flex items-center gap-2 text-h3 lg:text-h1">
              8 年<sup>+</sup>
            </h3>
            <p class="text-title text-primary-80 lg:text-h6">旅遊企劃經驗</p>
          </div>
          <div
            class="content-center rounded-2xl border border-[#E9E9E9] bg-white p-6 lg:p-8"
          >
            <h3 class="mb-2 flex items-center gap-2 text-h3 lg:text-h1">
              30,000<sup>+</sup>
            </h3>
            <p class="text-title text-primary-80 lg:text-h6">旅人五星好評</p>
          </div>
        </div>
        <!-- 手機版按鈕 -->
        <NuxtLink
          to="/product-info"
          class="group flex items-center justify-between gap-2 rounded-full bg-black px-6 py-4 text-subtitle text-white transition hover:bg-white hover:text-black md:gap-4 md:px-8 md:py-6 md:text-h6 lg:hidden"
        >
          立即探索我們的精心旅程
          <!-- 裝飾 icon -->
          <svg
            width="32"
            height="32"
            viewBox="0 0 32 32"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            class="transition group-hover:translate-x-2"
          >
            <rect width="32" height="32" rx="16" fill="#fff" />
            <g clip-path="url(#a)">
              <path
                d="m16 8-1.41 1.41L20.17 15H8v2h12.17l-5.58 5.59L16 24l8-8z"
                fill="#000"
              />
            </g>
          </svg>
        </NuxtLink>
      </div>
    </div>
  </section>
</template>

<style scoped>
.marquee {
  /* 跑馬燈動畫，移動寬度需看內容長度 */
  animation: marquee var(--marquee-duration, 10s) linear infinite;
}

/* 關鍵動畫：從右到左移動 50% */
@keyframes marquee {
  0% {
    transform: translateX(0);
  }
  100% {
    transform: translateX(-100%);
  }
}
</style>
