// 進入會員頁面時，把展示用的登入狀態設為 true。
// 放在路由 middleware 而不是版面的 onMounted，伺服器端渲染時導覽列就已是登入狀態，
// 避免頁面載入後才從「登入 / 註冊」切換成頭像而造成版面跳動。
export default defineNuxtRouteMiddleware((to) => {
  if (to.meta.layout === "member") useAuth().isLoggedIn.value = true;
});
