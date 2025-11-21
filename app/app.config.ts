export default defineAppConfig({
  ui: {
    colors: {
      primary: 'green',
      neutral: 'neutral',
    },
    button: {
      // rounded: 'rounded-lg',
      // default: {
      //   base: 'rounded-full',
      // },
      slots: {
        base: 'rounded-full',
      },
    },
    container: {
      // base: '!max-w-7xl', // Устанавливает максимальную ширину для всех UContainer и UHeader
      // padding: 'p-4 sm:p-6 lg:p-8 mx-0',
    },
  },
  header: {
    slots: {
      // container: 'sm:px-1 lg:px-1 px-1',
    },
  },
})
