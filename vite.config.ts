import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  base: '/email-editor/', // Para GitHub Pages: https://<usuario>.github.io/email-templates/
})
