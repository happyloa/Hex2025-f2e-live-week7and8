<script setup>
const props = defineProps({
  /**
   * 靈感地圖序數
   * @type {String}
   */
  number: {
    type: String,
    default: "0",
  },
  /**
   * 靈感地圖圖片
   * @type {String}
   */
  img: {
    type: String,
    default: "/images/home/map-1.webp",
  },
  /**
   * 靈感地圖標籤
   * @type {Array}
   */
  tags: {
    type: Array,
    default: ["標籤1", "標籤2"],
  },
  /**
   * 靈感地圖名稱
   * @type {String}
   */
  name: {
    type: String,
    default: "透過 name prop 來傳入名稱",
  },
  /**
   * 靈感地圖描述
   * @type {String}
   */
  desc: {
    type: String,
    default: "透過 desc prop 來傳入描述",
  },
  /**
   * ZOBAA 建議
   * @type {String}
   */
  suggestion: {
    type: String,
    default: "透過 suggestion prop 來傳入建議",
  },
  /**
   * CTA 按鈕文字
   * @type {String}
   */
  cta: {
    type: String,
    default: "透過 cta prop 來傳入文字",
  },
});
const { number, img, name, tags, desc, suggestion, cta } = toRefs(props);
</script>

<template>
  <article
    class="group relative z-0 flex flex-col gap-2 rounded-3xl bg-white p-4 2xl:flex-row 2xl:gap-8 2xl:rounded-[32px] 2xl:pr-8"
  >
    <!-- 靈感地圖序數 -->
    <span
      class="poppins | absolute -top-10 left-4 z-10 text-[100px] italic leading-[1.2] text-[#DFD2CD] md:-top-[100px] md:left-5 md:text-[200px]"
    >
      {{ number }}
    </span>
    <!-- 裝飾圖片 -->
    <div class="shrink-0 overflow-hidden rounded-2xl">
      <img
        :src="img"
        :alt="name"
        class="h-[200px] w-full rounded-2xl object-cover transition group-hover:scale-110 2xl:h-[412px] 2xl:w-[300px]"
      />
    </div>
    <!-- 標籤、標題、描述、建議、CTA -->
    <div class="space-y-6 md:space-y-10">
      <div class="space-y-2">
        <!-- 標籤 -->
        <ul class="flex gap-2 whitespace-nowrap text-subtitle md:text-title">
          <li
            v-for="(tag, idx) in tags"
            :key="idx"
            class="cursor-pointer rounded-lg bg-primary-10 px-4 py-2 transition hover:bg-primary hover:text-primary-10"
          >
            {{ tag }}
          </li>
        </ul>
        <!-- 標題 -->
        <h3 class="text-h3 text-black 2xl:text-h1">{{ name }}</h3>
        <!-- 描述 -->
        <p class="text-neutral">
          {{ desc }}
        </p>
      </div>
      <!-- 建議 -->
      <div
        class="flex flex-col items-start gap-2 2xl:flex-row 2xl:items-center 2xl:gap-3"
      >
        <span
          class="whitespace-nowrap rounded-lg bg-primary-10 p-2 text-subtitle 2xl:text-title"
        >
          ZOBAA 建議
        </span>
        <p>{{ suggestion }}</p>
      </div>
      <!-- CTA -->
      <NuxtLink
        to="/product-info"
        class="flex items-center justify-between gap-2 rounded-full bg-black px-5 py-4 text-subtitle text-white transition hover:bg-white hover:text-black md:text-title"
      >
        {{ cta }}
        <!-- 裝飾 icon -->
        <svg
          width="32"
          height="32"
          viewBox="0 0 32 32"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
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
  </article>
</template>
