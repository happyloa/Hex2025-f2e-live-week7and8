<script setup>
// 跑馬燈的速度，單位：秒，數值越小越快
const marqueeSpeed = 20;
</script>

<template>
  <!-- 跑馬燈 -->
  <section class="overflow-hidden whitespace-nowrap">
    <div
      class="marquee | flex items-center gap-2 text-[32px] font-bold leading-[1.2] text-primary-10 md:gap-6 md:text-[130px]"
      :style="`--marquee-duration: ${marqueeSpeed}s;`"
    >
      <span># ZOBAA</span>
      <span># WHERETOGO</span>
      <span># TODAY</span>
      <span># ZOBAA</span>
      <span># WHERETOGO</span>
      <span># TODAY</span>
    </div>
  </section>
</template>

<style scoped>
.marquee {
  /* 跑馬燈動畫，移動寬度需看內容長度 */
  animation: marquee var(--marquee-duration, 10s) linear infinite;
}

/* 關鍵動畫：從右到左移動 50% */
@keyframes marquee {
  0% {
    transform: translateX(0);
  }
  100% {
    transform: translateX(-100%);
  }
}
</style>
