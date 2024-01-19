<template>
    <div class="w-full h-full grid grid-cols-3" :style="`background-image:url()`">
      <div id="sliderImageElem" class="fadeIn flex items-center overflow-hidden">
    <img id="carsoulImg" @mousemove="dynamicScale" :src="slide.images[0]" class="max-w-80 w-80 max-h-80 m-auto" />
      </div>
      
      <div class="col-span-2 h-5/6 w-11/12 m-auto">
      <h1 class="text-right">{{slide.title}}</h1>
      <br>
      <p>{{slide.description}}</p>
      <p>{{slide.price}}</p>
      </div>
    </div>
</template>

<script setup>
import { ref, watch } from 'vue'



const {slide}=defineProps(['slide'])
console.log(slide);

let x=0
let y=ref(0)
let color='red'
 let carsoulImg= document.getElementById("carsoulImg")

function dynamicScale(event){
   x=event.clientX;
   y=event.clientY; 

console.log(x);

return{x,y}

}


watch(x,(newX)=>{
  console.log(newX);
})

setTimeout(() => {
  console.log(x);
}, 5000);
</script>

<style scoped>
#carsoulImg{
  background-color: v-bind(color);
}

.backgroundImg{

    background-size: cover;
    background-color: aquamarine;
}

.fadeIn:hover{
  animation: fadeIn 500ms linear 1;
  opacity: .55;
  cursor: pointer;
}
@keyframes fadeIn {
  0%{
opacity: 1;
  }
  100%{
opacity: .6;
  }
}
</style>