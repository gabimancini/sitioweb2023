import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      borderColor:{
      'footer': 'rgba(255, 255, 255, 0.20)'
      },
      boxShadow: {
        'services_shadow': '0px 4px 4px 0px rgba(0, 0, 0, 0.25)',
      },
      colors: {
        "main_blue": "#172C63",
        "main_black": "#1D2130",
        "red": "#FF0A0A",
        'mission_blue': "rgba(52, 45, 175, 0.40)",
        "mission_green": "rgba(23, 138, 158,0.4)",
        "mission_ligth_green": "#rgba(30, 188, 202, 0.4)",
        "mission_text": "#015F67",
        "services_blue" : "#B9D5FF",
        "services_ligth_blue": "rgba(185, 213, 255, 0.00)",
        "service_text": "rgba(20, 20, 43, 0.60)",
        "footer_bottom": "rgba(0, 0, 0, 0.50)",
        "bg_text": "rgba(90, 90, 195, 0.10)",
        "bg_newsletter_input": "#2B2E3C"
      },
      backgroundImage: {
        'hero_bg': "url('/images/hero_bg.svg')",
        'hero_bg_desk': "url('/images/hero_bg_desk.svg')"
      },
      gradientColorStopPositions: {
        45: '45%',
      },
      height: {
        'hero_desktop': '730px',
        'hero_mobile': '500px'
      },
      backgroundColor: {
        'hero_opacity': "rgba(0, 0, 0, 0.55)",
        'btn_call': '#1EBCCA',
        'mission_card': 'rgba(255, 255, 255, 0.50)'
      },
      fontSize: {
        'h1': '68px'
      },
      borderRadius: {
        'btn_call': '8px'
      },
      zIndex: {
        'hero': '1',
        'hero_opacity': '-1'
      }
    },
  },
  plugins: [],
}
export default config
