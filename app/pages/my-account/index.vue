<script setup>
useSeoMeta({
  title: "個人資訊 | 2025 切版直播班 - 旅遊網站 W7&W8",
  ogTitle: "個人資訊 | 2025 切版直播班 - 旅遊網站 W7&W8",
});

definePageMeta({
  layout: "member",
});
</script>

<template>
  <main
    class="rounded-2xl bg-white px-4 pt-8 pb-4 text-black shadow-section md:rounded-3xl md:px-8 md:pt-16 md:pb-8"
  >
    <h1 class="mb-10 text-h3 md:text-h1">我的帳號</h1>
    <CommonMemberMyAccountPageTab />
    <!-- 會員資訊 -->
    <dl class="mb-10 space-y-6">
      <div class="space-y-2">
        <dt class="text-neutral">姓名</dt>
        <dd class="text-title text-black md:text-h6">Jessica Yen</dd>
      </div>
      <div class="space-y-2">
        <dt class="text-neutral">電子信箱</dt>
        <dd class="text-title text-black md:text-h6">jessica.yen@gmail.com</dd>
      </div>
      <div class="space-y-2">
        <dt class="text-neutral">密碼</dt>
        <dd class="text-title text-black md:text-h6">************</dd>
      </div>
      <div class="space-y-2">
        <dt class="text-neutral">聯絡電話</dt>
        <dd class="text-title text-black md:text-h6">+886 912-345-678</dd>
      </div>
      <div class="space-y-2">
        <dt class="text-neutral">地址</dt>
        <dd class="text-title text-black md:text-h6">
          台北市士林區幸福路193號5樓之1
        </dd>
      </div>
      <div class="space-y-2">
        <dt class="text-neutral">生日</dt>
        <dd class="text-title text-black md:text-h6">
          <time datetime="1995-09-20">1995-09-20</time>
        </dd>
      </div>
    </dl>
    <button
      type="button"
      class="flex w-full items-center justify-center gap-1 rounded-xl border border-primary px-8 py-4 text-title text-primary transition hover:bg-primary hover:text-white md:ml-auto md:w-fit"
    >
      <svg
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M3 17.25V21h3.75L17.81 9.94l-3.75-3.75zM20.71 7.04a.996.996 0 0 0 0-1.41l-2.34-2.34a.996.996 0 0 0-1.41 0l-1.83 1.83 3.75 3.75z"
          fill="currentColor"
        />
      </svg>
      編輯資訊
    </button>
  </main>
</template>
