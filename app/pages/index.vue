<script setup>
const router = useRouter();

// 建立 ref 綁定到 swiper-container
const mapSwiper = ref(null);
const journeySwiper = ref(null);
// 用 useSwiper 取得 API
const swiper2 = useSwiper(mapSwiper);
const swiper = useSwiper(journeySwiper);

const search = ref(""); // 搜尋欄內容
function handleSearch() {
  if (search.value.trim() !== "") {
    router.push("/search-result");
  }
}

const activeIndex = ref(0); // 預設第一張卡片（峇里島渡假漫遊）大
const mapActiveIndex = ref(0);
let hoverTimeout = null;

function handleMouseEnter(i) {
  // 清除離開時的延遲
  clearTimeout(hoverTimeout);
  activeIndex.value = i;
}
function handleMouseLeave() {
  // 滑鼠離開時，0.3秒後恢復第一張
  hoverTimeout = setTimeout(() => {
    activeIndex.value = 0;
  }, 300);
}

const journeyActiveIndex = ref(0);

// Swiper slide 變換時同步 index
function onJourneySlideChange(e) {
  const [inst] = e.detail;
  journeyActiveIndex.value = inst.realIndex;
}
function onMapSlideChange(e) {
  const [inst] = e.detail;
  mapActiveIndex.value = inst.realIndex;
}

// 點點點擊 → 跳到指定張
function goToJourney(idx) {
  journeySwiper.value?.swiper?.slideToLoop(idx);
}
function goToMap(idx) {
  mapSwiper.value?.swiper?.slideToLoop(idx);
}

// 跑馬燈的速度，單位：秒，數值越小越快
const marqueeSpeed = 20;
</script>

<template>
  <!-- hero -->
  <section
    class="h-[480px] bg-[url('/images/home/hero-bg.webp')] bg-cover bg-[70%_center] px-3 pt-12 lg:-mt-[88px] lg:h-[1080px] lg:bg-center lg:pt-[300px] xl:pl-[22%]"
  >
    <div class="max-w-[880px]">
      <p
        class="mb-3 w-fit rounded-lg bg-primary-10 p-2 text-title lg:rounded-2xl lg:p-4 lg:text-h6"
      >
        ZOBAA 旅行推薦平台
      </p>
      <h1 class="mb-2 text-h3 lg:mb-6 lg:text-display">
        用旅行，<br class="block lg:hidden" />收藏世界的樣子
      </h1>
      <p class="mb-6 text-subtitle text-primary-80 lg:mb-10 lg:text-h6">
        ZOBAA
        整合熱門景點推薦、即時優惠、獨家行程，從比價到訂購，一次完成你的完美出遊計畫。
      </p>
      <!-- 搜尋框 -->
      <div
        class="flex max-w-[720px] items-center justify-between gap-3 rounded-2xl border border-neutral-40 bg-white p-2"
      >
        <!-- 搜尋框與放大鏡 icon -->
        <div class="flex flex-1 items-center gap-2">
          <!-- 放大鏡 icon -->
          <svg
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            class="shrink-0 text-neutral"
          >
            <path
              d="m19.6 21-6.3-6.3q-.75.6-1.725.95T9.5 16q-2.725 0-4.612-1.887T3 9.5t1.888-4.612T9.5 3t4.613 1.888T16 9.5a6.1 6.1 0 0 1-1.3 3.8l6.3 6.3zM9.5 14q1.875 0 3.188-1.312Q14 11.375 14 9.5t-1.312-3.187T9.5 5 6.313 6.313 5 9.5t1.313 3.188T9.5 14"
              fill="currentColor"
            />
          </svg>
          <input
            v-model="search"
            type="search"
            placeholder="搜尋景點、地點或城市"
            name="search"
            id="search"
            class="w-full text-h6 font-normal placeholder:text-h6 placeholder:font-normal placeholder:text-neutral-60 focus:outline-none"
          />
        </div>
        <button
          type="button"
          class="shrink-0 rounded-xl bg-primary px-4 py-3 text-center text-title text-white transition hover:bg-primary-120"
          @click="handleSearch"
        >
          開始探索旅程
        </button>
      </div>
    </div>
  </section>
  <!-- 你的專屬推薦 -->
  <section class="bg-[#221F1E] py-10 md:py-[120px]">
    <div class="mx-auto max-w-container">
      <!-- 標題、推薦文字 -->
      <div
        class="mb-10 flex flex-col justify-between gap-6 px-3 text-white md:mb-20 md:flex-row md:items-center"
      >
        <h2 class="text-h3 md:text-display">你的<br />專屬推薦</h2>
        <div>
          <p
            class="mb-3 space-y-1 text-subtitle md:mb-6 md:space-y-2 md:text-h6"
          >
            <span class="block">來看我們的精選推薦行程，滿意度高達 99.2%</span>
            <span class="block">給自己一個難忘的旅遊行程吧！</span>
          </p>
          <NuxtLink
            to="/product-info"
            class="flex items-center gap-2 text-subtitle transition hover:text-primary-40 md:text-title"
          >
            查看全部行程
            <!-- 裝飾箭頭 -->
            <svg
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              class="size-4 md:size-6"
            >
              <g clip-path="url(#a)">
                <path
                  d="m12 4-1.41 1.41L16.17 11H4v2h12.17l-5.58 5.59L12 20l8-8z"
                  fill="currentColor"
                />
              </g>
            </svg>
          </NuxtLink>
        </div>
      </div>
      <!-- 電腦版懸停卡片 -->
      <ul class="hidden h-[600px] justify-between px-3 xl:flex">
        <li
          v-for="(item, i) in 4"
          :key="i"
          @mouseenter="handleMouseEnter(i)"
          @mouseleave="handleMouseLeave"
        >
          <NuxtLink
            to="/product-info"
            class="group relative block h-full content-end overflow-y-hidden rounded-[32px] bg-cover bg-center p-8 text-white transition-all duration-500"
            :class="activeIndex === i ? 'w-[416px]' : 'w-[270px]'"
            :style="`background-image: url(/images/home/recommend-${i + 1}.webp)`"
          >
            <!-- 遮罩 -->
            <div
              class="pointer-events-none absolute inset-0 z-0 rounded-[32px] bg-gradient-to-t from-[#221F1E99] to-transparent"
            ></div>
            <div class="relative z-10">
              <h3 class="mb-2 text-h2">
                {{
                  [
                    "峇里島渡假漫遊",
                    "日本深度賞櫻計畫",
                    "紐西蘭雪山探險",
                    "摩洛哥迷幻之旅",
                  ][i]
                }}
              </h3>
              <p :class="activeIndex === i ? 'mb-6' : 'group-hover:mb-6'">
                {{
                  [
                    "精選五星級海灘度假村，專屬私人管家服務，讓您徹底放鬆身心。",
                    "春季限定，東京、京都、大阪賞櫻之旅，體驗日本文化的精髓。",
                    "探索南島壯麗的自然風光，體驗各種極限運動和戶外活動。",
                    "漫步沙漠與古城之間，探索千年文化與色彩繽紛的市集風情。",
                  ][i]
                }}
              </p>
              <!-- 按鈕 -->
              <button
                type="button"
                class="bottom-0 flex w-full items-center justify-between gap-2 rounded-full bg-white px-5 py-4 text-title text-black transition-all"
                :class="
                  activeIndex === i
                    ? ''
                    : 'absolute translate-y-10 opacity-0 group-hover:static group-hover:translate-y-0 group-hover:opacity-100'
                "
              >
                訂購行程
                <!-- 裝飾 icon -->
                <svg width="32" height="32" viewBox="0 0 32 32" fill="none">
                  <rect width="32" height="32" rx="16" fill="#fff" />
                  <g clip-path="url(#a)">
                    <path
                      d="m16 8-1.41 1.41L20.17 15H8v2h12.17l-5.58 5.59L16 24l8-8z"
                      fill="#000"
                    />
                  </g>
                </svg>
              </button>
            </div>
          </NuxtLink>
        </li>
      </ul>
      <!-- 手機版卡片輪播 -->
      <ClientOnly>
        <swiper-container
          ref="journeySwiper"
          class="mb-10 block h-[400px] xl:hidden"
          :breakpoints="{
            640: {
              slidesPerView: 2.2,
            },
            0: {
              slidesPerView: 1.3,
            },
          }"
          spaceBetween="4"
          :autoplay="{
            delay: 5000,
          }"
          :loop="true"
          @swiperslidechange="onJourneySlideChange"
        >
          <swiper-slide v-for="(item, i) in 4" :key="i" class="pl-3">
            <NuxtLink
              to="/product-info"
              class="group relative block h-full content-end rounded-3xl bg-cover bg-center p-4 text-white"
              :style="`background-image: url(/images/home/recommend-${i + 1}.webp)`"
            >
              <!-- 遮罩 -->
              <div
                class="pointer-events-none absolute inset-0 z-0 rounded-3xl bg-gradient-to-t from-[#221F1E99] to-transparent"
              ></div>
              <div class="relative z-10">
                <h3 class="mb-2 text-h4">
                  {{
                    [
                      "峇里島渡假漫遊",
                      "日本深度賞櫻計畫",
                      "紐西蘭雪山探險",
                      "摩洛哥迷幻之旅",
                    ][i]
                  }}
                </h3>
                <p class="mb-6 text-body2">
                  {{
                    [
                      "精選五星級海灘度假村，專屬私人管家服務，讓您徹底放鬆身心。",
                      "春季限定，東京、京都、大阪賞櫻之旅，體驗日本文化的精髓。",
                      "探索南島壯麗的自然風光，體驗各種極限運動和戶外活動。",
                      "漫步沙漠與古城之間，探索千年文化與色彩繽紛的市集風情。",
                    ][i]
                  }}
                </p>
                <!-- 按鈕 -->
                <button
                  type="button"
                  class="flex w-full items-center justify-between gap-2 rounded-full bg-white px-5 py-4 text-title text-black"
                >
                  訂購行程
                  <!-- 裝飾 icon -->
                  <svg width="32" height="32" viewBox="0 0 32 32" fill="none">
                    <rect width="32" height="32" rx="16" fill="#fff" />
                    <g clip-path="url(#a)">
                      <path
                        d="m16 8-1.41 1.41L20.17 15H8v2h12.17l-5.58 5.59L16 24l8-8z"
                        fill="#000"
                      />
                    </g>
                  </svg>
                </button>
              </div>
            </NuxtLink>
          </swiper-slide>
        </swiper-container>
        <!-- 自製點點 -->
        <div class="block xl:hidden">
          <div class="flex justify-center gap-1">
            <button
              v-for="i in 4"
              :key="i"
              type="button"
              @click="goToJourney(i - 1)"
              class="h-2 rounded-full transition-all duration-300"
              :class="
                journeyActiveIndex === i - 1
                  ? 'w-6 bg-primary-40'
                  : 'w-2 bg-neutral-40'
              "
              :aria-pressed="journeyActiveIndex === i - 1"
              :aria-label="`跳至第 ${i} 張`"
            ></button>
          </div>
        </div>
      </ClientOnly>
    </div>
  </section>
  <!-- 踏上旅程的第一站 -->
  <section
    class="overflow-x-hidden bg-contain bg-center bg-no-repeat px-3 py-10 md:bg-[url('/images/home/deco-bg.svg')] md:py-[120px]"
  >
    <div
      class="relative mx-auto flex max-w-container flex-col-reverse justify-between gap-10 md:flex-row md:items-center"
    >
      <!-- 裝飾文字 -->
      <img
        src="/images/home/deco-text.svg"
        alt="裝飾文字"
        class="absolute -left-[232px] bottom-60 hidden xl:block"
      />
      <!-- 圖片容器 -->
      <div class="lg:max-w-[716px]">
        <div
          class="mb-4 flex flex-col gap-4 pr-0 sm:flex-row md:mb-5 md:gap-6 md:pr-10 lg:pr-20"
        >
          <!-- 卡片1 -->
          <article
            class="group rounded-2xl border border-neutral-40 md:rounded-3xl"
          >
            <div class="overflow-hidden rounded-t-2xl md:rounded-t-3xl">
              <img
                src="/images/home/intro-1.webp"
                alt="ZOBAA 專屬推薦行程"
                class="w-full transition group-hover:scale-110"
              />
            </div>
            <footer class="rounded-b-2xl bg-white p-6 md:rounded-b-3xl">
              <h3 class="mb-2 text-h6 text-black">ZOBAA 專屬推薦行程</h3>
              <p class="text-body text-neutral">嚴選深度行程，豐富旅行靈感</p>
            </footer>
          </article>
          <!-- 卡片2 -->
          <article
            class="group rounded-2xl border border-neutral-40 md:rounded-3xl"
          >
            <div class="overflow-hidden rounded-t-2xl md:rounded-t-3xl">
              <img
                src="/images/home/intro-2.webp"
                alt="旅人攻略集合"
                class="w-full transition group-hover:scale-110"
              />
            </div>
            <footer class="rounded-b-2xl bg-white p-6 md:rounded-b-3xl">
              <h3 class="mb-2 text-h6 text-black">旅人攻略集合</h3>
              <p class="text-body text-neutral">景點、交通、私房景點一次掌握</p>
            </footer>
          </article>
        </div>
        <div
          class="flex flex-col gap-4 pl-0 sm:flex-row md:gap-6 md:pl-10 lg:pl-20"
        >
          <!-- 卡片3 -->
          <article
            class="group rounded-2xl border border-neutral-40 md:rounded-3xl"
          >
            <div class="overflow-hidden rounded-t-2xl md:rounded-t-3xl">
              <img
                src="/images/home/intro-3.webp"
                alt="優惠機票、酒店"
                class="w-full transition group-hover:scale-110"
              />
            </div>
            <footer class="rounded-b-2xl bg-white p-6 md:rounded-b-3xl">
              <h3 class="mb-2 text-h6 text-black">優惠機票、酒店</h3>
              <p class="text-body text-neutral">即時比價，聰明出發不踩雷</p>
            </footer>
          </article>
          <!-- 卡片4 -->
          <article
            class="group rounded-2xl border border-neutral-40 md:rounded-3xl"
          >
            <div class="overflow-hidden rounded-t-2xl md:rounded-t-3xl">
              <img
                src="/images/home/intro-4.webp"
                alt="銀行專屬優惠"
                class="w-full transition group-hover:scale-110"
              />
            </div>
            <footer class="rounded-b-2xl bg-white p-6 md:rounded-b-3xl">
              <h3 class="mb-2 text-h6 text-black">銀行專屬優惠</h3>
              <p class="text-body text-neutral">使用指定卡別享受獨家旅遊好康</p>
            </footer>
          </article>
        </div>
      </div>
      <!-- 標題容器 -->
      <div class="shrink-0">
        <h2 class="mb-6 text-h3 lg:text-display">
          ZOBAA!<br />踏上旅程的<br />第一站
        </h2>
        <p class="text-h6 text-primary-60">
          探索最熱門的旅遊主題，<br />從旅人必備攻略到獨家優惠，<br />全都為你精挑細選。
        </p>
      </div>
    </div>
  </section>
  <!-- 上方斜線裝飾 -->
  <div class="up-deco | h-20 bg-primary-10"></div>
  <!-- 靈感地圖 -->
  <section class="overflow-x-hidden bg-primary-10 py-10 md:py-[120px]">
    <div class="mx-auto max-w-container">
      <!-- 標題、簡介 -->
      <div
        class="flex flex-col justify-between gap-6 px-4 lg:flex-row lg:items-center"
      >
        <!-- 標題、裝飾、tab -->
        <div class="flex-1">
          <h2 class="relative mb-6 text-h3 md:max-w-[469px] md:text-display">
            <img
              src="/images/home/deco-text-1.svg"
              alt="裝飾圖片"
              class="absolute -top-12 left-[133px] z-10 w-[130px] md:-right-8 md:left-auto md:w-[172px]"
            />
            <span class="mb-2 block">今年旅行的</span><span>靈感地圖</span>
          </h2>
          <!-- tab -->
          <ul
            class="flex items-center gap-2 overflow-x-auto whitespace-nowrap text-title"
          >
            <li
              class="cursor-pointer rounded-lg bg-primary px-4 py-2 text-white"
            >
              全部
            </li>
            <li
              class="cursor-pointer rounded-lg bg-white px-4 py-2 transition hover:bg-primary hover:text-white"
            >
              亞洲
            </li>
            <li
              class="cursor-pointer rounded-lg bg-white px-4 py-2 transition hover:bg-primary hover:text-white"
            >
              歐洲
            </li>
            <li
              class="cursor-pointer rounded-lg bg-white px-4 py-2 transition hover:bg-primary hover:text-white"
            >
              美洲
            </li>
            <li
              class="cursor-pointer rounded-lg bg-white px-4 py-2 transition hover:bg-primary hover:text-white"
            >
              大洋洲
            </li>
            <li
              class="cursor-pointer rounded-lg bg-white px-4 py-2 transition hover:bg-primary hover:text-white"
            >
              非洲
            </li>
          </ul>
        </div>
        <!-- 簡介、電腦版輪播按鈕 -->
        <div>
          <p class="text-start text-subtitle lg:mb-6 lg:text-right lg:text-h6">
            <span class="block lg:mb-2">
              來自旅人搜尋、收藏與討論最多的目的地排行榜，
            </span>
            <span>一場風格與故事感兼具的靈感旅行，就從這裡開始。</span>
          </p>
          <!-- 電腦版輪播按鈕 -->
          <div class="hidden justify-end gap-2 lg:flex">
            <!-- 往前一張 -->
            <button
              type="button"
              class="rounded-xl bg-white p-4 transition hover:bg-primary hover:text-white"
              @click="swiper2.prev()"
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
              type="button"
              class="rounded-xl bg-white p-4 transition hover:bg-primary hover:text-white"
              @click="swiper2.next()"
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
          </div>
        </div>
      </div>
      <ClientOnly>
        <swiper-container
          class="mb-10 pl-4 md:mb-0 xl:w-screen xl:px-0"
          ref="mapSwiper"
          :breakpoints="{
            1536: {
              slidesPerView: 2.5,
            },
            1280: {
              slidesPerView: 1.8,
            },
            768: {
              slidesPerView: 1.4,
            },
            0: {
              slidesPerView: 1.1,
            },
          }"
          :autoplay="{
            delay: 5000,
          }"
          :loop="true"
          @swiperslidechange="onMapSlideChange"
        >
          <swiper-slide class="pr-4 pt-10 md:pr-6 md:pt-20">
            <CommonHomeMapCard
              number="1"
              img="/images/home/map-1.webp"
              :tags="['亞洲', '日本京都']"
              name="走進四季交織的文化時光"
              desc="穿過紅葉與古寺的交錯，感受從櫻花盛開到秋楓染紅的日式浪漫。"
              suggestion="賞楓最佳時間是 11 月中旬，推薦清水寺和南禪寺一帶 🍁"
              cta="立即探索魅力古都"
            />
          </swiper-slide>
          <swiper-slide class="pr-4 pt-10 md:pr-6 md:pt-20">
            <CommonHomeMapCard
              number="2"
              img="/images/home/map-2.webp"
              :tags="['亞洲', '南韓首爾']"
              name="從街邊美食到韓劇場景"
              desc="白天在弘大小巷探店，夜晚登上南山塔俯瞰整座城市的閃爍。"
              suggestion="弘大周邊週五傍晚最熱鬧，小吃與街頭藝人齊發✨"
              cta="感受韓系風格日常"
            />
          </swiper-slide>
          <swiper-slide class="pr-4 pt-10 md:pr-6 md:pt-20">
            <CommonHomeMapCard
              number="3"
              img="/images/home/map-3.webp"
              :tags="['歐洲', '法國巴黎']"
              name="在藝術與咖啡香中迷路"
              desc="穿梭左岸書店與畫廊，任由麵包香與建築細節擁抱你的步伐。"
              suggestion="走進瑪黑區，最容易與巴黎風格不期而遇 ☕️"
              cta="開啟我的巴黎報險"
            />
          </swiper-slide>
          <swiper-slide class="pr-4 pt-10 md:pr-6 md:pt-20">
            <CommonHomeMapCard
              number="4"
              img="/images/home/map-4.webp"
              :tags="['大洋洲', '澳洲雪梨']"
              name="城市與大自然的交會"
              desc="清晨在海灘做瑜珈，午後漫步歌劇院，享受城市的節奏與野性的呼喚。"
              suggestion="別錯過傍晚在雪梨港看日落＋欣賞歌劇院夜燈 ✨"
              cta="現在就飛向南半球"
            />
          </swiper-slide>
          <swiper-slide class="pr-4 pt-10 md:pr-6 md:pt-20">
            <CommonHomeMapCard
              number="5"
              img="/images/home/map-5.webp"
              :tags="['非洲', '埃及開羅']"
              name="穿越千年時光的沙漠冒險"
              desc="乘著駱駝走過古老遺跡，抬頭仰望太陽神的光芒，在歷史與傳說之間迷失。"
              suggestion="建議早上 8 點前到吉薩金字塔，避開人潮與烈日 ☀️"
              cta="揭開古文明的面紗"
            />
          </swiper-slide>
        </swiper-container>
        <!-- 自製點點 -->
        <div class="block md:hidden">
          <div class="flex justify-center gap-1">
            <button
              v-for="i in 5"
              :key="i"
              type="button"
              @click="goToMap(i - 1)"
              class="h-2 rounded-full transition-all duration-300"
              :class="
                mapActiveIndex === i - 1 ? 'w-6 bg-primary' : 'w-2 bg-white'
              "
              :aria-pressed="mapActiveIndex === i - 1"
              :aria-label="`跳至第 ${i} 張`"
            ></button>
          </div>
        </div>
      </ClientOnly>
    </div>
  </section>
  <!-- 下方斜線裝飾 -->
  <div class="down-deco | h-20 bg-primary-10"></div>
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
/* 上方斜線裝飾 */
.up-deco {
  clip-path: polygon(0 80%, 100% 0, 100% 100%, 0 100%);
}
/* 下方斜線裝飾 */
.down-deco {
  clip-path: polygon(0 0, 100% 0, 100% 20%, 0 100%);
}

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
