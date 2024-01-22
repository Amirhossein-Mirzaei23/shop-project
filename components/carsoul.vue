<template>
  <Carousel v-bind="settings" :breakpoints="breakpoints">
    <Slide v-for="slide in products" :key="slide">
      <div class="carousel__item bg-slate-300 w-11/12 mt-5 h-96 bg-opacity-50 ml-2 rounded-2xl">
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
   /// title:"Work Page"
     titleTemplate:"%s - landing Page"
})

//  const number = ref(20)
//  const  {data:products}= await $fetch('https://dummyjson.com/products'); 
//  const qury='products'
  const url=('https://api.escuelajs.co/api/v1/products?offset=6&limit=16')
  const {data:products}= await useFetch(url).json()


//    const qury='products'
//    const url=`/api/${qury}`
//   const {data:products} = await useFetch(`/api/products`).json()


 //  console.log(url);
 // const {data:products} = await useAsyncData(()=>useFetch(`/api/${qury}`))
 // const {data:products, pending, error, refresh} = await useAsyncData('products', () => ($fetch(`/api/${qury}`)))
 // const produc=(()=> products).json()
 // console.log(produc);

//  console.log(products);
//////////////////////////////////////////////////////////////////////////////
//     const number = ref(8)
//     const {data:products, pending, error, refresh} = await useAsyncData('products', () => $fetch(`/api/products?limit=${number.value}`))



//
// const {data:products}=$fetch(`https://dummyjson.com/products/1`)
//    function a(){
//    $fetch('https://dummyjson.com/products/1').then(console.log);
//    //.then(res => res.json())
//    
//     }
//     a()

</script>

<style lang="scss" scoped>

</style>