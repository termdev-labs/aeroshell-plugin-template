// vite.config.ts
import { defineConfig } from "vite"
import vue from "@vitejs/plugin-vue"
import externalGlobals from "rollup-plugin-external-globals"
import { resolve } from "path"

export default defineConfig({
  plugins: [vue()],
  build: {
    lib: {
      entry: resolve(__dirname, "index.ts"),
      name: "WelcomePlugin",
      fileName: () => "index.js",
      formats: ["es"] // ✅ 必须 es，才能 import(file://)
    },
    rollupOptions: {
      external: ["vue"],
      plugins: [
        externalGlobals({
          vue: "globalThis.Vue" // ✅ import "vue" → globalThis.Vue
        })
      ]
    },
    outDir: resolve(__dirname, "dist"),
    emptyOutDir: true,
    target: "esnext"
  }
})
