import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'

// https://vite.dev/config/
export default defineConfig({
  server: {
    host: true, // Allow access from browser
    watch: {
      usePolling: true, // Fix WSL file change detection
      interval: 100,    // Polling frequency
    },
  },
  plugins: [
    react(),
    tailwindcss(),
  ],
})
