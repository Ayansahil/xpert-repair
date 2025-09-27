import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  build: {
    rollupOptions: {
      output: {
        manualChunks(id) {
          // Grouping vendor libraries into separate chunks for better caching.
          if (id.includes('node_modules')) {
            if (id.includes('react-router-dom') || id.includes('react-dom') || id.includes('react')) {
              return 'react-vendor';
            }

            if (id.includes('framer-motion')) {
              return 'framer-vendor';
            }

            // All other node_modules go into a general vendor chunk.
            return 'vendor';
          }
        },
      },
    },
    // Recommended for performance: enables smaller chunks and better caching.
    chunkSizeWarningLimit: 1000,
  },
});