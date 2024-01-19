<template>
  <Carousel v-bind="settings" :breakpoints="breakpoints">
    <Slide v-for="slide in products" :key="slide">
      <div class="carousel__item bg-slate-300 w-11/12 mt-5 h-96 bg-opacity-50 ml-2">
         <indexslideshow :slide=slide />
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

const number = ref(20)
//const  {data:products}= await $fetch('https://dummyjson.com/products');
const url=('https://api.escuelajs.co/api/v1/products')
 const {data:products}= useFetch(url).json()


//
// const {data:products}=$fetch(`https://dummyjson.com/products/1`)
//    function a(){
//    $fetch('https://dummyjson.com/products/1').then(console.log);
//    //.then(res => res.json())
//    
//     }
//     a()
  setTimeout(() => {
  console.log(products);
  },3000);

let landingSlider=[
{
number:1,
img:`https://golekhune.com/uploads/products/ea8101.jpg`,
title:'title',
description:'amir & nazi'

},
{
number:1,
img:`https://mihancactus.com/wp-content/uploads/2019/03/%DA%AF%D9%84-%D8%B3%D8%A7%D8%B9%D8%AA%DB%8C.jpg`,
title:'title',
description:'amir & nazi'

},
{
number:1,
img:`../assets/images/floral-bg.jpg`,
title:'title',
description:'amir & nazi'

},

]


</script>

<style lang="scss" scoped>

</style>