// vite.config.ts
import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// "command" can be 'serve' or 'build', "mode" can be 'development' or 'production'
export default defineConfig(({ mode }) => {
  return {
    base: mode === 'production' ? '/my-educator-app/' : '/',
    build: {
      outDir: 'dist', // Revert back to dist for gh-pages deployment
    },
    plugins: [react()],
  };
});
