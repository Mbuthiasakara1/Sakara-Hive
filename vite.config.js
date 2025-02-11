import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react-swc'

// https://vite.dev/config/
export default defineConfig({
  base:'./',
  plugins: [react()],
  optimizeDeps: {
    include: [
      "@mui/material",
      "@mui/icons-material",
      "@emotion/react",
      "@emotion/styled",
    ],
  },
});
