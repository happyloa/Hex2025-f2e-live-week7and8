<template>
  <section class="relative overflow-x-hidden bg-neutral-15 px-3">
    <!-- 裝飾線條 -->
    <img
      src="/images/my-account/bg-line.svg"
      alt="裝飾線條"
      class="absolute left-1/2 top-[324px] z-0 hidden -translate-x-1/2 md:block"
    />
    <div class="relative z-10 mx-auto max-w-container py-10 md:py-[120px]">
      <!-- Hero -->
      <div
        class="relative h-[200px] rounded-3xl bg-[url('/images/my-account/hero.webp')] bg-cover bg-center md:h-[480px]"
      >
        <!-- 更換封面 -->
        <span
          class="absolute bottom-8 right-8 hidden cursor-pointer items-center gap-2 text-white transition hover:text-primary-40 md:flex"
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
          更換封面
        </span>
      </div>
      <!-- 用戶資訊 -->
      <div class="-mt-20 mb-10 justify-items-center text-center md:mb-20">
        <!-- 頭像容器 -->
        <div class="relative mb-2">
          <img
            src="/images/my-account/avatar-1.webp"
            alt="Jessica"
            class="max-w-[120px] rounded-full border-2 border-primary md:max-w-40 md:border-4"
          />
          <button
            type="button"
            class="absolute bottom-0 right-0 rounded-full bg-primary p-2 text-white transition hover:bg-primary-40 hover:text-primary md:bottom-1 md:right-1"
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
          </button>
        </div>
        <h3 class="text-h6 md:text-h5">Jessica Yen</h3>
        <p>jessica.yen@gmail.com</p>
      </div>
      <!-- 會員頁面選單 -->
      <nav
        class="mb-4 whitespace-nowrap rounded-2xl bg-white py-4 text-title text-black shadow-section md:mb-6 md:rounded-3xl"
      >
        <ul class="grid grid-cols-3 divide-x border-neutral-40">
          <li class="px-6 py-3">
            <NuxtLink to="/my-account" class="border-b-4 border-primary-40 pb-2"
              >我的帳號
            </NuxtLink>
          </li>
          <li class="px-6 py-3">
            <NuxtLink
              to="/my-account"
              class="border-b-4 border-transparent pb-2 transition hover:border-primary-40"
              >訂單管理
            </NuxtLink>
          </li>
          <li class="px-6 py-3">
            <NuxtLink
              to="/my-account"
              class="border-b-4 border-transparent pb-2 transition hover:border-primary-40"
              >我的收藏
            </NuxtLink>
          </li>
        </ul>
      </nav>
      <!-- 會員頁面獨立內容插槽 -->
      <slot />
    </div>
  </section>
</template>
