// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
css: ['/styles/css/reset.css', '/styles/css/main.css'],
vite: {
    css: {
      preprocessorOptions: {
        scss: {
          additionalData: `
            @import '/styles/scss/variables.scss';
  
          `
        }
      }
    },
  },
})
