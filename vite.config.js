import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import { VitePWA } from 'vite-plugin-pwa'

export default defineConfig({
  plugins: [
    react(),
    VitePWA({
      includeAssets: ['DF.png', 'favicon.svg'], 
      manifest: {
        name: 'Drop Forge',
        short_name: 'DropForge',
        description: 'Open cases and collect skins!',
        theme_color: '#6d4aff',
        background_color: '#0d0d0f',
        display: 'standalone',
        start_url: '/',
        icons: [
          { src: './public/DF.png', sizes: '192x192', type: 'image/png' },
          { src: './public/DF.png', sizes: '512x512', type: 'image/png' }
        ]
      }
    })
  ]
})
