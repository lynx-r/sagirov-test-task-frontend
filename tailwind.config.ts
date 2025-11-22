import type { Config } from 'tailwindcss'

export default <Partial<Config>>{
  theme: {
    extend: {
      fontFamily: {
        gilroy: ['Gilroy', 'ui-sans-serif', 'system-ui'], // Добавьте Gilroy сюда
      },
    },
  },
}
