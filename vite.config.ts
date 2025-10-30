import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  // DEBE ESTAR: Añade esta línea si falta o revisa que esté correcta
  base: '/', 
  plugins: [react()],
})
