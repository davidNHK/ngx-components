/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./cypress/**/*.ts', './projects/ngx-components/**/*.{ts,html}'],
  presets: [require('@busybox/tailwindcss-config')],
};
