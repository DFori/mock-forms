import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import federation from '@originjs/vite-plugin-federation'


export default defineConfig({
  plugins: [
    react(),
    federation({
      name: 'shell',
      remotes: {
        adminApp: 'http://localhost:3001/assets/remoteEntry.js',
        workflowApp: 'http://localhost:3002/assets/remoteEntry.js',
      },
      shared: {
        react: {
          singleton: true,
          requiredVersion: '^18.0.0',
        },
        'react-dom': {
          singleton: true,
          requiredVersion: '^18.0.0',
        },
        'react-router-dom': {
          singleton: true,
        },
        'antd': {
          singleton: true,
        },
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