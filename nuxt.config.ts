// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  modules: [
    '@nuxt/eslint',
    '@nuxt/ui',
    'nuxt-svgo',
    'nuxt-viewport',
    '@nuxt/image',
  ],

  devtools: {
    enabled: true,
  },
  css: ['~/assets/css/main.css'],

  routeRules: {
    '/': { prerender: true },
  },

  compatibilityDate: '2025-01-15',

  eslint: {
    config: {
      stylistic: {
        commaDangle: 'never',
        braceStyle: '1tbs',
      },
    },
  },

  svgo: {
    explicitImportsOnly: false,
    dts: true,
    svgoConfig: {
      multipass: true,
      plugins: [
        {
          name: 'removeHiddenElems', // Отключить удаление скрытых элементов
          // active: false,
        },
        {
          name: 'removeUnknownsAndDefaults',
          params: {
            // Сохранить атрибуты href и xlink:href
            keepDataAttrs: true,
            keepRoleAttr: true,
          },
        },
        {
          name: 'preset-default',
          params: {
            overrides: {
              // customize default plugin options
              inlineStyles: {
                onlyMatchedOnce: false,
              },

              // or disable plugins
              removeViewBox: false,
            },
          },
        },
      ],
    },
  },
})
