import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'
import path from 'path'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react(),
  tailwindcss()
  ],
  resolve: {
    alias: {
      '@': path.resolve(import.meta.dirname, 'src'),
      '@components': path.resolve(import.meta.dirname, 'src/components'),
      '@ui': path.resolve(import.meta.dirname, 'src/components/ui'),
      '@accordions': path.resolve(import.meta.dirname, 'src/components/ui/accordions'),
      '@alerts': path.resolve(import.meta.dirname, 'src/components/ui/alerts'),
      '@badges': path.resolve(import.meta.dirname, 'src/components/ui/badges'),
      '@breadcrumbs': path.resolve(import.meta.dirname, 'src/components/ui/breadcrumbs'),
      '@buttons': path.resolve(import.meta.dirname, 'src/components/ui/buttons'),
      '@calendar': path.resolve(import.meta.dirname, 'src/components/ui/calendar'),
      '@cards': path.resolve(import.meta.dirname, 'src/components/ui/cards'),
      '@dropdowns': path.resolve(import.meta.dirname, 'src/components/ui/dropdowns'),
      '@formfields': path.resolve(import.meta.dirname, 'src/components/ui/formfields'),
      '@modals': path.resolve(import.meta.dirname, 'src/components/ui/modals'),
      '@table': path.resolve(import.meta.dirname, 'src/components/ui/table'),
      '@pagination': path.resolve(import.meta.dirname, 'src/components/ui/pagination'),
      '@hooks': path.resolve(import.meta.dirname, 'src/hooks'),
      '@pages': path.resolve(import.meta.dirname, 'src/pages'),
      '@assets': path.resolve(import.meta.dirname, 'src/assets'),
      '@libs': path.resolve(import.meta.dirname, 'src/libs'),
    },
  },
})