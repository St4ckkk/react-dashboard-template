import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'
import path from 'path'

export default defineConfig({
  plugins: [react(), tailwindcss()],
  resolve: {
    alias: {
      '@': path.resolve(__dirname, 'src'),
      '@components': path.resolve(__dirname, 'src/components'),
      '@ui': path.resolve(__dirname, 'src/components/ui'),
      '@accordions': path.resolve(__dirname, 'src/components/ui/accordions'),
      '@alerts': path.resolve(__dirname, 'src/components/ui/alerts'),
      '@badges': path.resolve(__dirname, 'src/components/ui/badges'),
      '@breadcrumbs': path.resolve(__dirname, 'src/components/ui/breadcrumbs'),
      '@buttons': path.resolve(__dirname, 'src/components/ui/buttons'),
      '@calendar': path.resolve(__dirname, 'src/components/ui/calendar'),
      '@cards': path.resolve(__dirname, 'src/components/ui/cards'),
      '@dropdowns': path.resolve(__dirname, 'src/components/ui/dropdowns'),
      '@formfields': path.resolve(__dirname, 'src/components/ui/formfields'),
      '@modals': path.resolve(__dirname, 'src/components/ui/modals'),
      '@table': path.resolve(__dirname, 'src/components/ui/table'),
      '@pagination': path.resolve(__dirname, 'src/components/ui/pagination'),
      '@hooks': path.resolve(__dirname, 'src/hooks'),
      '@pages': path.resolve(__dirname, 'src/pages'),
      '@assets': path.resolve(__dirname, 'src/assets'),
      '@libs': path.resolve(__dirname, 'src/libs'),
      '@routes': path.resolve(__dirname, 'src/routes'),
    },
  },
  build: {
    rollupOptions: {
      output: {
        manualChunks: undefined,
      },
    },
  },
})
