<template>
   <div class="h-fit w-fullb grid grid-rows-6 bg-slate-400 overflow-hidden">
   <div class="row-span-4 w-full m-auto overflow-hidden"><img class="w-full mx-auto hover:scale-110" :src="`${product.images[0]}`" :alt="`${product.title}`"></div>
   <div class="row-span-2"><h1 class="text-center">{{product.title}}</h1>
   <h1 class="text-center text-red-800 font-sans text-md">Price: {{product.price}}$</h1></div>
   </div>
</template>

<script setup>
const {product}=defineProps(['product'])

</script>

<style lang="scss" scoped>

</style>