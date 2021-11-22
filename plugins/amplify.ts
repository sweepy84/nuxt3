import { defineNuxtPlugin } from '#app'

import Amplify from '@aws-amplify/core'

export default defineNuxtPlugin(() => {
  // This is just here to illustrate that the plugin fails when accessed
  console.log(Amplify)
})


// ToDo: Dynamically generate Amplify configurations 