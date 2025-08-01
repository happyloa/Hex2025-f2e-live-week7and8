<script setup>
onMounted(() => {
  // 檢查 sessionStorage 裡是否有 isLoggedIn
  if (sessionStorage.getItem("isLoggedIn") === null) {
    // 沒有就初始化為 'false'
    sessionStorage.setItem("isLoggedIn", "false");
  }
});
</script>

<template>
  <div
    class="text-body2 text-primary selection:bg-primary-120 selection:text-primary-10 md:text-body"
  >
    <LayoutHeader />
    <NuxtLayout>
      <NuxtRouteAnnouncer />
      <NuxtPage />
    </NuxtLayout>
    <LayoutFooter />
  </div>
</template>
