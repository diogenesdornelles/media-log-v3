import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import eslint from 'vite-plugin-eslint';

// https://vitejs.dev/config/
export default defineConfig({
  base: '/media-log-v3',
  plugins: [react(), eslint()],
  build: {
    sourcemap: true,
  },
});
