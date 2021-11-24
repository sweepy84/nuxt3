import { defineNuxtConfig } from 'nuxt3'

export default defineNuxtConfig({

    meta: {
        script: [
          { src: 'polyfills.js'},
        ],
       },

    build: {
        transpile: [
            // '@aws-amplify',
            // 'aws-amplify',
            // '@aws-amplify/*',
            // '@aws-amplify/*/',
            // '@aws-amplify/core',
            // '@aws-amplify/core/',
            // '@aws-amplify/core/*',
            // '@aws-amplify/core/lib-esm/',
            // '@aws-amplify/core/lib-esm/*',
            '@aws-amplify/auth',
            '@aws-amplify/auth/',
            '@aws-amplify/api-rest',
            '@aws-amplify/pubsub',
            '@aws-amplify/credential-provider-imds',
            '@aws-amplify/credential-provider-node',
            // '@aws-amplify/core/@aws-crypto',
            // '@aws-amplify/*/@aws-crypto',
            // '@aws-crypto/*',
            '@aws-sdk',
            'tslib',
            'graphql',

        ]
    },
    alias: {
        'aws-amplify': 'aws-amplify/lib/',
        '@aws-amplify/core': '@aws-amplify/core/lib/',
        '@aws-amplify/auth': '@aws-amplify/auth/lib/',
        '@aws-amplify/cache': '@aws-amplify/cache/lib/',
        '@aws-amplify/storage': '@aws-amplify/storage/lib/',
        '@aws-amplify/analytics': '@aws-amplify/analytics/lib/',
        '@aws-amplify/api': '@aws-amplify/api/lib/',
        '@aws-amplify/api-rest': '@aws-amplify/api-rest/lib/',
        '@aws-amplify/api-graphql': '@aws-amplify/api-graphql/lib/',
        '@aws-amplify/datastore': '@aws-amplify/datastore/lib/',
        '@aws-amplify/pubsub': '@aws-amplify/pubsub/lib/',
        '@aws-amplify/predictions': '@aws-amplify/predictions/lib/',
        '@aws-amplify/interactions': '@aws-amplify/interactions/lib/',
        '@aws-amplify/geo': '@aws-amplify/geo/lib/',
        '@aws-amplify/xr': '@aws-amplify/xr/lib/',

        '@aws-sdk/credential-provider-node': '@aws-sdk/credential-provider-node/dist/cjs/',
        
        
        // '@aws-sdk/client-pinpoint': '@aws-sdk/client-pinpoint/dist/cjs/',
        // '@aws-sdk/client-s3': '@aws-sdk/client-s3/dist/cjs/',
        // '@aws-sdk/property-provider': '@aws-sdk/property-provider/dist/cjs/',
        // '@aws-sdk/**': '@aws-sdk/**/cjs/',

        // '@aws-amplify/core': '@aws-amplify/core/lib/index.js',
        // '@aws-amplify/auth': '@aws-amplify/auth/lib/index.js',
        // '@aws-amplify/analytics': '@aws-amplify/analytics/lib/index.js',
        // '@aws-crypto': '@aws-crypto/sha256-browser/',
        // '@aws-sdk/client-pinpoint': '@aws-sdk/client-pinpoint/dist/cjs/index.js',
        // '@aws-sdk/client-s3': '@aws-sdk/client-s3/dist/cjs/index.js',
    }
})
