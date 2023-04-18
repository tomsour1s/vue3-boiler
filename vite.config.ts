import { URL, fileURLToPath } from 'node:url'

import { defineConfig } from 'vite'
import Vue from '@vitejs/plugin-vue'

// https://github.com/antfu/unplugin-vue-components
import Components from 'unplugin-vue-components/vite'

// https://vue-macros.sxzz.moe/features/reactivity-transform.html
import ReactivityTransform from '@vue-macros/reactivity-transform/vite'

// https:// github.com/antfu/unplugin-auto-import
import AutoImport from 'unplugin-auto-import/vite'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    Vue(),
    ReactivityTransform(),
    Components({}),
    AutoImport({
      imports: [
        'vue',
        'vue/macros',
      ],
    }),
  ],
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url)),
    },
  },
})
