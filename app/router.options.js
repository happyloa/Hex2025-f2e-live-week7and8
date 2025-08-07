export default {
  scrollBehavior(to, from, savedPosition) {
    // 這裡判斷只要從 /my-account 或 /my-account/saved-info 之間互跳都維持原本的畫面位置
    const isMyAccountRoute = (path) =>
      path === "/my-account" || path === "/my-account/saved-info";

    if (isMyAccountRoute(to.path) && isMyAccountRoute(from.path)) {
      // 不要自動 scroll
      return false;
    }

    // 有 hash（fragment）就滾動到對應 id
    if (to.hash) {
      return {
        el: to.hash,
        top: 100,
      };
    }

    // 沒 hash 就滾到頂
    return { left: 0, top: 0 };
  },
};
