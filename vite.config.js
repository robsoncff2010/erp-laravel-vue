import { defineConfig } from 'vite';
import laravel from 'laravel-vite-plugin';
import vue from '@vitejs/plugin-vue';

export default defineConfig({
  server: {
    host: '0.0.0.0',
    port: 5173,
    origin: 'http://localhost:5173',
    cors: true,
  },
  plugins: [
    laravel({
      input: [
        'resources/css/app.css',
        'resources/js/app.js',
        'resources/js/pages/auth/login.js',
      ],
      refresh: true,
    }),
    vue(),
  ],
});