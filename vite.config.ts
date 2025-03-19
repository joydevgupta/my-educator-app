import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import { visualizer } from 'rollup-plugin-visualizer';

// "command" can be 'serve' or 'build', "mode" can be 'development' or 'production'
export default defineConfig(({ mode }) => {
  return {
    base: mode === 'production' ? '/my-educator-app/' : '/',
    build: {
      outDir: 'dist', // Revert back to dist for gh-pages deployment
    },
    plugins: [
      react(),
      // Add the visualizer plugin
      visualizer({
        filename: './dist/stats.html', // stats file location
        template: 'treemap', // or "sunburst", "network", etc.
        open: true, // auto-open stats.html after build
      }),
    ],
  };
});
