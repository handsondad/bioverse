import { defineConfig } from 'vite';

export default defineConfig({
  base: './',
  server: {
    watch: { ignored: ['**/.story-preview/**'] },
  },
  build: {
    outDir: 'dist',
    // Three.js stays one lazy vendor chunk (~602 kB) loaded only by the home planet; the 3D labs are standalone iframes.
    chunkSizeWarningLimit: 650,
  },
});
