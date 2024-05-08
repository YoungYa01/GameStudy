import {defineConfig, loadEnv, UserConfig} from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from "tailwindcss";
import autoprefixer from "autoprefixer";


// https://vitejs.dev/config/


export default (config: UserConfig) => {

  const {mode} = config;

  return defineConfig({
    plugins: [react()],
    css: {
      postcss: {
        plugins: [tailwindcss, autoprefixer],
      },
    },
    server: {
      proxy: {
        '/api': {
          target: loadEnv(mode!, process.cwd()).VITE_APP_API_BASE_URL,
          changeOrigin: true,
          rewrite: (path) => path.replace(/^\/api/, '')
        }
      },
      port: 3000,
    },
    resolve: {
      alias: {
        '@': '/src'
      }
    },
    build: {
      cssCodeSplit: true,
    }
  })

}
