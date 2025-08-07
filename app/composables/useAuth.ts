export const useAuth = () => {
  const isLoggedIn = useState<boolean>("isLoggedIn", () => false);
  return { isLoggedIn };
};
