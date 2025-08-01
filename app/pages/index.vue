<script setup>
// 建立 ref 綁定到 swiper-container
const journeySwiper = ref(null);
// 用 useSwiper 取得 API
const swiper = useSwiper(journeySwiper);

// 跑馬燈的速度，單位：秒，數值越小越快
const marqueeSpeed = 20;
</script>

<template>
  <!-- 搜尋墨爾本嗎？ -->
  <section class="py-10 pl-3 md:py-[120px] lg:px-3">
    <div class="mx-auto max-w-container">
      <h2 class="relative mb-10 text-h3 md:mb-20 md:text-display">
        <!-- 裝飾井字號 -->
        <img
          src="/images/home/bg-pound-sign.svg"
          alt="裝飾井字號"
          class="absolute -left-2 -top-5 z-0 size-[52px] md:-left-12 md:-top-12 md:size-[120px]"
        />
        <span class="relative z-10"> 搜尋墨爾本嗎？<br />來點行程參考！ </span>
      </h2>
      <ClientOnly>
        <div class="relative">
          <!-- 往前一張 -->
          <button
            @click="swiper.prev()"
            class="absolute -left-20 top-1/2 hidden -translate-y-1/2 rounded-xl p-4 shadow-button 2xl:block"
          >
            <svg
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="m12 20 1.41-1.41L7.83 13H20v-2H7.83l5.58-5.59L12 4l-8 8z"
                fill="currentColor"
              />
            </svg>
          </button>
          <!-- 往後一張 -->
          <button
            @click="swiper.next()"
            class="absolute -right-20 top-1/2 hidden -translate-y-1/2 rounded-xl p-4 shadow-button 2xl:block"
          >
            <svg
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <g clip-path="url(#a)">
                <path
                  d="m12 4-1.41 1.41L16.17 11H4v2h12.17l-5.58 5.59L12 20l8-8z"
                  fill="currentColor"
                />
              </g>
            </svg>
          </button>
          <swiper-container
            ref="journeySwiper"
            :breakpoints="{
              1024: {
                slidesPerView: 4,
              },
              640: {
                slidesPerView: 2.2,
              },
              0: {
                slidesPerView: 1.175,
              },
            }"
            space-between="24"
            :autoplay="{
              delay: 5000,
            }"
            :loop="true"
          >
            <swiper-slide>
              <CommonAttractionCard
                img="/images/home/journey-1.webp"
                name="【獨家優惠】布萊頓彩色小屋＋森林蒸汽火車一日遊"
                :tags="['即買即用', '5 天前可免費取消']"
                ratingScore="4.2"
                ratingCount="333"
                alreadyBuy="500"
                originalPrice="NT$ 5,220"
                discountPrice="NT$ 4,220"
              />
            </swiper-slide>
            <swiper-slide>
              <CommonAttractionCard
                img="/images/home/journey-2.webp"
                name="無尾熊動物園＋企鵝歸巢雙享之旅"
                :tags="['即買即用', '7 天前可免費取消']"
                ratingScore="4.2"
                ratingCount="333"
                alreadyBuy="500"
                originalPrice="NT$ 4,920"
                discountPrice="NT$ 3,890"
              />
            </swiper-slide>
            <swiper-slide>
              <CommonAttractionCard
                img="/images/home/journey-3.webp"
                name="大洋路經典一日遊｜中文導覽！體驗澳洲最夢幻的海岸線"
                :tags="['中文導覽', '5 天前可免費取消']"
                ratingScore="4.2"
                ratingCount="333"
                alreadyBuy="500"
                originalPrice="NT$ 4,500"
                discountPrice="NT$ 3,690"
              />
            </swiper-slide>
            <swiper-slide>
              <CommonAttractionCard
                img="/images/home/journey-4.webp"
                name="墨爾本市區導覽｜壁畫巷＋隱藏咖啡廳之旅，體驗本地咖啡文化、隱藏小巷拍照"
                :tags="['專業導覽', '3 天前可免費取消']"
                ratingScore="4.2"
                ratingCount="333"
                alreadyBuy="500"
                originalPrice="NT$ 2,480"
                discountPrice="NT$ 1,280"
              />
            </swiper-slide>
            <swiper-slide>
              <CommonAttractionCard
                img="/images/home/journey-5.webp"
                name="大洋路經典一日遊｜中文導覽！體驗澳洲最夢幻的海岸線"
                :tags="['中文導覽', '5 天前可免費取消']"
                ratingScore="4.2"
                ratingCount="333"
                alreadyBuy="500"
                originalPrice="NT$ 4,500"
                discountPrice="NT$ 3,690"
              />
            </swiper-slide>
          </swiper-container>
        </div>
      </ClientOnly>
    </div>
  </section>
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
