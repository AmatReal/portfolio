import { defineConfig } from 'astro/config';

import tailwindcss from '@tailwindcss/vite';

export default defineConfig({
  // ← cambia esto
  site: 'https://amatreal.github.io',

  // ← cambia esto
  base: '/portfolio',

  output: 'static',

  vite: {
    plugins: [tailwindcss()],
  },
});