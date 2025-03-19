import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import { visualizer } from 'rollup-plugin-visualizer';

export default defineConfig(({ mode }) => {
  return {
    base: mode === 'production' ? '/my-educator-app/' : '/',
    build: {
      outDir: 'dist', // Keeps deployment structure intact
      rollupOptions: {
        output: {
          manualChunks: {
            'react-vendor': ['react', 'react-dom'], // Splits React-related code
            'mui-vendor': ['@mui/material', '@mui/icons-material'], // Splits Material UI
            'utility-vendor': ['lodash', 'date-fns'], // Example: Splitting utility libraries (add others if needed)
          },
        },
      },
      chunkSizeWarningLimit: 500, // Adjusts warning threshold
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
