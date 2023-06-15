// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  modules:[
    'nuxt-highcharts',
    '@nuxtjs/tailwindcss'
  ],
  typescript: {
    shim: false,
  },
  ssr: false
})
