import react from '@vitejs/plugin-react'
import { defineConfig } from 'vite'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  // .env는 리포 루트에 둔다. VITE_ 접두사가 붙은 값만 앱에 노출된다.
  envDir: '..',
  server: {
    // 앱 밖의 ../data/*.json을 dev 서버에서 읽을 수 있게 허용
    fs: { allow: ['..'] },
  },
})
