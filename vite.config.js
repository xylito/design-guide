import { defineConfig } from 'vite';

export default defineConfig({
  build: {
    target: 'esnext',
    cssCodeSplit: true,
    chunkSizeWarningLimit: 600,
    rollupOptions: {
      output: {
        manualChunks(id) {
          if (id.includes('theme-ko.js')) {
            return 'theme-ko';
          }
          if (id.includes('design-md-map.js')) {
            return 'design-md-map';
          }
        }
      }
    }
  }
});
