// @ts-check
import { defineConfig } from 'astro/config';

import tailwindcss from '@tailwindcss/vite';

// https://astro.build/config
export default defineConfig({
  site: 'https://knusslab.github.io',
  base: '/ConferenceHomepage',
  vite: {
    plugins: [tailwindcss()]
  }
});