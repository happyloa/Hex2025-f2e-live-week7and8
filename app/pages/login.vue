<script setup>
import { NuxtLink } from "#components";

useSeoMeta({
  title: "登入 | 2025 切版直播班 - 旅遊網站 W7&W8",
  ogTitle: "登入 | 2025 切版直播班 - 旅遊網站 W7&W8",
});

definePageMeta({
  layout: "auth",
});

const email = ref("");
const password = ref("");
const rememberMe = ref(false);

const showPassword = ref(false);
</script>

<template>
  <!-- 欄位 -->
  <div class="space-y-4 text-body text-neutral-80">
    <h2 class="text-title text-black">或使用 ZOBAA 帳號登入</h2>
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
    <!-- 密碼、記住帳號、忘記密碼 -->
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
      <div class="flex items-center justify-between">
        <div class="flex gap-2">
          <input
            v-model="rememberMe"
            type="checkbox"
            name="rememberMe"
            id="rememberMe"
            class="custom-checkbox"
          />
          <label for="rememberMe">記住帳號</label>
        </div>
        <button type="button" class="hover:underline">忘記密碼？</button>
      </div>
    </div>
  </div>
  <!-- 登入按鈕 -->
  <button
    type="button"
    class="w-full rounded-xl p-4 text-center text-title transition"
    :class="
      !email || !password
        ? 'pointer-events-none bg-neutral-40 text-neutral-60'
        : 'bg-primary text-white hover:bg-primary-120'
    "
  >
    立即登入
  </button>
  <p class="space-x-2 text-neutral-80">
    沒有 ZOBAA 帳號嗎？
    <NuxtLink to="/register" class="font-semibold text-primary underline">
      立即註冊
    </NuxtLink>
  </p>
</template>

<style scoped>
@import "@/assets/css/custom-checkbox.css";
</style>
