<script setup>
useSeoMeta({
  title: "註冊 | 2025 切版直播班 - 旅遊網站 W7&W8",
  ogTitle: "註冊 | 2025 切版直播班 - 旅遊網站 W7&W8",
});

definePageMeta({
  layout: "auth",
});

const email = ref("");
const password = ref("");
const passwordAgain = ref("");

const showPassword = ref(false);

// 展示用：欄位填寫完成後直接進入會員頁面
function register() {
  navigateTo("/my-account");
}
</script>

<template>
  <form class="space-y-6 md:space-y-10" @submit.prevent="register">
    <!-- 欄位 -->
    <div class="space-y-4 text-body text-neutral">
      <h2 class="text-title text-black">或使用 ZOBAA 帳號註冊</h2>
      <!-- 電子信箱 -->
      <div>
        <label for="email" class="mb-2 flex gap-1"
          >電子信箱<span class="text-danger">*</span>
        </label>
        <input
          v-model="email"
          type="email"
          name="email"
          id="email"
          autocomplete="email"
          required
          placeholder="請輸入電子信箱"
          class="w-full rounded-xl border border-neutral-40 p-4 placeholder:text-neutral-60 focus:outline-hidden"
        />
      </div>
      <!-- 密碼 -->
      <div>
        <label for="password" class="mb-2 flex gap-1"
          >密碼<span class="text-danger">*</span>
        </label>
        <div class="relative">
          <input
            v-model="password"
            :type="showPassword ? 'text' : 'password'"
            name="password"
            id="password"
            autocomplete="new-password"
            required
            placeholder="請輸入密碼"
            class="mb-2 w-full rounded-xl border border-neutral-40 p-4 pr-12 placeholder:text-neutral-60 focus:outline-hidden"
          />
          <button
            v-if="password"
            type="button"
            class="absolute top-1/2 right-4 -translate-y-1/2 cursor-pointer"
            :aria-label="showPassword ? '隱藏密碼' : '顯示密碼'"
            :aria-pressed="showPassword"
            @click="showPassword = !showPassword"
          >
            <img
              :src="
                showPassword ? '/icons/eye-open.svg' : '/icons/eye-close.svg'
              "
              alt=""
              class="size-5"
            />
          </button>
        </div>
      </div>
      <!-- 確認密碼 -->
      <div>
        <label for="passwordAgain" class="mb-2 flex gap-1"
          >確認密碼<span class="text-danger">*</span>
        </label>
        <div class="relative">
          <input
            v-model="passwordAgain"
            :type="showPassword ? 'text' : 'password'"
            name="passwordAgain"
            id="passwordAgain"
            autocomplete="new-password"
            required
            placeholder="請再輸入一次密碼"
            class="mb-2 w-full rounded-xl border border-neutral-40 p-4 pr-12 placeholder:text-neutral-60 focus:outline-hidden"
          />
          <button
            v-if="passwordAgain"
            type="button"
            class="absolute top-1/2 right-4 -translate-y-1/2 cursor-pointer"
            :aria-label="showPassword ? '隱藏密碼' : '顯示密碼'"
            :aria-pressed="showPassword"
            @click="showPassword = !showPassword"
          >
            <img
              :src="
                showPassword ? '/icons/eye-open.svg' : '/icons/eye-close.svg'
              "
              alt=""
              class="size-5"
            />
          </button>
        </div>
      </div>
    </div>
    <!-- 註冊按鈕 -->
    <div>
      <button
        type="submit"
        class="mb-4 block w-full rounded-xl p-4 text-center text-title transition"
        :class="
          !email || !password || !passwordAgain
            ? 'pointer-events-none bg-neutral-40 text-neutral-60'
            : 'bg-primary text-white hover:bg-primary-120'
        "
        :disabled="!email || !password || !passwordAgain"
      >
        立即註冊
      </button>
      <p class="space-x-1 text-body2 text-neutral">
        建立帳號即表示您同意我們的
        <NuxtLink to="#" class="underline">服務條款</NuxtLink>
        及
        <NuxtLink to="#" class="underline">隱私權政策</NuxtLink>
      </p>
    </div>
  </form>
  <p class="space-x-2 text-neutral">
    已經有 ZOBAA 帳號了嗎？
    <NuxtLink to="/login" class="font-semibold text-primary underline">
      立即登入
    </NuxtLink>
  </p>
</template>
