import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'

// https://vite.dev/config/
export default defineConfig({
  plugins: [vue()],
  resolve: {
    alias: {
      '@': '/src', // 假设你的项目src目录位于这个路径
      // 你可以继续添加更多的别名配置
    },
  },
})
