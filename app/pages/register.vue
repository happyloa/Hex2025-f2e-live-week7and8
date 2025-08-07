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
</script>

<template>
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
        placeholder="請輸入電子信箱"
        class="w-full rounded-xl border border-neutral-40 p-4 placeholder:text-neutral-60 focus:outline-none"
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
          placeholder="請輸入密碼"
          class="mb-2 w-full rounded-xl border border-neutral-40 p-4 pr-12 placeholder:text-neutral-60 focus:outline-none"
        />
        <img
          v-if="password"
          :src="showPassword ? '/icons/eye-open.svg' : '/icons/eye-close.svg'"
          :alt="showPassword ? '顯示密碼' : '隱藏密碼'"
          class="absolute right-4 top-1/2 size-5 -translate-y-1/2 cursor-pointer"
          @click="showPassword = !showPassword"
        />
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
          placeholder="請再輸入一次密碼"
          class="mb-2 w-full rounded-xl border border-neutral-40 p-4 pr-12 placeholder:text-neutral-60 focus:outline-none"
        />
        <img
          v-if="password"
          :src="showPassword ? '/icons/eye-open.svg' : '/icons/eye-close.svg'"
          :alt="showPassword ? '顯示密碼' : '隱藏密碼'"
          class="absolute right-4 top-1/2 size-5 -translate-y-1/2 cursor-pointer"
          @click="showPassword = !showPassword"
        />
      </div>
    </div>
  </div>
  <!-- 註冊按鈕 -->
  <div>
    <NuxtLink
      to="/my-account"
      class="mb-4 block w-full rounded-xl p-4 text-center text-title transition"
      :class="
        !email || !password || !passwordAgain
          ? 'pointer-events-none bg-neutral-40 text-neutral-60'
          : 'bg-primary text-white hover:bg-primary-120'
      "
    >
      立即註冊
    </NuxtLink>
    <p class="space-x-1 text-body2 text-neutral">
      建立帳號即表示您同意我們的
      <NuxtLink to="#" class="underline">服務條款</NuxtLink>
      及
      <NuxtLink to="#" class="underline">隱私權政策</NuxtLink>
    </p>
  </div>
  <p class="space-x-2 text-neutral">
    已經有 ZOBAA 帳號了嗎？
    <NuxtLink to="/login" class="font-semibold text-primary underline">
      立即登入
    </NuxtLink>
  </p>
</template>
