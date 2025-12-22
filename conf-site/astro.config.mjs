// @ts-check
import { defineConfig } from 'astro/config';

import tailwindcss from '@tailwindcss/vite';

// https://astro.build/config
const isProd = process.env.NODE_ENV === 'production';

export default defineConfig({
  site: 'https://dsa04156.github.io',
  base: isProd ? '/ConferenceHomepage/' : '/',
  vite: {
    plugins: [tailwindcss()]
  }
});
