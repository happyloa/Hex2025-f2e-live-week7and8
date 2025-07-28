<script setup>
const props = defineProps({
  /**
   * 景點圖片
   * @type {String}
   */
  img: {
    type: String,
    default: "/images/search-result/top-1.webp",
  },
  /**
   * 景點名稱
   * @type {String}
   */
  name: {
    type: String,
    default: "透過 name prop 來傳入景點名稱",
  },
  /**
   * 景點標籤
   * @type {Array}
   */
  tags: {
    type: Array,
    default: ["標籤1", "標籤2"],
  },
  /**
   * 景點評價分數
   * @type {String}
   */
  ratingScore: {
    type: String,
    default: "0.0",
  },
  /**
   * 評價數量
   * @type {String}
   */
  ratingCount: {
    type: String,
    default: "1000",
  },
  /**
   * 已訂購數量
   * @type {String}
   */
  alreadyBuy: {
    type: String,
    default: "1000",
  },
  /**
   * 原價
   * @type {String}
   */
  originalPrice: {
    type: String,
    default: "6000",
  },
  /**
   * 特價
   * @type {String}
   */
  discountPrice: {
    type: String,
    default: "5000",
  },
});
const {
  img,
  name,
  tags,
  ratingScore,
  ratingCount,
  alreadyBuy,
  originalPrice,
  discountPrice,
} = toRefs(props);
</script>

<template>
  <article class="group cursor-pointer">
    <!-- 景點圖片 -->
    <div class="relative mb-4 overflow-hidden rounded-[20px]">
      <img
        :src="img"
        :alt="name"
        class="rounded-[20px] transition group-hover:scale-110"
      />
      <!-- 收藏按鈕 -->
      <button
        type="button"
        class="absolute right-0 top-0 rounded-bl-[20px] rounded-tr-[20px] bg-[#00000066] p-4 backdrop-blur-md"
      >
        <img src="/icons/favorite.svg" alt="收藏景點" />
      </button>
    </div>
    <!-- 景點名稱 -->
    <h3 class="mb-2 text-title text-black transition group-hover:text-primary">
      {{ name }}
    </h3>
    <!-- 景點標籤 -->
    <ul class="mb-2 flex flex-wrap items-center gap-2 whitespace-nowrap">
      <li
        v-for="(tag, idx) in tags"
        :key="idx"
        class="rounded-lg bg-primary-10 px-2 py-1 text-body2"
      >
        {{ tag }}
      </li>
    </ul>
    <!-- 景點評價、訂購數量 -->
    <div
      class="text-body-2 mb-4 flex items-center gap-3 border-b border-neutral-40 pb-4"
    >
      <span class="flex items-center gap-1 border-r border-neutral-40 pr-3">
        <img src="/icons/star.svg" alt="評論星星" />
        <span class="flex gap-1">
          <span class="text-neutral-80">{{ ratingScore }}</span>
          <span class="text-neutral-60">({{ ratingCount }})</span>
        </span>
      </span>
      <span class="text-neutral-80">{{ alreadyBuy }}+ 個已訂購</span>
    </div>
    <!-- 價錢 -->
    <div>
      <h4 class="text-h6">{{ discountPrice }}</h4>
      <p class="text-body2 text-[#808080] line-through">{{ originalPrice }}</p>
    </div>
  </article>
</template>
