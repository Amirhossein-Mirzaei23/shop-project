// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  modules: [
    'vue3-carousel-nuxt',
    '@vueuse/nuxt',
   

  ],
  css: ['~/assets/css/main.css','animate.css/animate.min.css'],
  postcss: {
    plugins: {
      tailwindcss: {},
      autoprefixer: {},
    },
  },
  app:{
    head:{
      title :"Shop",
    script:[
      {src:"toastr.js"}
    ],
      link:[
        {rel:'stylesheet',href:"node_modules/@glidejs/glide/dist/css/glide.core.min.css"},
        {rel:"stylesheet",href:"toastr.css"}
      ],

    }
  }
})

