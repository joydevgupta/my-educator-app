import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// https://vite.dev/config/
// "command" can be 'serve' or 'build', and "mode" can be 'development' or 'production' by default
export default defineConfig(({ command, mode }) => {
  return {
    plugins: [react()],
    base: mode === 'production' ? '/my-educator-app/' : '/',
    // ...other config
  };
});
