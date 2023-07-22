import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tsconfigPaths from 'vite-tsconfig-paths'
import checker from 'vite-plugin-checker'
import * as path from 'path'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    react(),
    tsconfigPaths(),
    checker({
      typescript:true,
      eslint:{
        dev:{
          logLevel:['error'],
        },
        lintCommand: 'eslint "./src/**/*.{ts,tsx}"',
      }
    })

  ],
  resolve:{
    alias: [
      {
        find: '@',
        replacement: path.resolve(__dirname, 'src'),
      },
    ],
  },
  server:{
    host:true,
    port:3000
  },
  preview:{
    port:3000
  },
  build:{
    sourcemap:true
  },
  define:{
    global:'window'
  },
})
