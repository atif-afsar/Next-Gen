import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react(), tailwindcss()],
  optimizeDeps: {
    include: ['motion/react', 'react-helmet-async', '@splinetool/react-spline', '@splinetool/runtime'],
  },
  build: {
    target: 'es2020',
    cssCodeSplit: true,
    sourcemap: false,
    rollupOptions: {
      output: {
        manualChunks(id) {
          if (id.includes('node_modules')) {
            if (id.includes('@splinetool')) return 'spline'
            if (id.includes('motion')) return 'motion'
            if (id.includes('react-router')) return 'router'
            if (id.includes('react-dom') || id.includes('react/')) return 'react-vendor'
            if (id.includes('react-helmet')) return 'helmet'
          }
        },
      },
    },
  },
})
