<template>
    <div  class="w-11/12 h-full grid grid-cols-3 mt-8 bg-slate-100 bg-opacity-55 mx-auto rounded-xl py-2" :style="`background-image:url()`">
      <div id="sliderImageElem" class="fadeIn flex items-center overflow-hidden">
      <div id="carsoulImg" class="p-2 bg-slate-400 m-auto rounded-lg">
       <img  @mousemove="xClient" @mouseleave="DefaultImageMargin" :style="{ marginLeft:`${x}px`,marginTop:`${y}px`}" :src="slide.images[0]" class="max-w-80 w-80 max-h-80 m-auto" />
      </div>
    </div>
      
      <div class="col-span-2 h-5/6 w-11/12 m-auto grid grid-rows-4">

      <h1 class="text-right font-serif text-5xl">{{slide.title}}</h1>
     
      <p class="text-slate-600 font-thin text-left row-span-2 mt-5 ">{{slide.description}}</p>
      
      <p class="w-1/4 h-min font-sans text-center text-5xl text-red-600 shadow-sm shadow-teal-600">{{slide.price}}<span class="text-3xl">$</span></p>

      </div>
       <NuxtLink to="/"><button class="p-1 rounded-md bg-neutral-50 border-teal-400 mx-auto mt-5 hover:border-2">Home</button></NuxtLink>
    </div>
</template>

<script setup>
import { useFetch } from '@vueuse/core'


 const {id}=useRoute().params
  const productsKey=50
  const url=(`https://api.escuelajs.co/api/v1/products/${id}`)
  const {data:slide}= await useFetch(url).json()

</script>

<script>
export default {


}
</script>

<style>

</style>