// export default defineNuxtPlugin((nuxtApp) => {

// })

// import this after install `@mdi/font` package
import '@mdi/font/css/materialdesignicons.css'
// import { defineNuxtPlugin } from '#app'

import 'vuetify/styles';
import { createVuetify } from 'vuetify'
import { md3 } from 'vuetify/blueprints'

import * as components from 'vuetify/components' 
import * as directives from 'vuetify/directives' 


export default defineNuxtPlugin((nuxtApp) => {
  const vuetify = createVuetify({
    ssr: true,
    blueprint: md3,
    components,
    directives,
    icons:{
      defaultSet: 'mdi'
    }
  })
  nuxtApp.vueApp.use(vuetify)
})

