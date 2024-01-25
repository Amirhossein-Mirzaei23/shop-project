<template>
    <div  class="w-full h-full grid grid-cols-3" :style="`background-image:url()`">
      <div id="sliderImageElem" class="fadeIn flex items-center overflow-hidden">
      <div id="carsoulImg" class="p-2 bg-slate-400 m-auto rounded-lg">
       <img  @mousemove="xClient" @mouseleave="DefaultImageMargin" :style="{ marginLeft:`${x}px`,marginTop:`${y}px`}" :src="slide.images[0]" class="max-w-80 w-80 max-h-80 m-auto" />
      </div>
    </div>
      
      <div class="col-span-2 h-5/6 w-11/12 m-auto grid grid-rows-4">

      <NuxtLink :to="`/products/${slide.id}`" :id=slide.id><h1 class="text-right font-serif text-5xl hover:text-slate-600">{{slide.title}}</h1></NuxtLink>
     
      <p class="text-slate-600 font-thin text-left row-span-2 mt-5 ">{{slide.description}}</p>
      
      <p class="w-1/4 h-min font-sans text-center text-5xl text-red-600 shadow-sm shadow-teal-600">{{slide.price}}<span class="text-3xl">$</span></p>

      </div>
       
    </div>
 
</template>


<script setup>
import { ref, watch } from 'vue'




const {slide}=defineProps(['slide'])
console.log(slide);


let color='red'
// let carsoulImg= document.getElementById("carsoulImg")

let x=ref(0)
let y=ref(0)

  function xClient(event){
    let clientX=event.clientX
    let clientY=event.clientY
    console.log(screen.availWidth);
  if ((Math.abs(clientX)/340)>.5) {
    clientX=-clientX
  }
   if ((Math.abs(clientY)/340)>.5) {
    clientY=-clientY
   
  }
  x.value=clientX/3;
  y.value=clientY/3;
 }
 function DefaultImageMargin(){
  x.value=0
  y.value=0
 }
//  setInterval(() => {
//    console.log(  x.value,y.value);
//  }, 2000);

</script>

<style scoped>
#carsoulImg:hover{
  scale:1.5;

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