export default defineNuxtPlugin(() => {
  const { isLoggedIn } = useAuth();

  // 第一次載入時，帶 sessionStorage 值
  const raw = sessionStorage.getItem("isLoggedIn");
  if (raw !== null) isLoggedIn.value = raw === "true";
});
