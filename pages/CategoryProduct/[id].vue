<template>
<div class="container mt-1 grid grid-cols-4 gap-1 mx-auto">
<div class="w-full h-screen bg-slate-600"></div>
    <div class="col-span-3 container mt-3 grid grid-cols-4 gap-1 mx-auto">
     <div v-for="product in products" :key='product' class="w-full h-80 flex justify-items-center items-center bg-slate-400  border-2 border-teal-400 mb-2 mx-auto overflow-hidden">
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

  const url=(`https://api.escuelajs.co/api/v1/categories/${route.params.id}/products?offset=0&limit=10
`)
  const {data:products}= await useFetch(url).json()

</script>

<style scoped>

</style>