import { defineNuxtConfig } from 'nuxt3'
// import { resolve } from 'pathe'

export default defineNuxtConfig({

    vite: {
        resolve: {
            alias: {
                // Required to build as per https://github.com/aws-amplify/amplify-ui/issues/268#issuecomment-953375909
                './runtimeConfig': './runtimeConfig.browser',
            },
        },
    },
    meta: {
        script: [
            { src: 'polyfills.js' },
        ],
    },

    alias: {
        // 'aws-amplify': 'aws-amplify/lib/', 
        '@aws-amplify/core': '@aws-amplify/core/lib',
        '@aws-amplify/auth': '@aws-amplify/auth/lib',
    }
})
