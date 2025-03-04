const i18nConfig = {
  locales: process.env.LOCALES ? process.env.LOCALES.split(',') : ['en'],
  defaultLocale: process.env.DEFAULT_LOCALE
}

module.exports = i18nConfig
