<template>
    <div class="grid grid-cols-1 grid-rows-4 justify-center items-center">
<div class="row-span-3"><img class="rounded-md" :src='category.image' :alt="category.name"></div>
    <div><h1 class="text-center">{{category.name}}</h1></div>
    </div>
</template>

<script setup>
const {category}=defineProps(['category'])
console.log(category.image);
</script>

<style lang="scss" scoped>

</style>