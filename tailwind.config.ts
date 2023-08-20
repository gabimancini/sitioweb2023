import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      backgroundImage: {
        'hero_bg': "url('/images/hero_bg.svg')"
      },
      height: {
        'hero_desktop': '730px',
        'hero_mobile': '500px'
      },
      backgroundColor: {
        'hero_opacity': "rgba(0, 0, 0, 0.55)",
        'btn_call': '#1EBCCA'
      },
      fontSize: {
        'h1': '68px'
      },
      borderRadius: {
        'btn_call': '35px'
      }
    },
  },
  plugins: [],
}
export default config
