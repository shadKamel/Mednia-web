import { useLocalStorage } from "@vueuse/core";

export const useIsAuthenticated = () => {
  const token = useLocalStorage<string>("token", null);
  return token.value ? true : false;
};
