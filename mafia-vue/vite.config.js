import { defineConfig, loadEnv } from 'vite'
import vue from '@vitejs/plugin-vue'
import Components from 'unplugin-vue-components/vite'
import { BootstrapVueNextResolver } from 'bootstrap-vue-next/resolvers'

export default defineConfig(({ mode }) => {
  // API_PROXY_TARGET (no VITE_ prefix, so it never reaches the client bundle)
  // points the dev and preview /api proxy at the express backend.
  const env = loadEnv(mode, process.cwd(), '')
  const apiProxy = {
    '^/api': {
      target: env.API_PROXY_TARGET || 'http://localhost:3000',
      ws: true,
      changeOrigin: true
    }
  }
  return {
    plugins: [
      vue(),
      Components({
        resolvers: [BootstrapVueNextResolver()]
      })
    ],
    server: {
      port: 8082,
      proxy: apiProxy
    },
    preview: {
      proxy: apiProxy
    }
  }
})
