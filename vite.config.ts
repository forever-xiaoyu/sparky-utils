import { fileURLToPath, URL } from 'node:url'
import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'

const mode = process.env.NODE_ENV

// https://vite.dev/config/
export default defineConfig({
  plugins: [vue()],

  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url)),
    },
  },

  build: {
    rollupOptions: {
      input: mode == 'development' ? './src/main.ts' : './src/index.ts',
      external: ['vue'],
      output: {
        globals: {
          vue: 'Vue',
        },
      },
    },
    lib: {
      entry: './src/index.ts', // 入口文件
      name: 'sparkyie/sparky-vue',
      fileName: 'sparkyie-vue',
      formats: ['es'],
    }
  },

  server: {
    port: 5173,
    // 反向代理
    proxy: {
      '/api': {
        // target: 'http://192.168.0.253:15000/', // test环境
        changeOrigin: true,
        rewrite: (path) => path.replace(/^\/api/, ''),
      },
    },
    // 是否自动在浏览器打开
    open: false,
    // 是否开启 https
    https: false,
    host: '0.0.0.0',
  },
})
