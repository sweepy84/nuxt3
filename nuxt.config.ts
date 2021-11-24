import { defineNuxtConfig } from 'nuxt3'

export default defineNuxtConfig({

    meta: {
        script: [
            { src: 'polyfills.js' },
        ],
    },

    alias: {
        'aws-amplify': 'aws-amplify/lib/',
    }
})
