<script setup>
useSeoMeta({
  title: "商品介紹 | 2025 切版直播班 - 旅遊網站 W7&W8",
  ogTitle: "商品介紹 | 2025 切版直播班 - 旅遊網站 W7&W8",
});

/* =====================================================================
 * 1) 圖片輪播（Swiper）：資料、狀態與事件
 * ---------------------------------------------------------------------
 * - slides：輪播圖片來源
 * - harukas300ImgSwiper：對 <swiper-container> 元素的 ref
 * - activeIndex：目前顯示的實際索引（loop 模式下要用 realIndex）
 * - onSlideChange：同步 activeIndex
 * - goTo(idx)：點自製圓點 → 跳到指定張
 * ===================================================================== */
const slides = [
  "/images/site/harukas-1.webp",
  "/images/site/harukas-2.webp",
  "/images/site/harukas-3.webp",
];

const harukas300ImgSwiper = ref(null);
const activeIndex = ref(0);

const onSlideChange = (e) => {
  // e.detail[0] 是 Swiper instance
  const [inst] = e.detail;
  activeIndex.value = inst.realIndex; // loop 模式下使用 realIndex
};

/** 點點點擊 → 跳到指定張（用 element.swiper 呼叫方法） */
const goTo = (idx) => {
  // ?. 防呆：DOM 還沒 mount 完成時不會拋錯
  harukas300ImgSwiper.value?.swiper?.slideToLoop(idx);
};

// 三張方案卡片的開合狀態、數量
const isObservationDeckSelected = ref(true);
const observationDeckCount = ref(2);
const isTrainTicketSelected = ref(false);
const trainTicketCount = ref(2);
const isTakoyakiSelected = ref(false);
const takoyakiCount = ref(2);

/* =====================================================================
 * 2) 內容顯示開關：商品說明「展開更多」
 * ===================================================================== */
const showMore = ref(false);

/* =====================================================================
 * 3) Scroll Spy（側邊選單同步高亮）
 * ---------------------------------------------------------------------
 * - sectionIds：需要偵測的區塊 id（要與模板內 <h2 id="..."> 對應）
 * - activeSection：目前在視窗中「經過頂部 offset」後最後一個 section
 * - onScroll()：滾動時更新 activeSection
 *   規則：heading top - offset <= 0 視為已「進入」視窗的偵測區
 * ===================================================================== */
const sectionIds = ["product-info", "how-to-use", "reviews"];
const activeSection = ref(sectionIds[0]);

function onScroll() {
  const offset = 120; // 距離頁面頂端 120px 時屬於 active
  let current = sectionIds[0];

  for (const id of sectionIds) {
    const el = document.getElementById(id);
    if (!el) continue;
    const rect = el.getBoundingClientRect();
    // 當標題已經「進入」 offset 區塊（頂部 <= 120px）就視為目前區塊
    if (rect.top - offset <= 0) {
      current = id;
    }
  }
  activeSection.value = current;
}

/* =====================================================================
 * 4) 生命週期：掛載/卸載
 * ---------------------------------------------------------------------
 * - 掛載時立刻判斷一次 activeSection，並綁定 scroll 事件（passive）
 * - 離開時移除事件監聽
 * ===================================================================== */
onMounted(() => {
  // 首次進頁先算一次，避免一開始沒有高亮
  onScroll();
  window.addEventListener("scroll", onScroll, { passive: true });
});

onBeforeUnmount(() => {
  window.removeEventListener("scroll", onScroll);
});
</script>

<template>
  <!-- 麵包屑、圖片、簡介 -->
  <section class="md:px-3 md:py-20">
    <div class="mx-auto max-w-container">
      <!-- 麵包屑（只有電腦版有） -->
      <nav class="mb-10 hidden items-center gap-3 md:flex">
        <NuxtLink to="/">首頁</NuxtLink>
        <span class="text-body2 text-neutral-60">/</span>
        <NuxtLink to="/">日本</NuxtLink>
        <span class="text-body2 text-neutral-60">/</span>
        <NuxtLink to="/">關西</NuxtLink>
        <span class="text-body2 text-neutral-60">/</span>
        <NuxtLink to="/search-result">大阪</NuxtLink>
        <span class="text-body2 text-neutral-60">/</span>
        <span class="text-neutral-60">阿倍野Harukas300觀覽台</span>
      </nav>
      <!-- 電腦版圖片 -->
      <div class="relative mb-6 hidden grid-cols-3 gap-2 rounded-3xl md:grid">
        <!-- 查看更多按鈕 -->
        <button
          type="button"
          class="absolute bottom-8 right-8 z-10 rounded-xl border border-primary bg-white px-8 py-4 text-title transition hover:bg-primary hover:text-white"
        >
          查看更多
        </button>
        <img
          src="/images/site/harukas-1.webp"
          alt="阿倍野1"
          class="col-span-2 row-span-2 h-full rounded-l-3xl"
        />
        <img
          src="/images/site/harukas-2.webp"
          alt="阿倍野2"
          class="rounded-tr-3xl"
        />
        <img
          src="/images/site/harukas-3.webp"
          alt="阿倍野3"
          class="rounded-br-3xl"
        />
      </div>
      <!-- 手機版圖片輪播 -->
      <ClientOnly>
        <div class="relative block md:hidden">
          <swiper-container
            ref="harukas300ImgSwiper"
            :breakpoints="{
              640: {
                slidesPerView: 1.4,
              },
              0: {
                slidesPerView: 1,
              },
            }"
            space-between="8"
            :autoplay="{
              delay: 5000,
            }"
            :loop="true"
            @swiperslidechange="onSlideChange"
          >
            <swiper-slide v-for="(img, idx) in slides" :key="idx">
              <img
                :src="img"
                :alt="`harukas 圖片${idx + 1}`"
                class="aspect-[375/240] object-cover"
              />
            </swiper-slide>
          </swiper-container>
          <!-- 自製點點 -->
          <div
            class="absolute bottom-6 left-1/2 z-10 flex -translate-x-1/2 gap-1"
          >
            <button
              v-for="(img, i) in slides"
              :key="img"
              type="button"
              @click="goTo(i)"
              class="h-2 rounded-full transition-all duration-300"
              :class="activeIndex === i ? 'w-6 bg-primary' : 'w-2 bg-white'"
              :aria-pressed="activeIndex === i"
              :aria-label="`跳至第 ${i + 1} 張`"
            ></button>
          </div>
        </div>
      </ClientOnly>
      <!-- 簡介 -->
      <div class="grid grid-cols-1 gap-6 lg:grid-cols-3">
        <main class="col-span-2 px-3 py-10 md:p-0">
          <div class="space-y-6 rounded-3xl bg-primary-10 p-6">
            <!-- 標題與收藏 -->
            <div class="flex flex-wrap items-center gap-2">
              <h1 class="text-h5 text-black md:text-h3">
                阿倍野Harukas300觀覽台
              </h1>
              <button
                type="button"
                class="flex items-center gap-2 p-2 text-title"
              >
                <!-- 收藏 icon -->
                <svg
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M12 20.325a2.2 2.2 0 0 1-.712-.125 1.7 1.7 0 0 1-.638-.4l-1.725-1.575a69 69 0 0 1-4.788-4.812Q1.999 11.026 2 8.15 2 5.8 3.575 4.225T7.5 2.65q1.325 0 2.5.562t2 1.538a5.95 5.95 0 0 1 2-1.537 5.7 5.7 0 0 1 2.5-.563q2.35 0 3.925 1.575T22 8.15q0 2.875-2.125 5.275a60 60 0 0 1-4.825 4.825l-1.7 1.55a1.65 1.65 0 0 1-.637.4 2.2 2.2 0 0 1-.713.125M11.05 6.75q-.725-1.024-1.55-1.563t-2-.537q-1.5 0-2.5 1t-1 2.5q0 1.3.925 2.763a19 19 0 0 0 2.213 2.837 39 39 0 0 0 2.65 2.575Q11.15 17.525 12 18.3q.85-.775 2.213-1.975t2.65-2.575a19 19 0 0 0 2.212-2.837Q20 9.45 20 8.15q0-1.5-1-2.5t-2.5-1q-1.175 0-2 .538-.825.539-1.55 1.562a1.14 1.14 0 0 1-.95.5 1.14 1.14 0 0 1-.95-.5"
                    fill="#4A3830"
                  />
                </svg>
                收藏
              </button>
            </div>
            <!-- 景點評價、訂購數量、地址 -->
            <div
              class="text-body-2 flex flex-wrap items-center gap-3 text-black"
            >
              <!-- 評價與數量 -->
              <span class="flex items-center gap-1">
                <img src="/icons/star.svg" alt="評論星星" />
                <span class="text-title">4.8</span>
                <span class="self-end text-neutral-60">(1029)</span>
              </span>
              <!-- 垂直分隔線 -->
              <div class="h-[14px] border-l border-neutral-60"></div>
              <span>1,000+ 個已訂購</span>
              <!-- 垂直分隔線 -->
              <div class="h-[14px] border-l border-neutral-60"></div>
              <!-- 地址 -->
              <a
                href="https://www.google.com/maps/search/?api=1&query=阿倍野 HARUKAS 300 海闊天空展望台"
                target="_blank"
                rel="noopener noreferrer"
                class="flex items-center gap-1 hover:underline"
              >
                <!-- 地標 icon -->
                <svg
                  width="16"
                  height="16"
                  viewBox="0 0 16 16"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <g clip-path="url(#a)">
                    <path
                      d="M8 2a4.667 4.667 0 0 0-4.667 4.667c0 1.908 1.188 3.748 2.492 5.174A17.3 17.3 0 0 0 8 13.84q.174-.135.41-.327a17 17 0 0 0 1.765-1.67c1.304-1.427 2.492-3.267 2.492-5.175A4.667 4.667 0 0 0 8 2m0 13.476-.378-.26-.002-.001-.004-.004-.013-.009-.05-.035-.18-.132a18.7 18.7 0 0 1-2.532-2.293C3.48 11.25 2 9.091 2 6.666a6 6 0 0 1 12 0c0 2.425-1.479 4.585-2.841 6.075a18.7 18.7 0 0 1-2.761 2.46l-.014.01-.004.003h-.001zM8 5.333A1.333 1.333 0 1 0 8 8a1.333 1.333 0 0 0 0-2.667M5.333 6.667a2.667 2.667 0 1 1 5.334 0 2.667 2.667 0 0 1-5.334 0"
                      fill="#000"
                    />
                  </g>
                </svg>
                阿倍野 HARUKAS 300 海闊天空展望台
              </a>
            </div>
            <!-- 簡介文字 -->
            <ul class="list-inside list-disc pl-2 text-body text-neutral">
              <li>
                登上日本最高摩天大樓，從 300
                公尺高空飽覽大阪全景，日夜皆美、四季皆宜。
              </li>
              <li>
                58 樓設有空中庭園與 Sky Garden
                餐廳，在都市高處也能享受放鬆綠意與美食饗宴。
              </li>
              <li>
                60
                樓空中迴廊以全景設計打造，無論白天或黃昏，都能盡覽大阪市區與天際線。
              </li>
              <li>
                園區內集結多間熱門品牌與伴手禮店，提供現場退稅服務，讓你購物更便利。
              </li>
            </ul>
            <!-- 查看更多 -->
            <a
              href="#plans"
              class="flex items-center gap-2 text-body text-black transition hover:text-primary"
            >
              查看更多
              <svg
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <g clip-path="url(#a)">
                  <path
                    d="M8.59 16.59 13.17 12 8.59 7.41 10 6l6 6-6 6z"
                    fill="currentColor"
                  />
                </g>
              </svg>
            </a>
          </div>
        </main>
        <aside
          class="col-span-1 hidden flex-col rounded-3xl border border-neutral-40 p-6 lg:flex"
        >
          <span
            class="mb-4 inline-block self-start rounded-lg bg-danger-10 px-3 py-2 text-subtitle text-danger"
            >限定優惠 75 折
          </span>
          <h2 class="mb-1 text-h3 text-black">NT$ 415</h2>
          <p class="poppins | text-neutral-60 line-through">NT$ 520</p>
          <!-- 前往登入或註冊 -->
          <a
            href="#plans"
            class="mt-auto rounded-xl bg-primary p-4 text-center text-title text-white transition hover:bg-primary-120"
          >
            選擇方案
          </a>
        </aside>
      </div>
    </div>
  </section>
  <!-- 選擇方案 -->
  <section id="plans" class="bg-primary-10 px-3 py-10 md:py-[120px]">
    <div class="mx-auto max-w-container">
      <h2 class="mb-6 flex items-center gap-2 text-h3">
        <img src="/icons/title-hash.svg" alt="井字裝飾" />選擇方案
      </h2>
      <ul class="space-y-4 md:space-y-6">
        <!-- 熱門選擇 -->
        <li>
          <article>
            <h3
              class="relative overflow-hidden rounded-t-2xl bg-primary p-4 text-h6 text-primary-10 md:rounded-t-[20px] md:p-6"
            >
              <!-- 井字號裝飾 -->
              <svg
                width="72"
                height="48"
                viewBox="0 0 72 48"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                class="absolute left-0 top-0"
              >
                <path
                  d="m37.238 48 11.813-72H60.3L48.488 48zM5 30.14l1.863-11.25h56.25L61.25 30.14zM11.926 48l11.812-72h11.25L23.176 48zM9.113 5.11l1.899-11.25h56.25L65.363 5.11z"
                  fill="#F3EEEC"
                  fill-opacity=".2"
                />
              </svg>
              熱門選擇
            </h3>
            <!-- 卡片本身（整個白色區塊） -->
            <div class="rounded-b-2xl bg-white p-4 md:rounded-b-[20px] md:p-6">
              <!-- 圖片、名稱、標籤、簡介、價格、是否選擇 -->
              <div class="flex flex-col justify-between gap-6 md:flex-row">
                <!-- 圖片、名稱、標籤、簡介 -->
                <div class="flex flex-col items-start gap-4 lg:flex-row">
                  <img
                    src="/images/site/harukas-2.webp"
                    alt="海闊天空展望台門票"
                    class="max-w-[200px] rounded-2xl"
                  />
                  <div class="text-body2 text-neutral">
                    <h4 class="mb-4 text-h6 text-black">海闊天空展望台門票</h4>
                    <ul class="mb-8 flex flex-wrap gap-2">
                      <li class="rounded-lg bg-neutral-40 px-2 py-1">
                        立即確認
                      </li>
                      <li class="rounded-lg bg-neutral-40 px-2 py-1">
                        有效期：60 天
                      </li>
                      <li class="rounded-lg bg-neutral-40 px-2 py-1">
                        出示憑證入場
                      </li>
                      <li class="rounded-lg bg-neutral-40 px-2 py-1">
                        兌換前可免費取消
                      </li>
                    </ul>
                    <ul class="list-inside list-disc pl-2">
                      <li>
                        阿倍野展望台門票僅限使用一次，退場後無法再次入場。
                      </li>
                      <li>
                        出發前請再次確認設施是否正常營業，請參考官網。如遇臨時休館，恕不另行通知。
                      </li>
                    </ul>
                  </div>
                </div>
                <!-- 價格、是否選擇 -->
                <div
                  class="flex items-start justify-between gap-6 whitespace-nowrap md:justify-start"
                >
                  <!-- 價格 -->
                  <div>
                    <h5 class="mb-1 text-h5 text-black">NT$ 415</h5>
                    <p class="poppins | text-body text-neutral-60 line-through">
                      NT$ 520
                    </p>
                  </div>
                  <button
                    type="button"
                    class="rounded-xl border border-primary bg-white px-8 py-4 text-title transition hover:bg-primary hover:text-white"
                    @click="
                      isObservationDeckSelected = !isObservationDeckSelected
                    "
                  >
                    {{ isObservationDeckSelected ? "取消選擇" : "選擇方案" }}
                  </button>
                </div>
              </div>
              <!-- 選取時出現的方案詳情、選擇日期及選項、選擇數量區塊 -->
              <ClientOnly>
                <LayoutProductDetails
                  :open="isObservationDeckSelected"
                  v-model:count="observationDeckCount"
                />
              </ClientOnly>
            </div>
          </article>
        </li>
        <!-- 套裝行程 -->
        <li>
          <article>
            <h3
              class="relative overflow-hidden rounded-t-2xl bg-primary-60 p-4 text-h6 text-primary-10 md:rounded-t-[20px] md:p-6"
            >
              <!-- 井字號裝飾 -->
              <svg
                width="72"
                height="48"
                viewBox="0 0 72 48"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                class="absolute left-0 top-0"
              >
                <path
                  d="m37.238 48 11.813-72H60.3L48.488 48zM5 30.14l1.863-11.25h56.25L61.25 30.14zM11.926 48l11.812-72h11.25L23.176 48zM9.113 5.11l1.899-11.25h56.25L65.363 5.11z"
                  fill="#F3EEEC"
                  fill-opacity=".2"
                />
              </svg>
              套裝行程
            </h3>
            <!-- 卡片本身（整個白色區塊） -->
            <div class="rounded-b-2xl bg-white p-4 md:rounded-b-[20px] md:p-6">
              <!-- 圖片、名稱、標籤、簡介、價格、是否選擇 -->
              <div class="flex flex-col justify-between gap-6 md:flex-row">
                <!-- 圖片、名稱、標籤、簡介 -->
                <div class="flex flex-col items-start gap-4 lg:flex-row">
                  <img
                    src="/images/site/site-1.webp"
                    alt="【超值優惠】阿倍野展望台門票 HARUKAS 300 + HARUKA 關西機場→天王寺（單程票）"
                    class="max-w-[200px] rounded-2xl"
                  />
                  <div class="text-body2 text-neutral">
                    <h4 class="mb-4 text-h6 text-black">
                      【超值優惠】阿倍野展望台門票 HARUKAS 300 + HARUKA
                      關西機<br class="hidden md:block" />場→天王寺（單程票）
                    </h4>
                    <ul class="mb-8 flex flex-wrap gap-2">
                      <li class="rounded-lg bg-neutral-40 px-2 py-1">
                        立即確認
                      </li>
                      <li class="rounded-lg bg-neutral-40 px-2 py-1">
                        有效期：60 天
                      </li>
                      <li class="rounded-lg bg-neutral-40 px-2 py-1">
                        出示憑證入場
                      </li>
                      <li class="rounded-lg bg-neutral-40 px-2 py-1">
                        兌換前可免費取消
                      </li>
                    </ul>
                    <ul class="list-inside list-disc pl-2">
                      <li>
                        HARUKA
                        關西機場→天王寺（單程票）相關訊息，請參考日本關西機場
                        KIX 機場快線 HARUKA 車票。
                      </li>
                      <li>
                        阿倍野展望台門票僅限使用一次，退場後無法再次入場。
                      </li>
                    </ul>
                  </div>
                </div>
                <!-- 價格、是否選擇 -->
                <div
                  class="flex items-start justify-between gap-6 whitespace-nowrap md:justify-start"
                >
                  <!-- 價格 -->
                  <div>
                    <h5 class="mb-1 text-h5 text-black">NT$ 522</h5>
                    <p class="poppins | text-body text-neutral-60 line-through">
                      NT$ 630
                    </p>
                  </div>
                  <button
                    type="button"
                    class="rounded-xl border border-primary bg-white px-8 py-4 text-title transition hover:bg-primary hover:text-white"
                    @click="isTrainTicketSelected = !isTrainTicketSelected"
                  >
                    {{ isTrainTicketSelected ? "取消選擇" : "選擇方案" }}
                  </button>
                </div>
              </div>
              <!-- 選取時出現的方案詳情、選擇日期及選項、選擇數量區塊 -->
              <ClientOnly>
                <LayoutProductDetails
                  :open="isTrainTicketSelected"
                  v-model:count="trainTicketCount"
                />
              </ClientOnly>
            </div>
          </article>
        </li>
        <!-- 一般卡片 -->
        <li>
          <article>
            <!-- 卡片本身（整個白色區塊） -->
            <div class="rounded-2xl bg-white p-4 md:rounded-[20px] md:p-6">
              <!-- 圖片、名稱、標籤、簡介、價格、是否選擇 -->
              <div class="flex flex-col justify-between gap-6 md:flex-row">
                <!-- 圖片、名稱、標籤、簡介 -->
                <div class="flex flex-col items-start gap-4 lg:flex-row">
                  <img
                    src="/images/site/site-2.webp"
                    alt="阿倍野展望台門票 HARUKAS 300｜附章魚燒兌換劵"
                    class="max-w-[200px] rounded-2xl"
                  />
                  <div class="text-body2 text-neutral">
                    <h4 class="mb-4 text-h6 text-black">
                      阿倍野展望台門票 HARUKAS 300｜附章魚燒兌換劵
                    </h4>
                    <ul class="mb-8 flex flex-wrap gap-2">
                      <li class="rounded-lg bg-neutral-40 px-2 py-1">
                        立即確認
                      </li>
                      <li class="rounded-lg bg-neutral-40 px-2 py-1">
                        有效期：60 天
                      </li>
                      <li class="rounded-lg bg-neutral-40 px-2 py-1">
                        出示憑證入場
                      </li>
                      <li class="rounded-lg bg-neutral-40 px-2 py-1">
                        兌換前可免費取消
                      </li>
                    </ul>
                    <ul class="list-inside list-disc pl-2">
                      <li>
                        請於使用當天前往阿倍野HARUKAS300展望台16樓服務台出示QRcodode掃碼領取展望台入場劵及章魚燒兌換劵。
                      </li>
                      <li>
                        58樓餐廳不開放預訂座位及選位，使用當天有可能因用餐人數眾多而沒有位置，敬請見諒。
                      </li>
                      <li>
                        工作人員會隨機選章魚燒提供給客人。無法自由選擇。敬請見諒。
                      </li>
                      <li>章魚燒請於指定出發日當天兌換，逾期無效。</li>
                    </ul>
                  </div>
                </div>
                <!-- 價格、是否選擇 -->
                <div
                  class="flex items-start justify-between gap-6 whitespace-nowrap md:justify-start"
                >
                  <!-- 價格 -->
                  <div>
                    <h5 class="mb-1 text-h5 text-black">NT$ 478</h5>
                    <p class="poppins | text-body text-neutral-60 line-through">
                      NT$ 630
                    </p>
                  </div>
                  <button
                    type="button"
                    class="rounded-xl border border-primary bg-white px-8 py-4 text-title transition hover:bg-primary hover:text-white"
                    @click="isTakoyakiSelected = !isTakoyakiSelected"
                  >
                    {{ isTakoyakiSelected ? "取消選擇" : "選擇方案" }}
                  </button>
                </div>
              </div>
              <!-- 選取時出現的方案詳情、選擇日期及選項、選擇數量區塊 -->
              <ClientOnly>
                <LayoutProductDetails
                  :open="isTakoyakiSelected"
                  v-model:count="takoyakiCount"
                />
              </ClientOnly>
            </div>
          </article>
        </li>
      </ul>
    </div>
  </section>
  <!-- 商品說明、如何使用、旅人評論 -->
  <section class="px-3 py-10 lg:py-[120px]">
    <div class="mx-auto flex max-w-container justify-between gap-[140px]">
      <!-- 商品說明、如何使用、旅人評論容器 -->
      <div class="flex-1 space-y-10">
        <!-- 商品說明 -->
        <div
          class="relative z-0 text-body text-neutral"
          :class="
            showMore
              ? ''
              : 'max-h-[518px] overflow-y-hidden pb-14 lg:max-h-full'
          "
        >
          <h2
            id="product-info"
            class="mb-6 flex items-center gap-2 text-h3 text-primary"
          >
            <img src="/icons/title-hash.svg" alt="井字裝飾" />商品說明
          </h2>
          <h3>－ 景點介紹 －</h3>
          <ul class="mb-6 list-inside list-disc pl-2">
            <li>
              阿倍野 HARUKAS<br />
              阿倍野 HARUKAS 是 2014 年 3 月 7
              日正式開幕的大阪必去新地標，集結了商城、飯店、美術館與展望台等多元功能，欣賞美景之餘還可購物、享受美食。阿倍野
              60 樓 360
              度的空中迴廊，以落地鋼化玻璃包圍展望台四周，若天候條件較佳，還可將京都到六甲山脈、明石海峽大橋到淡路島、生駒山脈，以及關西國際機場等廣大景色一覽無遺。此外，特別推薦夜晚限定的燈光音樂秀，當燈光與音樂在夜晚的空中庭園與空中走廊之間交錯，絕對是一場難得的感官饗宴！
            </li>
          </ul>
          <h3>－ 阿倍野美術館 展覽介紹 －</h3>
          <ul class="mb-6 list-inside list-disc pl-2">
            <li>
              <a
                href="https://www.aham.jp/exhibition/future/folon/"
                target="_blank"
                class="underline"
                >幻想旅行導遊：尚-米歇爾·福隆</a
              >
            </li>
            <li>展覽期間：2025年4月5日（六）～2025年6月22日（日）</li>
            <li>
              尚-米歇爾·福隆（Jean-Michel
              Folon，1934-2005）是一位來自比利時的獨特藝術家。他的作品既詩意盎然又充滿幽默感，透過柔和的色彩與輕盈的筆觸，帶領觀眾踏上一場奇幻之旅，並傳遞對這個世界各種現象的深刻啟發，充滿豐富的情感與訊息。<br />
              為了紀念福隆逝世20週年，以及他生前創立的「福隆基金會」成立25週年，本次展覽將展出約230件多樣的作品，包括繪畫、雕塑、海報等，向大家展現福隆溫暖且深邃的藝術魅力。
            </li>
          </ul>
          <p class="mb-6">從 60 樓的觀景樓層，俯瞰 360 度充滿活力的大阪</p>
          <img
            src="/images/site/product-info.webp"
            alt="從 60 樓的觀景樓層，俯瞰 360 度充滿活力的大阪"
            class="rounded-2xl"
          />
          <!-- 展開更多漸層 -->
          <div
            v-if="!showMore"
            class="absolute inset-x-0 bottom-0 z-10 flex h-[156px] flex-col items-center justify-end bg-gradient-to-t from-white from-40% to-[#FAFBFC00] lg:h-[256px]"
          >
            <button
              type="button"
              class="rounded-xl bg-primary px-[100px] py-4 text-center text-title text-white transition hover:bg-primary-120"
              @click="showMore = true"
            >
              展開更多
            </button>
          </div>
        </div>
        <!-- 如何使用 -->
        <div class="border-y border-neutral-40 py-10">
          <h2 id="how-to-use" class="mb-6 flex items-center gap-2 text-h3">
            <img src="/icons/title-hash.svg" alt="井字裝飾" />如何使用
          </h2>
          <h3 class="mb-2 text-title text-black">憑證使用方式</h3>
          <p class="text-body text-neutral">
            現場請出示 QR code<br />
            請至阿倍野 HARUKAS 300 展望台 16 樓櫃檯出示電子憑證。
          </p>
        </div>
        <!-- 旅人評論 -->
        <div>
          <h2 id="reviews" class="mb-10 flex items-center gap-2 text-h3">
            <img src="/icons/title-hash.svg" alt="井字裝飾" />旅人評論
          </h2>
          <ul class="space-y-4 lg:space-y-6">
            <li>
              <article
                class="flex flex-col gap-6 rounded-[20px] p-4 shadow-card md:flex-row md:p-8"
              >
                <img
                  src="/images/site/avatar-1.webp"
                  alt="無聊工程師 Brian"
                  class="size-[60px] rounded-full"
                />
                <!-- 稱呼、評價、日期、評論內容 -->
                <div class="flex-1 text-body text-black">
                  <h3 class="mb-1">無聊工程師 Brian</h3>
                  <span
                    class="mb-4 flex items-center gap-2 text-body2 text-neutral"
                  >
                    <!-- 星星容器 -->
                    <div class="flex gap-1">
                      <img src="/icons/review-star.svg" alt="評論星星" />
                      <img src="/icons/review-star.svg" alt="評論星星" />
                      <img src="/icons/review-star.svg" alt="評論星星" />
                      <img src="/icons/review-star.svg" alt="評論星星" />
                      <img src="/icons/review-star.svg" alt="評論星星" />
                    </div>
                    2025-03-24
                  </span>
                  <blockquote class="rounded-2xl bg-neutral-10 p-4">
                    <h4 class="mb-3 text-title">覺得自己像在當鋼鐵人</h4>
                    <p class="text-neutral">
                      本來只是想吹吹冷氣看風景，結果一站上去我竟然以為自己是要起飛的鋼鐵人。<br />
                      全大阪通通收服底，還順便看到前女友住在哪一層，讚。
                    </p>
                  </blockquote>
                </div>
              </article>
            </li>
            <li>
              <article
                class="flex flex-col gap-6 rounded-[20px] p-4 shadow-card md:flex-row md:p-8"
              >
                <img
                  src="/images/site/avatar-2.webp"
                  alt="愛旅遊的林阿姨"
                  class="size-[60px] rounded-full"
                />
                <!-- 稱呼、評價、日期、評論內容 -->
                <div class="flex-1 text-body text-black">
                  <h3 class="mb-1">愛旅遊的林阿姨</h3>
                  <span
                    class="mb-4 flex items-center gap-2 text-body2 text-neutral"
                  >
                    <!-- 星星容器 -->
                    <div class="flex gap-1">
                      <img src="/icons/review-star.svg" alt="評論星星" />
                      <img src="/icons/review-star.svg" alt="評論星星" />
                      <img src="/icons/review-star.svg" alt="評論星星" />
                      <img src="/icons/review-star.svg" alt="評論星星" />
                      <img src="/icons/review-star.svg" alt="評論星星" />
                    </div>
                    2025-01-30
                  </span>
                  <blockquote class="rounded-2xl bg-neutral-10 p-4">
                    <h4 class="mb-3 text-title">退休生活安排得剛剛好</h4>
                    <p class="text-neutral">
                      以前只有年輕人在打卡，這次我也來插旗！<br />
                      從 58 樓看風景、60 樓走一圈，還順便在 Sky Garden
                      吃個甜點，人生沒這麼輕鬆啦！<br />
                      還有退稅服務耶～貼心！
                    </p>
                  </blockquote>
                </div>
              </article>
            </li>
            <li>
              <article
                class="flex flex-col gap-6 rounded-[20px] p-4 shadow-card md:flex-row md:p-8"
              >
                <img
                  src="/images/site/avatar-3.webp"
                  alt="財富對折師阿哲"
                  class="size-[60px] rounded-full"
                />
                <!-- 稱呼、評價、日期、評論內容 -->
                <div class="flex-1 text-body text-black">
                  <h3 class="mb-1">財富對折師阿哲</h3>
                  <span
                    class="mb-4 flex items-center gap-2 text-body2 text-neutral"
                  >
                    <!-- 星星容器 -->
                    <div class="flex gap-1">
                      <img src="/icons/review-star.svg" alt="評論星星" />
                      <img src="/icons/review-star.svg" alt="評論星星" />
                      <img src="/icons/review-star.svg" alt="評論星星" />
                      <img src="/icons/review-star.svg" alt="評論星星" />
                      <img src="/icons/review-star.svg" alt="評論星星" />
                    </div>
                    2024-05-29
                  </span>
                  <blockquote class="rounded-2xl bg-neutral-10 p-4">
                    <h4 class="mb-3 text-title">
                      第一次帶女友出國，股票先不看了
                    </h4>
                    <p class="text-neutral">
                      想不到第一次出國就被女友說「太會安排了吧❤️」<br />
                      看完夜景還能順便退稅、吃飯、買禮物，一張票搞定，男人就該這樣做事！
                    </p>
                  </blockquote>
                </div>
              </article>
            </li>
            <li>
              <article
                class="flex flex-col gap-6 rounded-[20px] p-4 shadow-card md:flex-row md:p-8"
              >
                <img
                  src="/images/site/avatar-4.webp"
                  alt="麗莎｜帶你玩遍全世界"
                  class="size-[60px] rounded-full"
                />
                <!-- 稱呼、評價、日期、評論內容 -->
                <div class="flex-1 text-body text-black">
                  <h3 class="mb-1">麗莎｜帶你玩遍全世界</h3>
                  <span
                    class="mb-4 flex items-center gap-2 text-body2 text-neutral"
                  >
                    <!-- 星星容器 -->
                    <div class="flex gap-1">
                      <img src="/icons/review-star.svg" alt="評論星星" />
                      <img src="/icons/review-star.svg" alt="評論星星" />
                      <img src="/icons/review-star.svg" alt="評論星星" />
                      <img src="/icons/review-star.svg" alt="評論星星" />
                      <img src="/icons/review-star.svg" alt="評論星星" />
                    </div>
                    2024-04-23
                  </span>
                  <blockquote class="rounded-2xl bg-neutral-10 p-4">
                    <h4 class="mb-3 text-title">IG狂打卡模式啟動</h4>
                    <p class="text-neutral">
                      光那個透明玻璃窗我就拍了 30 張，爽度不同凡響<br />
                      夕陽照下來直接幫我自動磨皮濾鏡，根本不用修圖！
                    </p>
                  </blockquote>
                </div>
              </article>
            </li>
          </ul>
        </div>
      </div>
      <!-- 側邊選單 -->
      <nav class="sticky top-[100px] hidden self-start lg:block">
        <ul class="space-y-6">
          <li v-for="id in sectionIds" :key="id">
            <a
              :href="`#${id}`"
              :class="[
                'border-l-4 pl-4 text-body transition hover:border-primary hover:text-title hover:text-primary',
                activeSection === id
                  ? 'border-primary text-title text-primary'
                  : 'border-transparent text-neutral-60',
              ]"
            >
              {{
                id === "product-info"
                  ? "商品說明"
                  : id === "how-to-use"
                    ? "如何使用"
                    : "旅人評論"
              }}
            </a>
          </li>
        </ul>
      </nav>
    </div>
  </section>
</template>
