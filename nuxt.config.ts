import { defineNuxtConfig } from 'nuxt3'

// https://v3.nuxtjs.org/docs/directory-structure/nuxt.config
export default defineNuxtConfig({
    build: {
        transpile: ['@aws-amplify', 'aws-amplify', '@aws-sdk', 'aws-sdk']
    },
    alias: {
        '@aws-amplify/core': '@aws-amplify/core/lib-esm/index.js',
        '@aws-crypto': '@aws-crypto/sha256-js/build/index.js',
        '@aws-sdk/util-hex-encoding': '@aws-sdk/util-hex-encoding/dist/cjsf/index.js',
      }
})
