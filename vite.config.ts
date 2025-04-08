import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import { visualizer } from 'rollup-plugin-visualizer';

export default defineConfig(({ mode }) => {
  return {
    base: mode === 'production' ? '/my-educator-app/' : '/',
    build: {
      outDir: 'dist',
      rollupOptions: {
        output: {
          manualChunks: {
            'react-vendor': ['react', 'react-dom'],
            'mui-vendor': ['@mui/material', '@mui/icons-material'],
          },
        },
      },
      chunkSizeWarningLimit: 500,
    },
    plugins: [
      react(),
      visualizer({
        filename: './dist/stats.html',
        template: 'treemap',
        open: true,
      }),
    ],
  };
});
