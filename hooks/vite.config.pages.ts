// vite.config.pages.ts
import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react-swc';

export default defineConfig({
  base: '/react-modules/', // GitHub Pages용 base 경로
  plugins: [react()],
  build: {
    outDir: 'dist-pages'
  }
});
