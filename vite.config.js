import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  base: './',
  plugins: [react()],
  server: { port: 1234, strictPort: true },
  preview: { port: 1234, strictPort: true },
})
