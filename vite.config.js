import { defineConfig } from 'vite'
import { resolve } from "path"
import vue from '@vitejs/plugin-vue'

function pathResolve(dir) {
  return resolve(__dirname, ".", dir)
}

// https://vitejs.dev/config/
export default defineConfig({
  base: "",
  plugins: [vue()],
  resolve: {
    alias: [
      {
        find: '@',
        replacement: pathResolve('src') + '/',
      },
    ],
    // dedupe: ['vue'],

  },
  build: {
    target: "modules",
    outDir: "dist",
    assetsDir: "assets",
    minify: "terser"
  }
})
