import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  optimizeDeps: {
   include: ['react-i18next', 'i18next','i18next-browser-languagedetector'] 
 },
 build: {
  rollupOptions: {
        external: ['react-i18next','i18next','i18next-browser-languagedetector']
      
  }
}
})
