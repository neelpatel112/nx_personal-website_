import { defineConfig } from 'astro/config';
import react from '@astrojs/react';

export default defineConfig({
  integrations: [react()],
  vite: {
    css: {
      preprocessorOptions: {
        scss: {
          silenceDeprecations: ['legacy-js-api'],
          additionalData: `@use "/src/styles/_variables.scss" as *; @use "/src/styles/_mixins.scss" as *;`
        }
      }
    },
    resolve: {
      alias: {
        '@components': '/src/components',
        '@styles': '/src/styles',
        '@data': '/src/data',
        '@types_': '/src/types'
      }
    }
  }
});