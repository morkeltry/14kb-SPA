import { defineConfig } from 'vite';
import preact from '@preact/preset-vite';

export default defineConfig({
  plugins: [preact()],
  build: {
    outDir: 'build',
    assetsInlineLimit: 1024*14, // Force inline assets under 14KB
  }
});
