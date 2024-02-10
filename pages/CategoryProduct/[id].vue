<template>
<div class="container mt-1 grid grid-cols-4 gap-3 mx-auto">
<product-filter :amit="amit" ></product-filter>
    <div class="col-span-3 container mt-3 grid grid-cols-4 gap-1 mx-auto">
     <div v-for="product in products" :key='product' class="w-full h-80 flex justify-items-center items-center bg-slate-300 bg-opacity-80 rounded-3xl p-2 hover:scale-95 duration-500  border-2 border-teal-400 mb-2 mx-auto overflow-hidden">
      <prod :product=product />
      </div>
    </div>
    </div>
</template>

<script setup>
import { useFetch } from '@vueuse/core'
let route=useRoute()
useHead({
     titleTemplate:"%s - Products"
})
const prop = defineProps(['id'])

  const url=(`https://api.escuelajs.co/api/v1/categories/${route.params.id}/products?offset=0&limit=10`)
 //const url=(`https://api.digikala.com/v1/categories/apparel/`)
  const {data:products}= await useFetch(url).json()

</script>

<style scoped>

</style>