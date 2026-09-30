import react from '@vitejs/plugin-react'
import { defineConfig } from 'vite'
<<<<<<< HEAD

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
=======
import tailwindcss from '@tailwindcss/vite'


// https://vite.dev/config/
export default defineConfig({
  plugins: [react(),tailwindcss(),
],
>>>>>>> b35adefc21cf5e1eacb3cea5191aeef77e137c03
})
