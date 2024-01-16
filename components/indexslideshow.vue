<template>
    <div class="w-full h-full grid grid-cols-3" :style="`background-image:url(${تست})`">
      <div id="sliderImageElem" class=""><img class=" rounded-2xl mx-auto mt-3" :src="slide.image" width="250px"></div>
      <div class="col-span-2">
      <h1>{{slide.title}}</h1>
      <br>
      <p>{{slide.description}}</p>
      </div>
    </div>
</template>

<script setup>
const {data:slide}=defineProps(['slide'])
console.log(slide);
</script>

<style scoped>
.backgroundImg{

    background-size: cover;
    background-color: aquamarine;
}
</style>