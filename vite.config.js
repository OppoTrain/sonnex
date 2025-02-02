import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  optimizeDeps: {
   include: ['react-i18next', 'i18next'] 
 },
 build: {
  rollupOptions: {
        external: ['i18next']
      
  }
}
})
