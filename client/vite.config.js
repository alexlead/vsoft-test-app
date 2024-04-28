import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'

// https://vitejs.dev/config/
export default defineConfig({  
  runtimeCompiler: true,
  resolve: {
    alias: {
      vue: 'vue/dist/vue.esm-bundler.js'
    }
  },

  plugins: [vue()],

  server: {
    proxy: {
      '/api': {
        target: 'http://localhost:5335',
        changeOrigin: true,
        secure: false,
      },
    },
  },
})
