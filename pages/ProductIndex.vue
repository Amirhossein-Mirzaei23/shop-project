<template>
    <div>
     <div v-for="product in products" :key='product' class="p-4 bg-slate-400 mb-2">
      <prod :product=product />
      </div>
    </div>
</template>

<script setup>
import { useFetch } from '@vueuse/core'

useHead({
     titleTemplate:"%s - Products"
})

  const url=('https://api.escuelajs.co/api/v1/categories/1/products')
  const {data:products}= await useFetch(url).json()

</script>

<style scoped>

</style>