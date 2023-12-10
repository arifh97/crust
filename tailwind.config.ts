import type { Config } from 'tailwindcss'
import defaultTheme from 'tailwindcss/defaultTheme'

export default <Partial<Config>>{
  theme: {
    extend: {
      colors: {
        orange: {
        //   50: '#EFFDF5',
        //   100: '#D9FBE8',
        //   200: '#B3F5D1',
        //   300: '#75EDAE',
        //   400: '#00DC82',
          500: '#FFA500',
        //   600: '#00A155',
          700: '#FA8C16',
        },
      },
      
      backgroundGradient:{
        'my-gradient':'linear-gradient(162deg, rgba(255, 255, 255, 0.10) 4.68%, rgba(255, 255, 255, 0.00) 87.99%)',
       } 
    }
  }
}
