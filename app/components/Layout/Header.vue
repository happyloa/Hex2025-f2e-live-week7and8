<script setup>
// ---------- 路由相關 ----------
const route = useRoute();
const router = useRouter();

// ---------- 狀態管理 ----------
const isLoggedIn = ref(false); // 使用者登入狀態
const search = ref(""); // 搜尋欄內容
const openMobileSearch = ref(false); // 行動搜尋模式開關
const scrolled = ref(false); // 首頁捲動狀態
const showMobileNav = ref(false); // 行動版側邊選單開關

// ---------- 計算屬性 ----------
const isHome = computed(() => route.path === "/" || route.path === ""); // 是否為首頁
const headerClass = computed(() => {
  // 根據狀態動態設定 header 樣式
  if (isHome.value) {
    return scrolled.value
      ? "bg-[#FFFFFFB8] backdrop-blur-sm border-b-[0.5px] border-neutral-40"
      : "bg-transparent";
  }
  // 其他頁面一律套用白底、blur、border
  return "bg-[#FFFFFFB8] backdrop-blur-sm border-b-[0.5px] border-neutral-40";
});

// ---------- 功能函式 ----------
function handleScroll() {
  scrolled.value = window.scrollY > 10;
}
function addScrollListener() {
  window.addEventListener("scroll", handleScroll, { passive: true });
}
function removeScrollListener() {
  window.removeEventListener("scroll", handleScroll);
}

// 監聽視窗 resize，超過斷點自動關掉行動搜尋和側欄
const handleResize = () => {
  if (window.innerWidth >= 640 && openMobileSearch.value)
    openMobileSearch.value = false;
  if (window.innerWidth >= 768 && showMobileNav.value)
    showMobileNav.value = false;
};

function logout() {
  sessionStorage.setItem("isLoggedIn", "false");
  isLoggedIn.value = false;
  showMobileNav.value = false;
  router.push("/login");
}

// ---------- 生命週期 ----------
onMounted(async () => {
  await nextTick();
  // 初始化登入狀態
  isLoggedIn.value = sessionStorage.getItem("isLoggedIn") === "true";
  // 首頁才監聽捲動
  if (isHome.value) {
    addScrollListener();
    handleScroll(); // 一進來就同步一次狀態
  }

  window.addEventListener("resize", handleResize);
  // 路由切換自動 reset UI
  watch(
    () => route.path,
    (newPath, oldPath) => {
      removeScrollListener();
      scrolled.value = false;
      if (newPath === "/" || newPath === "") {
        addScrollListener();
        handleScroll();
      }
      openMobileSearch.value = false;
      showMobileNav.value = false;
    },
  );
});

// 離開時清除事件監聽
onBeforeUnmount(() => {
  removeScrollListener();
  window.removeEventListener("resize", handleResize);
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
              @keydown.enter="search && $router.push('/search-result')"
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
            :to="isLoggedIn ? '/cart?hasItems' : '/cart'"
            type="button"
            class="relative block px-3 py-2 text-neutral transition hover:text-black"
            aria-label="購物車"
          >
            <!-- 有商品時的紅點裝飾 -->
            <div
              v-if="isLoggedIn"
              class="absolute right-2 top-1 size-4 rounded-full bg-danger text-center text-tiny text-white"
            >
              2
            </div>
            <!-- 購物車 icon -->
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
              <path
                d="M8.002 22q-.825 0-1.413-.587A1.93 1.93 0 0 1 6.001 20q0-.825.588-1.413A1.93 1.93 0 0 1 8.002 18q.825 0 1.412.587.588.588.588 1.413t-.588 1.413A1.93 1.93 0 0 1 8.002 22m10.003 0q-.825 0-1.413-.587A1.93 1.93 0 0 1 16.004 20q0-.825.588-1.413A1.93 1.93 0 0 1 18.005 18q.825 0 1.413.587.587.588.587 1.413t-.587 1.413a1.93 1.93 0 0 1-1.413.587M7.152 6l2.4 5h7.002l2.751-5zm-.95-2h14.754q.675 0 .925.5t-.025 1.05l-3.551 6.4a2.04 2.04 0 0 1-.725.775q-.45.275-1.026.275H9.102l-1.1 2h12.003v2H8.002q-1.125 0-1.7-.988-.575-.987-.05-1.962l1.35-2.45L4 4H2V2h3.251z"
                fill="currentColor"
              />
            </svg>
          </NuxtLink>
          <!-- 已登入狀態：使用者頭像&名稱 -->
          <NuxtLink
            v-if="isLoggedIn"
            to="/my-account"
            class="hidden items-center gap-2 md:flex"
          >
            <img
              src="/images/my-account/avatar-1.webp"
              alt="Jessica"
              class="size-8 rounded-full"
            />
            <p class="text-title">Jessica</p>
          </NuxtLink>
          <!-- 未登入狀態：前往登入或註冊 -->
          <NuxtLink
            v-else
            to="/login"
            class="hidden rounded-xl bg-primary px-8 py-4 text-center text-title text-white transition hover:bg-primary-120 md:block"
          >
            登入 / 註冊
          </NuxtLink>
          <!-- 漢堡，只有md以下顯示 -->
          <button
            type="button"
            class="block p-2 text-neutral transition hover:text-black md:hidden"
            aria-label="開啟 Off canvas 選單"
            @click="showMobileNav = true"
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
              @keydown.enter="search && $router.push('/search-result')"
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
  <!-- Backdrop：淡入淡出 -->
  <transition name="backdrop">
    <div
      v-if="showMobileNav"
      class="fixed inset-0 z-40 block bg-[#00000066] md:hidden"
      @click="showMobileNav = false"
    ></div>
  </transition>

  <!-- Off Canvas：由右往左滑入 -->
  <transition name="offcanvas">
    <nav
      v-if="showMobileNav"
      class="fixed bottom-0 right-0 top-0 z-50 block w-5/6 bg-white px-6 pb-6 pt-16 md:hidden"
      role="dialog"
      aria-modal="true"
    >
      <!-- 關閉 Off Canvas 按鈕 -->
      <button
        type="button"
        class="absolute right-6 top-6"
        @click="showMobileNav = false"
        aria-label="關閉 Off Canvas"
      >
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
          <path
            d="M19 6.41 17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12z"
            fill="currentColor"
          />
        </svg>
      </button>
      <!-- 已登入狀態 -->
      <div v-if="isLoggedIn" class="flex h-full flex-col gap-4">
        <!-- 使用者頭像、名稱、連結 -->
        <NuxtLink to="/my-account" class="flex items-center gap-2">
          <img
            src="/images/my-account/avatar-1.webp"
            alt="Jessica"
            class="size-8 rounded-full"
          />
          <div>
            <p class="text-title">Jessica</p>
            <p class="text-body text-neutral">jessica.yen@gamil.com</p>
          </div>
        </NuxtLink>
        <!-- 選單分隔線 -->
        <hr class="border-neutral-40" />
        <!-- 選單 -->
        <ul>
          <li>
            <NuxtLink
              to="/my-account"
              class="flex items-center gap-2 py-3 text-neutral transition hover:text-black"
            >
              <svg
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M17 4H7a2 2 0 0 0-2 2v13a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2V6a2 2 0 0 0-2-2Z"
                  stroke="currentColor"
                  stroke-width="2"
                />
                <path
                  d="M9 9h6m-6 4h6m-6 4h4"
                  stroke="currentColor"
                  stroke-width="2"
                  stroke-linecap="round"
                />
              </svg>
              訂單管理
            </NuxtLink>
          </li>
          <li>
            <NuxtLink
              to="/my-account"
              class="flex items-center gap-2 py-3 text-neutral transition hover:text-black"
            >
              <svg
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M12 20.325q-.35 0-.712-.125a1.7 1.7 0 0 1-.638-.4l-1.725-1.575a69 69 0 0 1-4.788-4.812Q1.999 11.026 2 8.15 2 5.8 3.575 4.225T7.5 2.65q1.325 0 2.5.562t2 1.538a5.95 5.95 0 0 1 2-1.537 5.7 5.7 0 0 1 2.5-.563q2.35 0 3.925 1.575T22 8.15q0 2.875-2.125 5.275a60 60 0 0 1-4.825 4.825l-1.7 1.55a1.65 1.65 0 0 1-.637.4 2.2 2.2 0 0 1-.713.125M11.05 6.75q-.725-1.024-1.55-1.563t-2-.537q-1.5 0-2.5 1t-1 2.5q0 1.3.925 2.763a19 19 0 0 0 2.213 2.837 39 39 0 0 0 2.65 2.575Q11.15 17.525 12 18.3q.85-.775 2.213-1.975t2.65-2.575a19 19 0 0 0 2.212-2.837Q20 9.45 20 8.15q0-1.5-1-2.5t-2.5-1q-1.175 0-2 .538-.825.539-1.55 1.562a1.14 1.14 0 0 1-.95.5 1.14 1.14 0 0 1-.95-.5"
                  fill="currentColor"
                />
              </svg>
              我的收藏
            </NuxtLink>
          </li>
          <li>
            <NuxtLink
              to="/my-account"
              class="flex items-center gap-2 py-3 text-neutral transition hover:text-black"
            >
              <svg
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M19.9 12.66a1 1 0 0 1 0-1.32l1.28-1.44a1 1 0 0 0 .12-1.17l-2-3.46a1 1 0 0 0-1.07-.48l-1.88.38a1 1 0 0 1-1.15-.66l-.61-1.83a1 1 0 0 0-.95-.68h-4a1 1 0 0 0-1 .68l-.56 1.83a1 1 0 0 1-1.15.66L5 4.79a1 1 0 0 0-1 .48L2 8.73a1 1 0 0 0 .1 1.17l1.27 1.44a1 1 0 0 1 0 1.32L2.1 14.1a1 1 0 0 0-.1 1.17l2 3.46a1 1 0 0 0 1.07.48l1.88-.38a1 1 0 0 1 1.15.66l.61 1.83a1 1 0 0 0 1 .68h4a1 1 0 0 0 .95-.68l.61-1.83a1 1 0 0 1 1.15-.66l1.88.38a1 1 0 0 0 1.07-.48l2-3.46a1 1 0 0 0-.12-1.17zM18.41 14l.8.9-1.28 2.22-1.18-.24a3 3 0 0 0-3.45 2L12.92 20h-2.56L10 18.86a3 3 0 0 0-3.45-2l-1.18.24-1.3-2.21.8-.9a3 3 0 0 0 0-4l-.8-.9 1.28-2.2 1.18.24a3 3 0 0 0 3.45-2L10.36 4h2.56l.38 1.14a3 3 0 0 0 3.45 2l1.18-.24 1.28 2.22-.8.9a3 3 0 0 0 0 3.98m-6.77-6a4 4 0 1 0 0 8 4 4 0 0 0 0-8m0 6a2 2 0 1 1 0-4 2 2 0 0 1 0 4"
                  fill="currentColor"
                />
              </svg>
              帳號設定
            </NuxtLink>
          </li>
        </ul>
        <!-- 登出 -->
        <button
          type="button"
          class="mt-auto flex items-center gap-2 py-3 text-neutral transition hover:text-black"
          @click="logout"
        >
          <svg
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M20.15 13H8v-2h12.15L18.6 9.45 20 8l4 4-4 4-1.4-1.45zM15 9V5H5v14h10v-4h2v4q0 .824-.587 1.413A1.93 1.93 0 0 1 15 21H5q-.824 0-1.412-.587A1.93 1.93 0 0 1 3 19V5q0-.824.587-1.412A1.93 1.93 0 0 1 5 3h10q.824 0 1.413.587Q17 4.176 17 5v4z"
              fill="currentColor"
            />
          </svg>
          登出
        </button>
      </div>
      <!-- 未登入狀態 -->
      <div v-else class="flex h-full flex-col">
        <!-- 未登入頭像 -->
        <NuxtLink to="/login" class="mb-4 flex items-center gap-2">
          <div class="rounded-full bg-primary-40 p-1">
            <svg
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fill-rule="evenodd"
                clip-rule="evenodd"
                d="M16 9a4 4 0 1 1-8 0 4 4 0 0 1 8 0m-2 0a2 2 0 1 1-4 0 2 2 0 0 1 4 0"
                fill="#F3EEEC"
              />
              <path
                fill-rule="evenodd"
                clip-rule="evenodd"
                d="M12 1C5.925 1 1 5.925 1 12s4.925 11 11 11 11-4.925 11-11S18.075 1 12 1M3 12c0 2.09.713 4.014 1.908 5.542A8.99 8.99 0 0 1 12.065 14a8.98 8.98 0 0 1 7.092 3.458A9.001 9.001 0 1 0 3 12m9 9a8.96 8.96 0 0 1-5.672-2.012A6.99 6.99 0 0 1 12.065 16a6.99 6.99 0 0 1 5.689 2.92A8.96 8.96 0 0 1 12 21"
                fill="#F3EEEC"
              />
            </svg>
          </div>
          <div>
            <p class="text-title">訪客</p>
            <p class="text-body text-neutral">未登入</p>
          </div>
        </NuxtLink>
        <!-- 選單分隔線 -->
        <hr class="mb-6 border-neutral-40" />
        <h3 class="mb-1 text-h6">歡迎來到 ZOBAA</h3>
        <p class="text-body text-neutral">
          加入會員即可立即訂購、收藏行程，並享相關優惠好禮。
        </p>
        <!-- 前往登入或註冊 -->
        <NuxtLink
          to="/login"
          class="mt-auto rounded-xl bg-primary p-4 text-center text-title text-white transition hover:bg-primary-120"
        >
          登入 / 註冊
        </NuxtLink>
      </div>
    </nav>
  </transition>
</template>

<style scoped>
/* Backdrop：淡入淡出 */
.backdrop-enter-active,
.backdrop-leave-active {
  transition: opacity 0.2s ease;
}
.backdrop-enter-from,
.backdrop-leave-to {
  opacity: 0;
}

/* Off Canvas：自右而左滑入 */
.offcanvas-enter-active,
.offcanvas-leave-active {
  transition: transform 0.28s cubic-bezier(0.22, 0.61, 0.36, 1);
}
.offcanvas-enter-from,
.offcanvas-leave-to {
  transform: translateX(100%);
}
</style>
