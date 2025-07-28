import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  base: '/blessing-pages/', // ← 填你的仓库名
  plugins: [react()],
})

