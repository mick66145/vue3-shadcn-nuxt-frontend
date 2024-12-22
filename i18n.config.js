
export default defineI18nConfig(() => ({
  locales: [
    { code: 'en', name: 'English', iso: 'en-US', file: 'en.json' },
    { code: 'zh-TW', name: '繁體中文', iso: 'zh-TW', file: 'zh-TW.json' },
  ],
  defaultLocale: 'zh-TW',
  langDir: 'locales/',
  lazy: true,
  detectBrowserLanguage: {
    useCookie: true,
    cookieKey: 'language',
    redirectOn: 'root'
  }
}))
