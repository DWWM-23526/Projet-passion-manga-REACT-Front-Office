import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react-swc'


export default defineConfig({
  base: "/passion-manga/",
  plugins: [react()],
  server: {
    port: 8008,
  },
})
