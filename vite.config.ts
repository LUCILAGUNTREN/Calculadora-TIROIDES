import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  // Añadir esta línea:
  base: '/', 
  plugins: [react()],
})
