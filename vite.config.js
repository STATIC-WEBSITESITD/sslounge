import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  optimizeDeps: {
    include: ['jquery'],
  },
  build: {
    commonjsOptions: {
      include: [/jquery/, /node_modules/],
    },
  },
})
