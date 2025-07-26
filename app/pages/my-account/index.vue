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
    class="shadow-section rounded-2xl bg-white px-4 pb-4 pt-8 text-black md:rounded-3xl md:px-8 md:pb-8 md:pt-16"
  >
    <h1 class="md:text-h1 text-h3 mb-10">我的帳號</h1>
    <CommonMemberMyAccountPageTab />
    <!-- 會員資訊 -->
    <section class="mb-10 space-y-6">
      <div class="space-y-2">
        <h2 class="text-neutral-80">姓名</h2>
        <p class="text-title md:text-h6 text-black">Jessica Yen</p>
      </div>
      <div class="space-y-2">
        <h2 class="text-neutral-80">電子信箱</h2>
        <p class="text-title md:text-h6 text-black">jessica.yen@gmail.com</p>
      </div>
      <div class="space-y-2">
        <h2 class="text-neutral-80">密碼</h2>
        <p class="text-title md:text-h6 text-black">************</p>
      </div>
      <div class="space-y-2">
        <h2 class="text-neutral-80">聯絡電話</h2>
        <p class="text-title md:text-h6 text-black">+886 912-345-678</p>
      </div>
      <div class="space-y-2">
        <h2 class="text-neutral-80">地址</h2>
        <p class="text-title md:text-h6 text-black">
          台北市士林區幸福路193號5樓之1
        </p>
      </div>
      <div class="space-y-2">
        <h2 class="text-neutral-80">生日</h2>
        <p class="text-title md:text-h6 text-black">1995-09-20</p>
      </div>
    </section>
    <button
      type="button"
      class="border-primary text-primary hover:bg-primary text-title flex w-full items-center justify-center gap-1 rounded-xl border px-8 py-4 transition hover:text-white md:ml-auto md:w-fit"
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
            d="M3 17.25V21h3.75L17.81 9.94l-3.75-3.75zM20.71 7.04a.996.996 0 0 0 0-1.41l-2.34-2.34a.996.996 0 0 0-1.41 0l-1.83 1.83 3.75 3.75z"
            fill="currentColor"
          />
        </g>
      </svg>
      編輯資訊
    </button>
  </main>
</template>
