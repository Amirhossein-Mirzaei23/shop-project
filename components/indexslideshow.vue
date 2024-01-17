<template>
    <div class="w-full h-full grid grid-cols-3" :style="`background-image:url(${تست})`">
      <div id="sliderImageElem" class=""><img class="rounded-2xl mx-auto mt-3 animate__animated  animate__backInDown animate__slow" :src="slide.image" width="250px"></div>
      <div class="col-span-2 h-5/6 w-11/12 m-auto">
      <h1 class="text-right">{{slide.title}}</h1>
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