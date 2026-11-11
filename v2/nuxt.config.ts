// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  modules: [
      '@nuxtjs/color-mode',
      '@nuxt/image',
  ],

  css:[
      '~/assets/css/app.css'
  ],

  app: {
      head: {
          htmlAttrs: { lang: 'bg' },
          link: [
              { rel: 'preconnect', href: 'https://fonts.googleapis.com' },
              { rel: 'preconnect', href: 'https://fonts.gstatic.com', crossorigin: '' },
              {
                  rel: 'stylesheet',
                  href: 'https://fonts.googleapis.com/css2?family=Cormorant+Garamond:ital,wght@0,300;0,400;0,500;1,300;1,400;1,500&family=Onest:wght@300;400;500&family=Tenor+Sans&display=swap',
              },
          ],
          script: [
              { innerHTML: "document.documentElement.classList.add('js')", tagPosition: 'head' },
          ],
      },
  },

  colorMode:{
      preference: 'system', // default value of $colorMode.preference
      fallback: 'dark', // fallback value if not system preference found
      hid: 'nuxt-color-mode-script',
      globalName: '__NUXT_COLOR_MODE__',
      componentName: 'ColorScheme',
      classPrefix: '',
      classSuffix: '',
      storageKey: 'nuxt-color-mode'
  },

  postcss:{
      plugins: {
          tailwindcss: {},
          autoprefixer: {}
      }
  },

  compatibilityDate: '2024-12-23',
})
