import { useLocalStorage } from "@vueuse/core";

export default defineNuxtRouteMiddleware(async (to, from) => {
  if (process.client) {
    const { token } = useAuthStore();

    if (token) {
      window.location.pathname = "/";
    }
  }
});
