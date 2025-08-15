<script setup lang="ts">
const props = withDefaults(
  defineProps<{
    open: boolean;
    count: number;
    min?: number;
    max?: number;
  }>(),
  {
    min: 1,
    max: Infinity,
  },
);

const emit = defineEmits<{
  (e: "update:count", value: number): void;
}>();

// 供模板使用的雙向數量（包一層以便夾住 min/max）
const qty = computed({
  get: () => props.count,
  set: (v: number) => {
    const clamped = Math.min(Math.max(v, props.min), props.max);
    emit("update:count", clamped);
  },
});

// ========== Transition hooks：auto height ==========
const DURATION = 280;
const EASE = "cubic-bezier(0.22, 0.61, 0.36, 1)";

function onEnter(el) {
  el.style.height = "0px";
  el.style.opacity = "0";
  el.style.overflow = "hidden";
  el.offsetHeight; // 觸發重排
  el.style.transition = `height ${DURATION}ms ${EASE}, opacity ${DURATION}ms ease`;
  el.style.height = el.scrollHeight + "px";
  el.style.opacity = "1";
}

function onAfterEnter(el) {
  el.style.transition = "";
  el.style.height = "";
  el.style.overflow = "";
  el.style.opacity = "";
}

function onLeave(el) {
  el.style.overflow = "hidden";
  el.style.height = el.scrollHeight + "px";
  el.offsetHeight;
  const d = Math.max(0, DURATION - 40);
  el.style.transition = `height ${d}ms ${EASE}, opacity ${d}ms ease`;
  el.style.height = "0px";
  el.style.opacity = "0";
}

function onAfterLeave(el) {
  el.style.transition = "";
  el.style.height = "";
  el.style.overflow = "";
  el.style.opacity = "";
}
</script>

<template>
  <Transition
    @enter="onEnter"
    @after-enter="onAfterEnter"
    @leave="onLeave"
    @after-leave="onAfterLeave"
  >
    <div
      v-if="props.open"
      class="border-t border-neutral-40 pt-6 text-black md:pt-10"
      :class="props.open ? 'mt-6 md:mt-10' : 'mt-0'"
    >
      <h4 class="mb-6 text-h6">方案詳情</h4>
      <ul class="mb-6 rounded-2xl bg-neutral-10 md:mb-10">
        <li
          class="flex flex-col gap-4 border-b border-neutral-40 p-4 md:flex-row md:gap-20"
        >
          <h5 class="w-[120px] shrink-0 text-title">關於此方案</h5>
          <span class="flex gap-2 text-body"
            ><img src="/icons/circle-dollar.svg" alt="$" />免費取消！</span
          >
        </li>
        <li
          class="flex flex-col gap-4 border-b border-neutral-40 p-4 md:flex-row md:gap-20"
        >
          <h5 class="w-[120px] shrink-0 text-title">費用包含</h5>
          <span class="flex gap-2 text-body"
            ><img
              src="/icons/green-circle-check.svg"
              alt="費用包含"
            />阿倍野展望台門票 HARUKAS 300</span
          >
        </li>
        <li
          class="flex flex-col gap-4 border-b border-neutral-40 p-4 md:flex-row md:gap-20"
        >
          <h5 class="w-[120px] shrink-0 text-title">費用不包含</h5>
          <div class="flex flex-wrap gap-x-8 gap-y-2 text-body">
            <span class="flex gap-2"
              ><img src="/icons/circle-x.svg" alt="X" />個人消費
            </span>
            <span class="flex gap-2"
              ><img src="/icons/circle-x.svg" alt="X" />以上未提及消費
            </span>
          </div>
        </li>
        <li
          class="flex flex-col gap-4 rounded-b-2xl border-b border-neutral-40 p-4 md:flex-row md:gap-20"
        >
          <h5 class="w-[120px] shrink-0 text-title">取消政策</h5>
          <p class="mdLtext-start text-justify text-body">
            由於站內商品來自全球各地，訂單取消時間將依該供應商所在時區判定。供應商需
            2-5
            個工作天進行取消流程，依照您購買的商品取消政策收取手續費，並於取消流程完成後14
            個工作天內退款。
          </p>
        </li>
        <li
          class="flex flex-col gap-4 rounded-b-2xl border-b border-neutral-40 p-4 md:flex-row md:gap-20"
        >
          <h5 class="w-[120px] shrink-0 text-title">憑證兌換期限</h5>
          <p class="text-body">自開票日算起 60日 之內兌換有效，逾期無效</p>
        </li>
      </ul>

      <!-- 選擇日期及選項與選擇數量 -->
      <div class="mb-6 flex flex-col gap-10 md:mb-10 lg:flex-row lg:gap-20">
        <!-- 選擇日期及選項 -->
        <div class="flex-1">
          <h4 class="mb-6 text-h6">選擇日期及選項</h4>
          <time
            class="block whitespace-nowrap rounded-[20px] border border-neutral-40"
          >
            <header
              class="flex items-center justify-between border-b border-neutral-40 px-4 py-3"
            >
              <h5 class="text-h6">2025 年 5 月</h5>
              <div class="flex">
                <button type="button" class="p-2 hover:bg-neutral-10">
                  <img src="/icons/prev-arrow.svg" alt="往前一個月" />
                </button>
                <button type="button" class="p-2 hover:bg-neutral-10">
                  <img src="/icons/next-arrow.svg" alt="往後一個月" />
                </button>
              </div>
            </header>
            <!-- 日期 -->
            <div
              class="grid grid-cols-7 place-items-center gap-y-4 p-4 text-body text-neutral-60"
            >
              <button
                type="button"
                class="size-11 rounded-lg text-neutral"
                disabled
              >
                日
              </button>
              <button
                type="button"
                class="size-11 rounded-lg text-neutral"
                disabled
              >
                一
              </button>
              <button
                type="button"
                class="size-11 rounded-lg text-neutral"
                disabled
              >
                二
              </button>
              <button
                type="button"
                class="size-11 rounded-lg text-neutral"
                disabled
              >
                三
              </button>
              <button
                type="button"
                class="size-11 rounded-lg text-neutral"
                disabled
              >
                四
              </button>
              <button
                type="button"
                class="size-11 rounded-lg text-neutral"
                disabled
              >
                五
              </button>
              <button
                type="button"
                class="size-11 rounded-lg text-neutral"
                disabled
              >
                六
              </button>
              <button type="button" class="size-11" disabled>&emsp;</button>
              <button type="button" class="size-11" disabled>&emsp;</button>
              <button type="button" class="size-11" disabled>&emsp;</button>
              <button type="button" class="size-11" disabled>&emsp;</button>
              <button
                type="button"
                class="poppins | size-11 rounded-lg line-through"
                disabled
              >
                1
              </button>
              <button
                type="button"
                class="poppins | size-11 rounded-lg line-through"
                disabled
              >
                2
              </button>
              <button
                type="button"
                class="poppins | size-11 rounded-lg line-through"
                disabled
              >
                3
              </button>
              <button
                type="button"
                class="poppins | size-11 rounded-lg line-through"
                disabled
              >
                4
              </button>
              <button
                type="button"
                class="poppins | size-11 rounded-lg line-through"
                disabled
              >
                5
              </button>
              <button
                type="button"
                class="poppins | size-11 rounded-lg line-through"
                disabled
              >
                6
              </button>
              <button
                type="button"
                class="poppins | size-11 rounded-lg line-through"
                disabled
              >
                7
              </button>
              <button
                type="button"
                class="size-11 rounded-lg text-title text-black transition hover:bg-primary-10"
              >
                8
              </button>
              <button
                type="button"
                class="poppins | size-11 rounded-lg line-through"
                disabled
              >
                9
              </button>
              <button
                type="button"
                class="poppins | size-11 rounded-lg line-through"
                disabled
              >
                10
              </button>
              <button
                type="button"
                class="poppins | size-11 rounded-lg line-through"
                disabled
              >
                11
              </button>
              <button
                type="button"
                class="size-11 rounded-lg text-title text-black transition hover:bg-primary-10"
              >
                12
              </button>
              <button
                type="button"
                class="size-11 rounded-lg text-title text-black transition hover:bg-primary-10"
              >
                13
              </button>
              <button
                type="button"
                class="poppins | size-11 rounded-lg line-through"
                disabled
              >
                14
              </button>
              <button
                type="button"
                class="size-11 rounded-lg text-title text-black transition hover:bg-primary-10"
              >
                15
              </button>
              <button
                type="button"
                class="poppins | size-11 rounded-lg line-through"
                disabled
              >
                16
              </button>
              <button
                type="button"
                class="poppins | size-11 rounded-lg line-through"
                disabled
              >
                17
              </button>
              <button
                type="button"
                class="poppins | size-11 rounded-lg line-through"
                disabled
              >
                18
              </button>
              <button
                type="button"
                class="poppins | size-11 rounded-lg line-through"
                disabled
              >
                19
              </button>
              <button
                type="button"
                class="size-11 rounded-lg text-title text-black transition hover:bg-primary-10"
              >
                20
              </button>
              <button
                type="button"
                class="size-11 rounded-lg text-title text-black transition hover:bg-primary-10"
              >
                21
              </button>
              <button
                type="button"
                class="poppins | size-11 rounded-lg line-through"
                disabled
              >
                22
              </button>
              <button
                type="button"
                class="poppins | size-11 rounded-lg line-through"
                disabled
              >
                23
              </button>
              <button
                type="button"
                class="poppins | size-11 rounded-lg line-through"
                disabled
              >
                24
              </button>
              <button
                type="button"
                class="poppins | size-11 rounded-lg line-through"
                disabled
              >
                25
              </button>
              <button
                type="button"
                class="poppins | size-11 rounded-lg line-through"
                disabled
              >
                26
              </button>
              <button
                type="button"
                class="poppins | size-11 rounded-lg line-through"
                disabled
              >
                27
              </button>
              <button
                type="button"
                class="poppins | size-11 rounded-lg line-through"
                disabled
              >
                28
              </button>
              <button
                type="button"
                class="poppins | size-11 rounded-lg line-through"
                disabled
              >
                29
              </button>
              <button
                type="button"
                class="poppins | size-11 rounded-lg line-through"
                disabled
              >
                30
              </button>
              <button
                type="button"
                class="poppins | size-11 rounded-lg line-through"
                disabled
              >
                31
              </button>
            </div>
          </time>
        </div>

        <!-- 選擇數量（唯一動態：qty） -->
        <div class="flex-1">
          <h4 class="mb-6 text-h6">選擇數量</h4>
          <div
            class="flex flex-col justify-between gap-4 sm:flex-row sm:items-center"
          >
            <p class="flex gap-2 text-body text-neutral">
              每張<span class="text-h6 text-black">NT$ 415</span>
            </p>
            <div class="flex items-center gap-4">
              <button
                type="button"
                class="rounded-full border border-neutral-40 bg-white p-4 transition hover:bg-neutral-40 disabled:opacity-40"
                @click="qty = qty - 1"
                :disabled="qty <= props.min"
                aria-label="減少數量"
              >
                <svg width="24" height="24" viewBox="0 0 24 24">
                  <path d="M19 13H5v-2h14z" fill="currentColor" />
                </svg>
              </button>
              <span class="w-[60px] text-center text-h6 text-black">
                {{ qty }}
              </span>
              <button
                type="button"
                class="rounded-full border border-neutral-40 bg-white p-4 transition hover:bg-neutral-40 disabled:opacity-40"
                @click="qty = qty + 1"
                :disabled="qty >= props.max"
                aria-label="增加數量"
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
      </div>

      <hr class="mb-6 border-neutral-40 md:mb-10" />

      <!-- 總金額與購物車按鈕 -->
      <div class="flex flex-col justify-end gap-2 sm:flex-row sm:gap-6">
        <div
          class="flex flex-row items-center justify-end gap-1 sm:flex-col sm:items-end"
        >
          <h4 class="text-body text-neutral">總金額</h4>
          <p class="text-h5">NT$ 830</p>
        </div>
        <div class="flex gap-2 whitespace-nowrap">
          <NuxtLink
            to="/cart?hasItems"
            class="w-full rounded-xl bg-primary-60 px-8 py-4 text-center text-title text-white transition hover:bg-primary sm:w-fit"
          >
            加入購物車
          </NuxtLink>
          <NuxtLink
            to="/cart?hasItems"
            class="w-full rounded-xl bg-primary px-8 py-4 text-center text-title text-white transition hover:bg-primary-120 sm:w-fit"
          >
            立即訂購
          </NuxtLink>
        </div>
      </div>
    </div>
  </Transition>
</template>
