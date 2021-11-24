import { defineNuxtPlugin } from '#app'

import { Amplify } from 'aws-amplify'
export default defineNuxtPlugin(() => {
    // if(process.client) {
    Amplify.configure({
      Auth: {
        region: 'ap-southeast-2',
        userPoolId: 'ap-southeast-2_u6YyEqzgG',
        userPoolWebClientId: '2oed8af6spfsugipkttuer5dkq',
        mandatorySignedIn: true,
      },
      API: {
        aws_appsync_graphqlEndpoint: 'https://6yn73g2itbg4dcb2bn2ggxlxrm.appsync-api.ap-southeast-2.amazonaws.com/graphql',
        aws_appsync_region: 'ap-southeast-2',
        aws_appsync_authenticationType: 'AMAZON_COGNITO_USER_POOLS',
      }
    })
  // }
})


// ToDo: Dynamically generate Amplify configurations 