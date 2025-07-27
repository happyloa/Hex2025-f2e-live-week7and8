<script setup>
// 建立 ref 綁定到 swiper-container
const attractionSwiper = ref(null);
// 用 useSwiper 取得 API
const swiper = useSwiper(attractionSwiper);
</script>

<template>
  <ClientOnly>
    <div class="relative">
      <!-- 往前一張 -->
      <button
        @click="swiper.prev()"
        class="shadow-button absolute -left-20 top-1/2 hidden -translate-y-1/2 rounded-xl p-4 2xl:block"
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
        class="shadow-button absolute -right-20 top-1/2 hidden -translate-y-1/2 rounded-xl p-4 2xl:block"
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
        ref="attractionSwiper"
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
            img="/images/search-result/top-1.webp"
            name="環球影城超值一日遊｜哈利波特園區＋快速通關體驗"
            :tags="['即買即用', '5 天前可免費取消']"
            ratingScore="4.8"
            ratingCount="1029"
            alreadyBuy="1000"
            originalPrice="NT$ 6,200"
            discountPrice="NT$ 5,480"
          />
        </swiper-slide>
        <swiper-slide>
          <CommonAttractionCard
            img="/images/search-result/top-2.webp"
            name="奈良梅花鹿餵食體驗＋和服散策｜日式風情輕旅行"
            :tags="['中文導覽', '5 天前可免費取消']"
            ratingScore="4.7"
            ratingCount="880"
            alreadyBuy="900"
            originalPrice="NT$ 2,800"
            discountPrice="NT$ 2,250"
          />
        </swiper-slide>
        <swiper-slide>
          <CommonAttractionCard
            img="/images/search-result/top-3.webp"
            name="黑門市場美食巡禮｜在地職人帶路吃遍大阪經典小吃"
            :tags="['專業導覽', '5 天前可免費取消']"
            ratingScore="4.6"
            ratingCount="540"
            alreadyBuy="700"
            originalPrice="NT$ 2,500"
            discountPrice="NT$ 1,580"
          />
        </swiper-slide>
        <swiper-slide>
          <CommonAttractionCard
            img="/images/search-result/top-4.webp"
            name="大阪夜景直升機體驗｜空中俯瞰梅田摩天輪＋海遊館"
            :tags="['即買即用', '7 天前可免費取消']"
            ratingScore="4.7"
            ratingCount="319"
            alreadyBuy="600"
            originalPrice="NT$ 8,890"
            discountPrice="NT$ 6,890"
          />
        </swiper-slide>
        <swiper-slide>
          <CommonAttractionCard
            img="/images/search-result/top-5.webp"
            name="環球影城超值一日遊｜哈利波特園區＋快速通關體驗"
            :tags="['即買即用', '5 天前可免費取消']"
            ratingScore="4.8"
            ratingCount="1029"
            alreadyBuy="1000"
            originalPrice="NT$ 6,200"
            discountPrice="NT$ 5,480"
          />
        </swiper-slide>
      </swiper-container>
    </div>
  </ClientOnly>
</template>
