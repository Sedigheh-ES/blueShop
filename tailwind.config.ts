import type { Config } from 'tailwindcss';
const { fontFamily } = require("tailwindcss/defaultTheme");

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {  
    extend: {
      fontFamily: {
        lato: ['var(--font-lato)'],
         montserrat: ["Montserrat", ...fontFamily.sans],
     }
    },
    fontSize: {
      head1: [
        '48px', {
          lineHeight: '150%',
          fontWeight: 'bold',        
        }
      ],
      head2: [
        '36px',
        {
          lineHeight: '150%',
          fontWeight: 'bold',    
        }
      ],
      head3: [
        '20px',
        {
          lineHeight: '150%',
          fontWeight: 'bold',    
        }
      ]

  
    },
    colors: {
      blue_main: '#438DB8',
      dark_header: '#666666',
      dark_charcoal: '#333333',
      red_badge: '#D72A48',
      bg_light_green: '#E5EFEB',
      stroke_light_green: '#F9F9F9',
     
    
    },
    container: {
      center: true,
      padding: '1.5rem',
      screens: {
        sm: '375px',
        md: '744px',
        lg: '1024px',
        xl: '1440px',
        '2xl': '1632px'
      }
    }
    
  },
  plugins: [],
}
export default config
