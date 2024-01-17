// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  modules: ["@nuxtjs/tailwindcss", "@vueuse/nuxt", "@pinia/nuxt"],
  css: ["~/assets/css/app.css"],

  alias: {
    assets: "/<rootDir>/assets",
  },

  runtimeConfig: {
    public: {
      base_url: "",
    },
  },
});