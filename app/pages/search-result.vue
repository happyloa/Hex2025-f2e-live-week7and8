<template>
  <!-- 熱門分類 -->
  <section class="px-3 py-10 md:py-20">
    <div class="mx-auto max-w-container">
      <h2 class="mb-5 text-h3 md:mb-10 md:text-h1">
        想怎麼玩大阪？熱門分類快速選！
      </h2>
      <ul class="grid grid-cols-2 gap-4 md:grid-cols-4 md:gap-6">
        <!-- 分類1 -->
        <li>
          <article class="rounded-2xl border border-neutral-40 md:rounded-3xl">
            <div
              class="justify-items-center rounded-t-2xl bg-primary-10 py-5 md:rounded-t-3xl"
            >
              <img
                src="/images/search-result/category-1.svg"
                alt="交通優惠"
                class="w-16 md:w-[150px]"
              />
            </div>
            <footer class="p-4 md:p-6">
              <h3 class="mb-2 text-title text-black md:text-h6">交通優惠</h3>
              <p class="text-neutral-80">20+ 種選擇</p>
            </footer>
          </article>
        </li>
        <!-- 分類2 -->
        <li>
          <article class="rounded-2xl border border-neutral-40 md:rounded-3xl">
            <div
              class="justify-items-center rounded-t-2xl bg-primary-10 py-5 md:rounded-t-3xl"
            >
              <img
                src="/images/search-result/category-2.svg"
                alt="一日遊"
                class="w-16 md:w-[150px]"
              />
            </div>
            <footer class="p-4 md:p-6">
              <h3 class="mb-2 text-title text-black md:text-h6">一日遊</h3>
              <p class="text-neutral-80">50+ 種選擇</p>
            </footer>
          </article>
        </li>
        <!-- 分類3 -->
        <li>
          <article class="rounded-2xl border border-neutral-40 md:rounded-3xl">
            <div
              class="justify-items-center rounded-t-2xl bg-primary-10 py-5 md:rounded-t-3xl"
            >
              <img
                src="/images/search-result/category-3.svg"
                alt="景點門票"
                class="w-16 md:w-[150px]"
              />
            </div>
            <footer class="p-4 md:p-6">
              <h3 class="mb-2 text-title text-black md:text-h6">景點門票</h3>
              <p class="text-neutral-80">70+ 種選擇</p>
            </footer>
          </article>
        </li>
        <!-- 分類4 -->
        <li>
          <article class="rounded-2xl border border-neutral-40 md:rounded-3xl">
            <div
              class="justify-items-center rounded-t-2xl bg-primary-10 py-5 md:rounded-t-3xl"
            >
              <img
                src="/images/search-result/category-4.svg"
                alt="美食餐廳"
                class="w-16 md:w-[150px]"
              />
            </div>
            <footer class="p-4 md:p-6">
              <h3 class="mb-2 text-title text-black md:text-h6">美食餐廳</h3>
              <p class="text-neutral-80">80+ 種選擇</p>
            </footer>
          </article>
        </li>
      </ul>
    </div>
  </section>
  <!-- 大阪 TOP 10! -->
  <section class="px-3 py-10 md:py-20">
    <div class="mx-auto max-w-container">
      <h2 class="mb-5 text-h3 md:mb-10 md:text-h1">大阪 TOP 10!</h2>
      <CommonAttractionsCarousel />
    </div>
  </section>
  <!-- 來自 ZOBAA 的大阪推薦 -->
  <section class="px-3 py-10 md:py-20">
    <div class="mx-auto max-w-container">
      <h2 class="mb-5 text-h3 md:mb-10 md:text-h1">
        來自 ZOBAA 的<br class="block md:hidden" />大阪推薦
      </h2>
      <!-- 景點分類選單 -->
      <nav
        class="mb-5 overflow-x-auto border-b border-neutral-40 text-title md:mb-10"
      >
        <ul class="flex gap-8 whitespace-nowrap">
          <li>
            <NuxtLink
              to="#"
              class="group relative block py-4 text-title text-primary"
              >觀光行程
              <hr
                class="absolute bottom-0 left-1/2 w-1/2 -translate-x-1/2 rounded-full border-2 border-primary opacity-100 transition"
              />
            </NuxtLink>
          </li>
          <li>
            <NuxtLink
              to="#"
              class="group relative block py-4 text-body text-neutral-80"
              >景點門票
              <hr
                class="absolute bottom-0 left-1/2 w-1/2 -translate-x-1/2 rounded-full border-2 border-primary opacity-0 transition group-hover:opacity-100"
              />
            </NuxtLink>
          </li>
          <li>
            <NuxtLink
              to="#"
              class="group relative block py-4 text-body text-neutral-80"
              >交通優惠
              <hr
                class="absolute bottom-0 left-1/2 w-1/2 -translate-x-1/2 rounded-full border-2 border-primary opacity-0 transition group-hover:opacity-100"
              />
            </NuxtLink>
          </li>
          <li>
            <NuxtLink
              to="#"
              class="group relative block py-4 text-body text-neutral-80"
              >美食餐廳
              <hr
                class="absolute bottom-0 left-1/2 w-1/2 -translate-x-1/2 rounded-full border-2 border-primary opacity-0 transition group-hover:opacity-100"
              />
            </NuxtLink>
          </li>
          <li>
            <NuxtLink
              to="#"
              class="group relative block py-4 text-body text-neutral-80"
              >本月優惠
              <hr
                class="absolute bottom-0 left-1/2 w-1/2 -translate-x-1/2 rounded-full border-2 border-primary opacity-0 transition group-hover:opacity-100"
              />
            </NuxtLink>
          </li>
        </ul>
      </nav>
      <CommonAttractionsCarousel />
    </div>
  </section>
  <!-- 旅人攻略 -->
  <section class="bg-primary-10 px-3 py-10 md:py-[120px]">
    <div class="mx-auto max-w-container space-y-5 md:space-y-20">
      <!-- 標題、文字 -->
      <div
        class="flex flex-col justify-between gap-2 md:flex-row md:items-center"
      >
        <h2 class="text-h3 md:text-h1">旅人攻略<br />看看大家怎麼玩！</h2>
        <p class="text-title md:text-h6">
          這裡不只是遊記，更是來自旅人親身經歷的風格指南與靈感筆記。<br />跟著他們的腳步走，找到屬於你的旅行意義。
        </p>
      </div>
      <ul class="space-y-6">
        <!-- 攻略卡片1 -->
        <li>
          <article
            class="flex flex-col gap-4 rounded-[32px] bg-white p-4 md:flex-row md:gap-8 md:p-8"
          >
            <img
              src="/images/search-result/guide-1.webp"
              alt="旅人攻略1"
              class="h-[232px] rounded-2xl object-cover md:h-auto md:max-w-[480px]"
            />
            <div>
              <!-- 標籤 -->
              <ul class="mb-6 flex gap-2 whitespace-nowrap">
                <li
                  class="cursor-pointer rounded-lg bg-primary-10 px-4 py-2 text-subtitle transition hover:bg-primary hover:text-primary-10 md:text-title"
                >
                  #大阪
                </li>
                <li
                  class="cursor-pointer rounded-lg bg-primary-10 px-4 py-2 text-subtitle transition hover:bg-primary hover:text-primary-10 md:text-title"
                >
                  #老街巡禮
                </li>
              </ul>
              <!-- 標題 -->
              <h3 class="mb-2 text-h4 text-black md:text-h2">
                空堀商店街的散步節奏
              </h3>
              <!-- 簡短描述 -->
              <p class="mb-10 text-neutral-80">
                離開熱鬧難波，走進空堀這座時間凍結的老街，每家店都像一段回憶：木造喫茶、手工小物、安靜的巷弄轉角。這裡沒有觀光氣氛，只有城市最真實的日常樣貌...
              </p>
              <!-- 查看按鈕 -->
              <button
                type="button"
                class="flex items-center gap-2 text-title transition hover:text-primary-80 md:ml-auto"
              >
                查看文章
                <svg
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <g clip-path="url(#a)">
                    <path
                      d="m12 4-1.41 1.41L16.17 11H4v2h12.17l-5.58 5.59L12 20l8-8z"
                      fill="currentColor"
                    />
                  </g>
                </svg>
              </button>
            </div>
          </article>
        </li>
        <!-- 攻略卡片2 -->
        <li>
          <article
            class="flex flex-col gap-4 rounded-[32px] bg-white p-4 md:flex-row md:gap-8 md:p-8"
          >
            <img
              src="/images/search-result/guide-2.webp"
              alt="旅人攻略2"
              class="h-[232px] rounded-2xl object-cover md:h-auto md:max-w-[480px]"
            />
            <div>
              <!-- 標籤 -->
              <ul class="mb-6 flex gap-2 whitespace-nowrap">
                <li
                  class="cursor-pointer rounded-lg bg-primary-10 px-4 py-2 text-subtitle transition hover:bg-primary hover:text-primary-10 md:text-title"
                >
                  #大阪
                </li>
                <li
                  class="cursor-pointer rounded-lg bg-primary-10 px-4 py-2 text-subtitle transition hover:bg-primary hover:text-primary-10 md:text-title"
                >
                  #庶民美食
                </li>
              </ul>
              <!-- 標題 -->
              <h3 class="mb-2 text-h4 text-black md:text-h2">
                深夜的章魚燒與便利商店啤酒
              </h3>
              <!-- 簡短描述 -->
              <p class="mb-10 text-neutral-80">
                難波站邊的小巷，有開到凌晨的章魚燒老店。坐在路邊配一罐便利商店啤酒，看路人談天、喝醉、笑鬧，這種庶民感才是我最懷念的大阪味道。
              </p>
              <!-- 查看按鈕 -->
              <button
                type="button"
                class="flex items-center gap-2 text-title transition hover:text-primary-80 md:ml-auto"
              >
                查看文章
                <svg
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <g clip-path="url(#a)">
                    <path
                      d="m12 4-1.41 1.41L16.17 11H4v2h12.17l-5.58 5.59L12 20l8-8z"
                      fill="currentColor"
                    />
                  </g>
                </svg>
              </button>
            </div>
          </article>
        </li>
        <!-- 攻略卡片3 -->
        <li>
          <article
            class="flex flex-col gap-4 rounded-[32px] bg-white p-4 md:flex-row md:gap-8 md:p-8"
          >
            <img
              src="/images/search-result/guide-3.webp"
              alt="旅人攻略3"
              class="h-[232px] rounded-2xl object-cover md:h-auto md:max-w-[480px]"
            />
            <div>
              <!-- 標籤 -->
              <ul class="mb-6 flex gap-2 whitespace-nowrap">
                <li
                  class="cursor-pointer rounded-lg bg-primary-10 px-4 py-2 text-subtitle transition hover:bg-primary hover:text-primary-10 md:text-title"
                >
                  #大阪
                </li>
                <li
                  class="cursor-pointer rounded-lg bg-primary-10 px-4 py-2 text-subtitle transition hover:bg-primary hover:text-primary-10 md:text-title"
                >
                  #靜態旅行
                </li>
              </ul>
              <!-- 標題 -->
              <h3 class="mb-2 text-h4 text-black md:text-h2">
                一個人在中之島圖書館待一整天
              </h3>
              <!-- 簡短描述 -->
              <p class="mb-10 text-neutral-80">
                陰天的中之島很安靜，我選擇在百年圖書館裡消磨一整天。閱讀、打盹、寫明信片，從高聳書架與拱形窗邊找到片刻的呼吸空間。不趕行程的日子，才最像我想要的旅途。
              </p>
              <!-- 查看按鈕 -->
              <button
                type="button"
                class="flex items-center gap-2 text-title transition hover:text-primary-80 md:ml-auto"
              >
                查看文章
                <svg
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <g clip-path="url(#a)">
                    <path
                      d="m12 4-1.41 1.41L16.17 11H4v2h12.17l-5.58 5.59L12 20l8-8z"
                      fill="currentColor"
                    />
                  </g>
                </svg>
              </button>
            </div>
          </article>
        </li>
        <!-- 攻略卡片4 -->
        <li>
          <article
            class="flex flex-col gap-4 rounded-[32px] bg-white p-4 md:flex-row md:gap-8 md:p-8"
          >
            <img
              src="/images/search-result/guide-4.webp"
              alt="旅人攻略4"
              class="h-[232px] rounded-2xl object-cover md:h-auto md:max-w-[480px]"
            />
            <div>
              <!-- 標籤 -->
              <ul class="mb-6 flex gap-2 whitespace-nowrap">
                <li
                  class="cursor-pointer rounded-lg bg-primary-10 px-4 py-2 text-subtitle transition hover:bg-primary hover:text-primary-10 md:text-title"
                >
                  #大阪
                </li>
                <li
                  class="cursor-pointer rounded-lg bg-primary-10 px-4 py-2 text-subtitle transition hover:bg-primary hover:text-primary-10 md:text-title"
                >
                  #在地文化
                </li>
              </ul>
              <!-- 標題 -->
              <h3 class="mb-2 text-h4 text-black md:text-h2">
                跟著在地人玩「新世界」
              </h3>
              <!-- 簡短描述 -->
              <p class="mb-10 text-neutral-80">
                走進「新世界」，才發現大阪有多狂、有多生活。串炸店裡全是吆喝聲、立吞店排滿上班族，還有拍不完的霓虹與搞笑招牌。這一區又亂又熱鬧，但真實又迷人。
              </p>
              <!-- 查看按鈕 -->
              <button
                type="button"
                class="flex items-center gap-2 text-title transition hover:text-primary-80 md:ml-auto"
              >
                查看文章
                <svg
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <g clip-path="url(#a)">
                    <path
                      d="m12 4-1.41 1.41L16.17 11H4v2h12.17l-5.58 5.59L12 20l8-8z"
                      fill="currentColor"
                    />
                  </g>
                </svg>
              </button>
            </div>
          </article>
        </li>
      </ul>
    </div>
  </section>
</template>
