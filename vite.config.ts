import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import tailwindcss from 'tailwindcss';

// https://vitejs.dev/config/
export default defineConfig({
  server: {
    port: 3100,
    hmr: {
      clientPort: 443
    }
  },
  plugins: [vue(),tailwindcss()]
})
