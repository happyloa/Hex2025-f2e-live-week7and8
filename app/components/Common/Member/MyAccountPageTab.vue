<template>
  <nav class="mb-6 border-b border-neutral-40 text-title">
    <ul class="flex gap-8">
      <li>
        <NuxtLink
          to="/my-account"
          class="group relative block py-4"
          :class="
            $route.path === '/my-account'
              ? 'text-title text-primary'
              : 'text-neutral text-body'
          "
          >個人資訊
          <hr
            class="absolute bottom-0 left-1/2 w-1/2 -translate-x-1/2 rounded-full border-2 border-primary transition group-hover:opacity-100"
            :class="$route.path === '/my-account' ? 'opacity-100' : 'opacity-0'"
          />
        </NuxtLink>
      </li>
      <li>
        <NuxtLink
          to="/my-account/saved-info"
          class="group relative block py-4"
          :class="
            $route.path === '/my-account/saved-info'
              ? 'text-title text-primary'
              : 'text-neutral text-body'
          "
          >常用旅客
          <hr
            class="absolute bottom-0 left-1/2 w-1/2 -translate-x-1/2 rounded-full border-2 border-primary transition group-hover:opacity-100"
            :class="
              $route.path === '/my-account/saved-info'
                ? 'opacity-100'
                : 'opacity-0'
            "
          />
        </NuxtLink>
      </li>
    </ul>
  </nav>
</template>
