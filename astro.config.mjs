import { defineConfig } from 'astro/config';
import tailwindcss from '@tailwindcss/vite';

// `site` is intentionally unset until the domain is confirmed.
export default defineConfig({
  vite: { plugins: [tailwindcss()] },
});
