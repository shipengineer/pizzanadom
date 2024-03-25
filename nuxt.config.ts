// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  app: {
    baseURL: '',
  },
  image: {
    format: ['webp'],
  },

  modules: ['@nuxt/image', '@nuxt/ui', '@pinia/nuxt'],
});
