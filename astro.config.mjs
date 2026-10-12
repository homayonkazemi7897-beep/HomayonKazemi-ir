import { defineConfig } from 'astro/config';

export default defineConfig({
  devToolbar: { enabled: false },
  site: 'https://homayonkazemi.ir',
  output: 'static',
  trailingSlash: 'always',
  server: { host: '127.0.0.1', port: 4321 },
});
