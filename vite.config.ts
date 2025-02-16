import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  base: "/S25214-Site/",
  optimizeDeps: {
    exclude: ['lucide-react'],
  },
});
