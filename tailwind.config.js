// File: tailwind.config.js

/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      // استفاده از متغیرهای CSS برای انعطاف‌پذیری آینده
      colors: {
        'background': 'var(--color-background)',
        'off-white': 'var(--color-off-white)',
        'surface': 'var(--color-surface)',
        'text-primary': 'var(--color-text-primary)',
        'text-secondary': 'var(--color-text-secondary)',
        'text-on-dark': 'var(--color-text-on-dark)',
        'accent-gold': 'var(--color-accent-gold)',
        'accent-red': 'var(--color-accent-red)',
        'border-color': 'var(--color-border)',
      },
      fontFamily: {
        'cormorant': ['Cormorant Garamond', 'serif'],
        'vazirmatn': ['Vazirmatn', 'sans-serif'],
      },
      animation: {
        'fade-in': 'fadeIn 1s ease-out',
        'fade-in-up': 'fadeInUp 0.8s ease-out forwards',
      },
      keyframes: {
        fadeIn: {
          'from': { opacity: '0' },
          'to': { opacity: '1' },
        },
        fadeInUp: {
          'from': { opacity: '0', transform: 'translateY(20px)' },
          'to': { opacity: '1', transform: 'translateY(0)' },
        },
      },
    },
  },
  // برای ایجاد aspect ratio مربعی در گالری، این پلاگین را اضافه کنید
  // ابتدا با دستور `npm install -D @tailwindcss/aspect-ratio` آن را نصب کنید
  plugins: [
    require('@tailwindcss/aspect-ratio'),
  ],
}
