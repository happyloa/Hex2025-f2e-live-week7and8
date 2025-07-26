<template>
  <footer class="bg-[#282828] px-3 py-20 lg:py-[100px]">
    <div
      class="text-body mx-auto flex max-w-[1280px] flex-col justify-between gap-10 text-white lg:flex-row lg:items-center"
    >
      <nav class="space-y-10 lg:space-y-8">
        <NuxtLink to="/">
          <img
            src="/white-logo.svg"
            alt="白色 logo"
            class="w-[192px] lg:w-[270px]"
          />
        </NuxtLink>
        <ul class="flex flex-col gap-4 lg:flex-row lg:gap-8">
          <li>
            <NuxtLink to="#" class="hover:text-primary-40 transition"
              >常見問題
            </NuxtLink>
          </li>
          <li>
            <NuxtLink to="#" class="hover:text-primary-40 transition"
              >關於我們
            </NuxtLink>
          </li>
          <li>
            <NuxtLink to="#" class="hover:text-primary-40 transition"
              >隱私權政策
            </NuxtLink>
          </li>
          <li>
            <NuxtLink to="#" class="hover:text-primary-40 transition"
              >使用者條款
            </NuxtLink>
          </li>
        </ul>
      </nav>
      <div class="space-y-4">
        <ul class="flex items-center gap-4 lg:justify-end">
          <!-- Line -->
          <li>
            <a
              href="#"
              target="_blank"
              class="hover:border-primary-40 hover:text-primary-40 block rounded-full border border-white p-3 text-white transition"
            >
              <svg
                width="18"
                height="17"
                viewBox="0 0 18 17"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fill-rule="evenodd"
                  clip-rule="evenodd"
                  d="M18 7.026C18 3.152 13.963 0 9 0 4.038 0 0 3.152 0 7.026 0 10.5 3.202 13.41 7.527 13.96c.293.06.692.186.793.427.09.219.06.561.029.783 0 0-.105.61-.129.741-.039.219-.18.856.78.467.96-.39 5.183-2.937 7.071-5.028C17.375 9.974 18 8.577 18 7.026M3.415 9.134A.423.423 0 0 1 3 8.703V5.44c0-.238.212-.431.48-.431s.42.192.42.43v2.833h1.085c.23 0 .415.194.415.431 0 .238-.186.43-.415.43zM7.2 8.703a.44.44 0 0 1-.45.43.44.44 0 0 1-.45-.43V5.44c0-.238.202-.431.45-.431s.45.193.45.43zm4.5 0c0 .186-.128.35-.32.409a.49.49 0 0 1-.523-.15l-1.82-2.278v2.019c0 .238-.21.43-.468.43-.259 0-.469-.192-.469-.43V5.44c0-.186.129-.35.32-.409a.5.5 0 0 1 .523.15l1.82 2.278v-2.02c0-.237.21-.43.469-.43.258 0 .468.193.468.43zm2.885-2.062c.23 0 .415.193.415.43a.423.423 0 0 1-.415.431H13.43v.77h1.156c.229 0 .415.194.415.431 0 .238-.186.43-.415.43h-1.57a.424.424 0 0 1-.415-.43V5.44c0-.238.186-.431.415-.431h1.57c.23 0 .415.193.415.43a.423.423 0 0 1-.415.431H13.43v.77z"
                  fill="currentColor"
                />
              </svg>
            </a>
          </li>
          <!-- Youtube -->
          <li>
            <a
              href="#"
              target="_blank"
              class="hover:border-primary-40 hover:text-primary-40 block rounded-full border border-white px-2.5 py-3 text-white transition"
            >
              <svg
                width="20"
                height="16"
                viewBox="0 0 20 16"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fill-rule="evenodd"
                  clip-rule="evenodd"
                  d="M10-.005c.855 0 1.732.022 2.582.058L13.586.1l.961.057.9.06.822.065a3.8 3.8 0 0 1 3.494 3.423l.04.425.075.91c.07.943.122 1.97.122 2.954 0 .983-.052 2.01-.122 2.954l-.075.91-.04.425a3.8 3.8 0 0 1-3.495 3.423l-.82.063-.9.062-.962.057-1.004.048a62 62 0 0 1-2.582.058 62 62 0 0 1-2.582-.058l-1.004-.048-.961-.057-.9-.062-.822-.063a3.8 3.8 0 0 1-3.494-3.423l-.04-.425-.075-.91A41 41 0 0 1 0 7.995c0-.983.052-2.011.122-2.954l.075-.91.04-.425A3.8 3.8 0 0 1 3.73.283l.821-.064.9-.061L6.413.1 7.417.053A62 62 0 0 1 10-.005M8 5.57v4.85c0 .462.5.75.9.52l4.2-2.425a.6.6 0 0 0 0-1.04L8.9 5.05a.6.6 0 0 0-.9.52"
                  fill="currentColor"
                />
              </svg>
            </a>
          </li>
          <!-- Facebook -->
          <li>
            <a
              href="#"
              target="_blank"
              class="hover:border-primary-40 hover:text-primary-40 block rounded-full border border-white px-4 py-3 text-white transition"
            >
              <svg
                width="9"
                height="17"
                viewBox="0 0 9 17"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fill-rule="evenodd"
                  clip-rule="evenodd"
                  d="M5.598 8.974h2.543l.38-2.934H5.599V4.168c0-.85.238-1.428 1.463-1.428l1.564-.001V.116A21 21 0 0 0 6.347 0C4.093 0 2.549 1.367 2.549 3.877V6.04H0v2.934h2.55V16.5h3.048z"
                  fill="currentColor"
                />
              </svg>
            </a>
          </li>
        </ul>
        <p class="text-body-2 text-[#D4D4D4]">
          copyright © 2025 ZOBAA 旅遊網站 All Rights Reserved.
        </p>
      </div>
    </div>
  </footer>
</template>
