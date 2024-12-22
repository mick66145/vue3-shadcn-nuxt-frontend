// https://nuxt.com/docs/api/configuration/nuxt-config

import { fileURLToPath, URL } from 'url'

export default defineNuxtConfig({
  compatibilityDate: '2024-11-01',
  devtools: { enabled: true },
  srcDir: 'src/',
  css: ['./assets/styles/index.scss'],
  modules: [
    '@pinia/nuxt',
    '@vueuse/nuxt',
    'dayjs-nuxt',
    "nuxt-lodash",
    'nuxt-swiper',
    '@nuxtjs/i18n',
    "@nuxtjs/tailwindcss"
  ],
  postcss: {
    plugins: {
      'postcss-nested': {},
      tailwindcss: {},
      autoprefixer: {},
    },
  },
  vite: {
    css: {
      preprocessorOptions: {
        scss: {
        }
      }
    },
    resolve: {
      alias: {
        '@core': fileURLToPath(new URL('./src/@core', import.meta.url)),
      }
    }
  },
  tailwindcss: {
    configPath: "tailwind.config.js",
  },
  i18n: {
    vueI18n: './i18n.config.js'
  },
  runtimeConfig: {
    public: {
      backendHost: process.env.BACKEND_HOST || 'http://localhost:3000'
    }
  }
})
