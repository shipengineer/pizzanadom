// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  app: {
    baseURL: '',
  },
  image: {
    format: ['webp'],
  },
  nitro: {
    experimental: {
      database: true
    }
  },

  modules: ['@nuxt/image', '@nuxt/ui', '@pinia/nuxt'],
});
