<script setup>
useSeoMeta({
  title: "購物車 | 2025 切版直播班 - 旅遊網站 W7&W8",
  ogTitle: "購物車 | 2025 切版直播班 - 旅遊網站 W7&W8",
});

// ===== 路由與頁面參數 =====
const route = useRoute();

// ===== 狀態：購物車商品列表 =====
/**
 * products：購物車中的所有商品，每個商品包含
 * id、名稱、描述、圖片、單價、數量、是否被選取
 */
const products = ref([
  {
    id: 1,
    name: "海闊天空展望台門票 HARUKAS 300",
    desc: "阿倍野展望台門票 HARUKAS 300｜附章魚燒兌換劵",
    img: "/images/cart/cart-1.webp",
    price: 830,
    quantity: 2,
    selected: true,
  },
  {
    id: 2,
    name: "泰式按摩過猛求生體驗",
    desc: "限量脫骨套餐｜師傅強度隨緣，靈魂有機會先離開",
    img: "/images/cart/cart-2.webp",
    price: 1230,
    quantity: 2,
    selected: true,
  },
  {
    id: 3,
    name: "海闊天空展望台門票 HARUKAS 300",
    desc: "阿倍野展望台門票",
    img: "/images/cart/cart-3.webp",
    price: 410,
    quantity: 1,
    selected: true,
  },
]);

// ===== 計算屬性：選取狀態與操作 =====
/**
 * selectAll：全選/全不選的計算屬性，checkbox 雙向綁定
 * 勾選時全選所有商品，反之全不選
 */
const selectAll = computed({
  get: () =>
    products.value.length > 0 && products.value.every((p) => p.selected),
  set: (val) => {
    products.value.forEach((p) => (p.selected = val));
  },
});

// 目前被勾選的商品數量
const selectedCount = computed(
  () => products.value.filter((p) => p.selected).length,
);

// ===== 商品操作函式 =====
/**
 * 刪除所有被勾選的商品
 */
function deleteSelected() {
  products.value = products.value.filter((p) => !p.selected);
}

/**
 * 刪除單一商品
 * @param {number} idx - 商品在 products 的索引
 */
function deleteOne(idx) {
  products.value.splice(idx, 1);
}

/**
 * 增加指定商品的數量
 * @param {number} idx - 商品在 products 的索引
 */
function incQty(idx) {
  products.value[idx].quantity++;
}

/**
 * 減少指定商品的數量（最小為 1）
 * @param {number} idx - 商品在 products 的索引
 */
function decQty(idx) {
  if (products.value[idx].quantity > 1) products.value[idx].quantity--;
}

// ===== 金額計算 =====
/**
 * subTotal：只加總有勾選商品的金額
 */
const subTotal = computed(() => {
  return products.value
    .filter((p) => p.selected)
    .reduce((sum, p) => sum + p.price * p.quantity, 0);
});

// 目前折扣（僅有選中商品時才給折扣）
const discount = computed(() => (selectedCount.value > 0 ? 100 : 0));

// 總計金額 = 小計 - 折扣
const total = computed(() => subTotal.value - discount.value);

// ===== UI 顯示控制 =====

/**
 * hasItems：判斷購物車是否還有商品（含未勾選）
 */
const hasItems = computed(() => products.value.length > 0);

/**
 * urlHasItems：判斷網址參數有無 hasItems
 * 用於單純切版時強制顯示「有商品」區塊
 */
const urlHasItems = computed(() => "hasItems" in route.query);

// 控制 Off Canvas (明細) 顯示狀態
const showDetail = ref(false);
</script>

<template>
  <!-- 有商品 -->
  <section
    v-if="hasItems && urlHasItems"
    class="bg-neutral-15 px-3 py-10 lg:py-20"
  >
    <div class="mx-auto grid max-w-container grid-cols-1 gap-12 lg:grid-cols-3">
      <main class="col-span-2">
        <!-- 全選/刪除區塊 -->
        <div
          class="mb-6 flex items-center justify-between rounded-2xl border-b border-neutral-40 bg-white px-6 py-4 lg:mb-10 lg:rounded-[20px]"
        >
          <label
            for="selectAll"
            class="flex items-center gap-2 text-body text-neutral-80"
          >
            <input
              v-model="selectAll"
              type="checkbox"
              name="selectAll"
              id="selectAll"
              class="custom-checkbox"
            />
            全選
          </label>
          <button
            type="button"
            class="rounded-xl border border-primary bg-white px-8 py-4 text-center text-title transition hover:bg-primary hover:text-white"
            @click="deleteSelected"
            :disabled="products.every((p) => !p.selected)"
          >
            刪除選中活動
          </button>
        </div>
        <!-- 商品卡片列表 -->
        <ul class="space-y-4 lg:space-y-6">
          <li v-for="(p, idx) in products" :key="p.id">
            <article class="rounded-2xl bg-white lg:rounded-[20px]">
              <div class="flex flex-col border-b border-neutral-40 lg:flex-row">
                <!-- 選取框 -->
                <div class="px-6 py-4 lg:py-8">
                  <input
                    type="checkbox"
                    class="custom-checkbox"
                    v-model="p.selected"
                  />
                </div>
                <!-- 商品內容、數量調整 -->
                <div
                  class="flex flex-1 flex-col justify-between gap-6 p-4 md:flex-row lg:items-center lg:py-8 lg:pl-0 lg:pr-8"
                >
                  <!-- 商品內容 -->
                  <NuxtLink
                    to="/product-info"
                    class="flex flex-col gap-3 md:flex-row md:items-center"
                  >
                    <img
                      :src="p.img"
                      :alt="p.name"
                      class="aspect-square size-[132px] rounded-2xl object-cover"
                    />
                    <div class="text-body text-neutral-80">
                      <h2 class="mb-2 text-h6 text-black">{{ p.name }}</h2>
                      <p class="mb-2">{{ p.desc }}</p>
                      <p>兌換期內皆適用</p>
                    </div>
                  </NuxtLink>
                  <!-- 數量調整 -->
                  <div class="flex items-center gap-4">
                    <button
                      type="button"
                      class="rounded-full border border-neutral-40 bg-white p-4 transition hover:bg-neutral-40"
                      @click="decQty(idx)"
                    >
                      <svg width="24" height="24" viewBox="0 0 24 24">
                        <path d="M19 13H5v-2h14z" fill="currentColor" />
                      </svg>
                    </button>
                    <span class="text-h6 text-black">{{ p.quantity }}</span>
                    <button
                      type="button"
                      class="rounded-full border border-neutral-40 bg-white p-4 transition hover:bg-neutral-40"
                      @click="incQty(idx)"
                    >
                      <svg width="24" height="24" viewBox="0 0 24 24">
                        <path
                          d="M19 13h-6v6h-2v-6H5v-2h6V5h2v6h6z"
                          fill="currentColor"
                        />
                      </svg>
                    </button>
                  </div>
                </div>
              </div>
              <footer
                class="flex items-center justify-between gap-4 p-4 lg:pl-[72px] lg:pr-8"
              >
                <!-- 兩個操作按鈕 -->
                <div
                  class="flex items-center gap-6 text-body text-neutral-80 underline lg:gap-10"
                >
                  <button
                    type="button"
                    class="py-2 transition hover:text-black"
                  >
                    編輯
                  </button>
                  <button
                    type="button"
                    class="py-2 transition hover:text-black"
                    @click="deleteOne(idx)"
                  >
                    刪除
                  </button>
                </div>
                <h3 class="text-h5 text-black">NT$ {{ p.price }}</h3>
              </footer>
            </article>
          </li>
        </ul>
      </main>
      <aside
        class="col-span-1 hidden space-y-8 self-start rounded-[20px] bg-white p-6 shadow-normal lg:block"
      >
        <h1 class="text-h5 text-black">費用明細</h1>
        <ul class="space-y-3 text-body text-neutral-80">
          <li class="flex items-center justify-between">
            商品小計<span class="text-title text-neutral-80"
              >NT$ {{ subTotal }}</span
            >
          </li>
          <li class="flex items-center justify-between">
            優惠折抵<span class="text-title text-primary-60"
              >- {{ discount }}</span
            >
          </li>
        </ul>
        <hr class="border-neutral-40" />
        <div class="flex items-end justify-between">
          <h2 class="text-body text-neutral-80">總計</h2>
          <p class="text-h3 text-black">NT$ {{ total }}</p>
        </div>
        <NuxtLink
          to="#"
          class="block w-full rounded-xl bg-primary p-4 text-center text-title text-white transition hover:bg-primary-120"
        >
          前往結賬
        </NuxtLink>
      </aside>
    </div>
  </section>
  <!-- 還沒有商品 -->
  <section v-else class="bg-neutral-15 px-3 py-20">
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
  <aside
    class="sticky bottom-0 z-30 flex items-center justify-between border-t border-neutral-40 bg-white px-4 py-3 lg:hidden"
  >
    <!-- 展開明細、總計 -->
    <div @click="showDetail = !showDetail">
      <span class="mb-1 flex items-center gap-1 text-tiny text-neutral-80">
        展開明細
        <!-- 展開箭頭 -->
        <svg
          v-if="showDetail === false"
          width="16"
          height="16"
          viewBox="0 0 16 16"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <g clip-path="url(#a)">
            <path
              d="M11.06 10.667 8 7.613l-3.06 3.054-.94-.94 4-4 4 4z"
              fill="currentColor"
            />
          </g>
        </svg>
        <!-- 收合箭頭 -->
        <svg
          v-if="showDetail === true"
          width="16"
          height="16"
          viewBox="0 0 16 16"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <g clip-path="url(#a)">
            <path
              d="M4.94 5.727 8 8.78l3.06-3.053.94.94-4 4-4-4z"
              fill="currentColor"
            />
          </g>
        </svg>
      </span>
      <h2 class="text-h6 text-black">NT$ {{ total }}</h2>
    </div>
    <NuxtLink
      to="#"
      class="block rounded-xl bg-primary px-8 py-4 text-center text-title text-white transition hover:bg-primary-120"
    >
      前往結賬
    </NuxtLink>
  </aside>
  <!-- Teleport 避免被父層影響 -->
  <Teleport to="body">
    <!-- Backdrop：淡入淡出 -->
    <transition name="backdrop">
      <div
        v-if="showDetail"
        class="fixed inset-0 z-10 bg-[#00000066]"
        @click="showDetail = false"
      ></div>
    </transition>

    <!-- Off Canvas：由下往上滑入 + 淡入 -->
    <transition name="offcanvas">
      <div
        v-if="showDetail"
        class="fixed bottom-20 left-0 right-0 z-20 rounded-t-xl bg-white shadow-normal"
        role="dialog"
        aria-modal="true"
      >
        <!-- 標題/關閉按鈕 -->
        <div class="flex items-center justify-between p-4">
          <h2 class="text-subtitle text-black">費用明細</h2>
          <button @click="showDetail = false" aria-label="關閉明細">
            <svg
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <g clip-path="url(#a)">
                <path
                  d="M19 6.41 17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12z"
                  fill="#000"
                />
              </g>
            </svg>
          </button>
        </div>
        <!-- 明細內容 -->
        <div class="px-4 py-6">
          <ul class="space-y-3 text-body2 text-neutral-80">
            <li class="flex items-center justify-between">
              商品小計<span class="text-subtitle">NT$ {{ subTotal }}</span>
            </li>
            <li class="flex items-center justify-between">
              優惠折抵<span class="text-subtitle text-primary-60"
                >- {{ discount }}
              </span>
            </li>
          </ul>

          <hr class="my-4 border-neutral-40" />

          <div class="flex items-end justify-between">
            <h2 class="text-body2 text-neutral-80">總計</h2>
            <p class="text-h6 text-black">NT$ {{ total }}</p>
          </div>
        </div>
      </div>
    </transition>
  </Teleport>
</template>

<style scoped>
@import "@/assets/css/custom-checkbox.css";

/* Backdrop：淡入淡出 */
.backdrop-enter-active,
.backdrop-leave-active {
  transition: opacity 0.2s ease;
}
.backdrop-enter-from,
.backdrop-leave-to {
  opacity: 0;
}

/* Off Canvas：自下而上滑入 + 淡入 */
.offcanvas-enter-active,
.offcanvas-leave-active {
  transition:
    transform 0.28s cubic-bezier(0.22, 0.61, 0.36, 1),
    opacity 0.28s ease;
}
.offcanvas-enter-from,
.offcanvas-leave-to {
  transform: translateY(100%);
  opacity: 0;
}
</style>
