<script setup>
useSeoMeta({
  title: "常用旅客 | 2025 切版直播班 - 旅遊網站 W7&W8",
  ogTitle: "常用旅客 | 2025 切版直播班 - 旅遊網站 W7&W8",
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
    <!-- 常用旅客 -->
    <section class="mb-10">
      <ul class="space-y-6 md:space-y-3">
        <li>
          <article
            class="border-neutral-40 hover:bg-primary-10 group flex flex-wrap items-center justify-between gap-4 rounded-[20px] border p-4 transition md:p-6"
          >
            <!-- 旅客資訊 -->
            <div class="flex items-center gap-2">
              <img
                src="/images/my-account/avatar-1.webp"
                alt="Jessica Yen"
                class="border-primary size-10 rounded-full border"
              />
              <h2 class="text-h6">Jessica Yen</h2>
            </div>
            <!-- 操作按鈕 -->
            <div class="flex items-center gap-2 whitespace-nowrap">
              <button
                type="button"
                class="border-primary text-primary hover:bg-primary text-title flex items-center justify-center gap-1 rounded-xl border bg-white px-8 py-4 transition hover:text-white group-hover:opacity-100 md:opacity-0"
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
              <button
                type="button"
                class="border-primary text-primary hover:bg-primary text-title flex items-center justify-center gap-1 rounded-xl border bg-white px-8 py-4 transition hover:text-white group-hover:opacity-100 md:opacity-0"
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
                      d="M19 6.41 17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12z"
                      fill="currentColor"
                    />
                  </g>
                </svg>
                刪除
              </button>
            </div>
          </article>
        </li>
        <li>
          <article
            class="border-neutral-40 hover:bg-primary-10 group flex flex-wrap items-center justify-between gap-4 rounded-[20px] border p-4 transition md:p-6"
          >
            <!-- 旅客資訊 -->
            <div class="flex items-center gap-2">
              <img
                src="/images/my-account/avatar-2.webp"
                alt="Jenny Lin"
                class="border-primary size-10 rounded-full border"
              />
              <div>
                <h2 class="text-h6 md:mb-2">Jenny Lin</h2>
                <p class="mb-1 hidden items-center gap-2 md:flex">
                  <!-- email icon -->
                  <svg
                    width="16"
                    height="16"
                    viewBox="0 0 16 16"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M2.667 3.333h10.666c.367 0 .667.3.667.667v8c0 .367-.3.667-.667.667H2.667A.67.67 0 0 1 2 12V4c0-.367.3-.667.667-.667"
                      stroke="#4A3830"
                      stroke-width="1.333"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    />
                    <path
                      d="M2 4.333 8 8l6-3.667"
                      stroke="#4A3830"
                      stroke-width="1.333"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    />
                  </svg>
                  Jenny.Linnn@gmail.com
                </p>
                <p class="hidden items-center gap-2 md:flex">
                  <!-- 蛋糕 icon -->
                  <svg
                    width="16"
                    height="16"
                    viewBox="0 0 16 16"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M2 8.667A2.667 2.667 0 0 1 4.667 6h6.666A2.667 2.667 0 0 1 14 8.667v4.666a1.333 1.333 0 0 1-1.333 1.334H3.333A1.333 1.333 0 0 1 2 13.333z"
                      stroke="#4A3830"
                      stroke-width="1.333"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    />
                    <path
                      d="m2 8.667 1.943 1.554a1.99 1.99 0 0 0 2.65-.147 1.99 1.99 0 0 1 2.814 0 1.99 1.99 0 0 0 2.65.147L14 8.667"
                      stroke="#4A3830"
                      stroke-width="1.333"
                      stroke-linecap="round"
                    />
                    <path
                      d="M8.001 4a1.333 1.333 0 0 1-1.333-1.333c0-.584.451-1.051.849-1.478L8 .667l.485.522c.397.427.849.894.849 1.478A1.333 1.333 0 0 1 8 4"
                      stroke="#4A3830"
                      stroke-width="1.333"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    />
                  </svg>
                  2001.01.30
                </p>
              </div>
            </div>
            <!-- 操作按鈕 -->
            <div class="flex items-center gap-2 whitespace-nowrap">
              <button
                type="button"
                class="border-primary text-primary hover:bg-primary text-title flex items-center justify-center gap-1 rounded-xl border bg-white px-8 py-4 transition hover:text-white group-hover:opacity-100 md:opacity-0"
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
              <button
                type="button"
                class="border-primary text-primary hover:bg-primary text-title flex items-center justify-center gap-1 rounded-xl border bg-white px-8 py-4 transition hover:text-white group-hover:opacity-100 md:opacity-0"
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
                      d="M19 6.41 17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12z"
                      fill="currentColor"
                    />
                  </g>
                </svg>
                刪除
              </button>
            </div>
          </article>
        </li>
      </ul>
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
        <path d="M19 13h-6v6h-2v-6H5v-2h6V5h2v6h6z" fill="currentColor" />
      </svg>
      新增常用旅客
    </button>
  </main>
</template>
