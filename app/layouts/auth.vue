<template>
  <section class="flex">
    <!-- 輪播裝飾 -->
    <aside class="hidden w-[640px] shrink-0 py-10 pl-10 xl:block">
      <ClientOnly>
        <swiper-container
          :slides-per-view="1"
          :autoplay="{
            delay: 5000,
          }"
          :loop="true"
        >
          <swiper-slide>
            <img src="/images/auth/cover-1.webp" alt="裝飾圖片1" />
          </swiper-slide>
          <swiper-slide>
            <img src="/images/auth/cover-2.webp" alt="裝飾圖片2" />
          </swiper-slide>
          <swiper-slide>
            <img src="/images/auth/cover-3.webp" alt="裝飾圖片3" />
          </swiper-slide>
        </swiper-container>
      </ClientOnly>
    </aside>
    <main
      class="flex-1 content-center justify-items-center px-6 pb-[90px] pt-[60px] text-black lg:py-[151px]"
    >
      <div class="w-full max-w-[604px] space-y-6 md:space-y-10">
        <h1 class="md:text-h1 text-h3">
          {{
            $route.path === "/login"
              ? "歡迎回來！"
              : $route.path === "/register"
                ? "歡迎加入 ZOBAA"
                : "不是登入/註冊頁面"
          }}
        </h1>
        <!-- 第三方登入 -->
        <ul class="space-y-2 md:space-y-4">
          <li
            class="border-neutral-40 text-neutral-80 hover:bg-neutral-40 text-body relative cursor-pointer rounded-xl border bg-white p-4 text-center transition"
          >
            <img src="/icons/google.svg" alt="Google 登入" class="absolute" />
            使用 Google 帳號登入
          </li>
          <li
            class="border-neutral-40 text-neutral-80 hover:bg-neutral-40 text-body relative cursor-pointer rounded-xl border bg-white p-4 text-center transition"
          >
            <img
              src="/icons/facebook.svg"
              alt="Facebook 登入"
              class="absolute"
            />
            使用 Facebook 帳號登入
          </li>
          <li
            class="border-neutral-40 text-neutral-80 hover:bg-neutral-40 text-body relative cursor-pointer rounded-xl border bg-white p-4 text-center transition"
          >
            <img src="/icons/apple.svg" alt="Apple 登入" class="absolute" />
            使用 Apple 帳號登入
          </li>
        </ul>
        <!-- 登入/註冊頁面內容插槽 -->
        <slot />
      </div>
    </main>
  </section>
</template>
