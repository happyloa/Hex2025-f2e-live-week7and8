<script setup>
const route = useRoute();

// ===== 搜尋欄位 =====
const search = ref("");

// ===== 行動版是否進入搜尋模式（隱藏 Logo、購物車 icon、漢堡選單） =====
const openMobileSearch = ref(false);

// ===== 狀態：是否捲動過（首頁才需偵測） =====
const scrolled = ref(false);

// ===== 是否為首頁（只有首頁需切換 header 樣式）=====
const isHome = computed(() => route.path === "/");

// ===== 計算要套用的 header class =====
const headerClass = computed(() => {
  // 首頁：透明（預設），滑動後變白底＋blur＋border
  if (isHome.value) {
    return scrolled.value
      ? "bg-[#FFFFFFB8] backdrop-blur-sm border-b-[0.5px] border-neutral-40"
      : "bg-transparent";
  }
  // 其他頁面一律套用白底、blur、border
  return "bg-[#FFFFFFB8] backdrop-blur-sm border-b-[0.5px] border-neutral-40";
});

// ===== 只在首頁時監聽捲動事件 =====
function handleScroll() {
  // 當頁面 Y 軸捲動 > 10px 時就啟用白底
  scrolled.value = window.scrollY > 10;
}

onMounted(() => {
  if (isHome.value) {
    window.addEventListener("scroll", handleScroll, { passive: true });
  }
});

onBeforeUnmount(() => {
  if (isHome.value) {
    window.removeEventListener("scroll", handleScroll);
  }
});
</script>

<template>
  <header class="sticky top-0 z-40 p-3 transition md:p-4" :class="headerClass">
    <div class="mx-auto flex max-w-container items-center justify-between">
      <!-- 一般模式（行動、桌機） -->
      <template v-if="!openMobileSearch">
        <!-- 左：logo + 搜尋欄 -->
        <nav class="flex flex-1 items-center gap-6">
          <!-- Logo（行動搜尋時隱藏）-->
          <NuxtLink to="/" class="shrink-0" :class="'sm:block'">
            <img src="/primary-logo.svg" alt="Logo" class="w-[180px]" />
          </NuxtLink>
          <!-- 桌機搜尋框，sm以下隱藏 -->
          <div class="relative hidden sm:block">
            <!-- 裝飾搜尋 icon -->
            <svg
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              class="absolute left-3 top-1/2 -translate-y-1/2"
            >
              <path
                d="m19.6 21-6.3-6.3q-.75.6-1.725.95T9.5 16q-2.725 0-4.612-1.887T3 9.5t1.888-4.612T9.5 3t4.613 1.888T16 9.5a6.1 6.1 0 0 1-1.3 3.8l6.3 6.3zM9.5 14q1.875 0 3.188-1.312Q14 11.375 14 9.5t-1.312-3.187T9.5 5 6.313 6.313 5 9.5t1.313 3.188T9.5 14"
                fill="#909090"
              />
            </svg>
            <input
              v-model="search"
              type="text"
              placeholder="搜尋景點、地點或城市"
              class="rounded-lg border border-neutral-40 py-2.5 pl-10 pr-3 placeholder:text-body placeholder:text-neutral-60 focus:outline-none lg:w-[400px]"
            />
          </div>
        </nav>
        <!-- 右：icon 區塊 -->
        <div class="flex flex-shrink-0 items-center md:gap-4">
          <!-- 行動版搜尋icon，只有sm以下出現 -->
          <button
            type="button"
            class="block p-2 text-neutral transition hover:text-black sm:hidden"
            @click="openMobileSearch = true"
            aria-label="展開搜尋"
          >
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
              <path
                d="m19.6 21-6.3-6.3q-.75.6-1.725.95T9.5 16q-2.725 0-4.612-1.887T3 9.5t1.888-4.612T9.5 3t4.613 1.888T16 9.5a6.1 6.1 0 0 1-1.3 3.8l6.3 6.3zM9.5 14q1.875 0 3.188-1.312Q14 11.375 14 9.5t-1.312-3.187T9.5 5 6.313 6.313 5 9.5t1.313 3.188T9.5 14"
                fill="currentColor"
              />
            </svg>
          </button>
          <!-- 購物車icon、md以上登入，sm以下漢堡 -->
          <NuxtLink
            to="/cart"
            type="button"
            class="block px-3 py-2 text-neutral transition hover:text-black"
            aria-label="購物車"
          >
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
              <path
                d="M8.002 22q-.825 0-1.413-.587A1.93 1.93 0 0 1 6.001 20q0-.825.588-1.413A1.93 1.93 0 0 1 8.002 18q.825 0 1.412.587.588.588.588 1.413t-.588 1.413A1.93 1.93 0 0 1 8.002 22m10.003 0q-.825 0-1.413-.587A1.93 1.93 0 0 1 16.004 20q0-.825.588-1.413A1.93 1.93 0 0 1 18.005 18q.825 0 1.413.587.587.588.587 1.413t-.587 1.413a1.93 1.93 0 0 1-1.413.587M7.152 6l2.4 5h7.002l2.751-5zm-.95-2h14.754q.675 0 .925.5t-.025 1.05l-3.551 6.4a2.04 2.04 0 0 1-.725.775q-.45.275-1.026.275H9.102l-1.1 2h12.003v2H8.002q-1.125 0-1.7-.988-.575-.987-.05-1.962l1.35-2.45L4 4H2V2h3.251z"
                fill="currentColor"
              />
            </svg>
          </NuxtLink>
          <NuxtLink
            to="/login"
            class="hidden rounded-xl bg-primary px-8 py-4 text-center text-title text-white transition hover:bg-primary-120 md:block"
          >
            登入 / 註冊
          </NuxtLink>
          <!-- 漢堡，只有md以下 -->
          <button
            type="button"
            class="block p-2 text-neutral transition hover:text-black md:hidden"
            aria-label="開啟主選單"
          >
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
              <path
                d="M20.05 11H3.95a.95.95 0 0 0-.95.95v.1c0 .525.425.95.95.95h16.1a.95.95 0 0 0 .95-.95v-.1a.95.95 0 0 0-.95-.95m0 5H3.95a.95.95 0 0 0-.95.95v.1c0 .525.425.95.95.95h16.1a.95.95 0 0 0 .95-.95v-.1a.95.95 0 0 0-.95-.95m0-10H3.95a.95.95 0 0 0-.95.95v.1c0 .525.425.95.95.95h16.1a.95.95 0 0 0 .95-.95v-.1a.95.95 0 0 0-.95-.95"
                fill="currentColor"
              />
            </svg>
          </button>
        </div>
      </template>

      <!-- 行動版搜尋模式 -->
      <template v-else>
        <div class="flex w-full items-center gap-1">
          <div class="relative w-full">
            <!-- 裝飾搜尋 icon -->
            <svg
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              class="absolute left-3 top-1/2 -translate-y-1/2"
            >
              <path
                d="m19.6 21-6.3-6.3q-.75.6-1.725.95T9.5 16q-2.725 0-4.612-1.887T3 9.5t1.888-4.612T9.5 3t4.613 1.888T16 9.5a6.1 6.1 0 0 1-1.3 3.8l6.3 6.3zM9.5 14q1.875 0 3.188-1.312Q14 11.375 14 9.5t-1.312-3.187T9.5 5 6.313 6.313 5 9.5t1.313 3.188T9.5 14"
                fill="#909090"
              />
            </svg>
            <input
              v-model="search"
              type="text"
              autofocus
              placeholder="搜尋景點、地點或城市"
              class="w-full rounded-lg border border-neutral-40 py-2 pl-10 pr-3 placeholder:text-body placeholder:text-neutral-60 focus:outline-none"
            />
          </div>
          <!-- 關閉搜尋按鈕 -->
          <button
            type="button"
            class="p-2"
            @click="openMobileSearch = false"
            aria-label="關閉搜尋"
          >
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
              <path
                d="M19 6.41 17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12z"
                fill="currentColor"
              />
            </svg>
          </button>
        </div>
      </template>
    </div>
  </header>
</template>
