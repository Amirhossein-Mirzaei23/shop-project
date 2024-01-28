<template>
<h1>{{singles}}</h1>
    <div>
  <single :single=singles />
    </div>
</template>

<script setup>
import { useFetch } from '@vueuse/core'
let route=useRoute()
const url=(`https://api.escuelajs.co/api/v1/products/${route.params.id}`)
const {data:singles}=await useFetch(url).json()

</script>

<style lang="scss" scoped>

</style>