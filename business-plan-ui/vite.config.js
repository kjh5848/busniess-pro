import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  base: './', // GitHub Pages 등에서 상대 경로로 에셋을 불러오도록 설정
  build: {
    outDir: '../docs', // 빌드 결과물을 상위의 docs 폴더로 지정
    emptyOutDir: true, // 빌드 시 docs 폴더 초기화
  },
  server: {
    allowedHosts: true,
  },
})
