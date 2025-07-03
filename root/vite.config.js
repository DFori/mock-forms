// root/vite.config.js
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import federation from '@originjs/vite-plugin-federation'
import path from 'path'

const isProd = process.env.NODE_ENV === 'production'

export default defineConfig({
  base: '/root/',
  resolve: {
    alias: {
      adminApp: path.resolve(__dirname, '../admin/src'),
      PremiumAdjustmentApp: path.resolve(__dirname, '../premium-adjustment/src'),
    },
  },
  plugins: [
    react(),
    federation({
      name: 'shell',
      remotes: {
        adminApp: isProd
          ? '/admin/assets/remoteEntry.js'
          : 'http://localhost:3001/assets/remoteEntry.js',
        workflowApp: isProd
          ? '/premium-adjustment/assets/remoteEntry.js'
          : 'http://localhost:3002/assets/remoteEntry.js',
      },
      shared: {
        react: { singleton: true, requiredVersion: '^18.0.0' },
        'react-dom': { singleton: true, requiredVersion: '^18.0.0' },
        'react-router-dom': { singleton: true },
        antd: { singleton: true },
      },
    }),
  ],
  build: {
    modulePreload: false,
    target: 'esnext',
    minify: false,
    cssCodeSplit: false,
  },
  server: {
    port: 3000,
  },
  preview: {
    port: 3000,
    cors: true,
  },
})
