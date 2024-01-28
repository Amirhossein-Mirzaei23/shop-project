<template>
  <Carousel v-bind="settings" :breakpoints="breakpoints">
    <Slide v-for="slide in products" :key="slide">
      <div class="carousel__item bg-slate-300 w-11/12 mt-5 h-96 bg-opacity-50 ml-2 rounded-2xl -z-10">
         <indexslideshow  :slide=slide />
       </div>
    </Slide>

    <template #addons>
      <Pagination />
      <Navigation />
    </template>
  </Carousel>
  
</template>

<script>
import { defineComponent } from 'vue'
import { Carousel, Navigation, Slide, Pagination } from 'vue3-carousel'
import 'vue3-carousel/dist/carousel.css'
import Slider from '~/components/indexslideshow.vue'
export default defineComponent({
  name: 'ExamplePagination',
  components: {
    Pagination,
    Carousel,
    Slide,
    Navigation,
    Slider,
  },
  data: () => ({
    // carousel settings
    settings: {
      itemsToShow: 1,
      snapAlig:'center'
    },
    // breakpoints are mobile first
    // any settings not specified will fallback to the carousel settings
    breakpoints: {
      // 700px and up
      700: {
        itemsToShow: 3.5,
        snapAlign: 'center',
      },
      // 1024 and up
      1024: {
        itemsToShow: 1,
        snapAlign: 'start',
      },
    },
  }),
})
</script>


<script setup>
import { useFetch } from '@vueuse/core'

useHead({
     titleTemplate:"%s - landing Page"
})


  const url=('https://api.escuelajs.co/api/v1/products?offset=6&limit=10')
  const {data:products}= await useFetch(url).json()




//  const qury='products'
//  const url=`/api/${qury}`
//  const {data:products} = await useFetch(`/api/products`).json()
//  const {data:products} = await useAsyncData(()=>useFetch(`/api/${qury}`,{
//    method:'Get'
//  }))
//  const {data:products} = await useAsyncData('products', () => ($fetch(`/api/${qury}`)))
</script>

<style lang="scss" scoped>

</style>