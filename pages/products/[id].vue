<template>
<div class="w-11/12 h-full bg-slate-100 bg-opacity-55 mx-auto rounded-xl py-2 ">
    <div  class="w-10/12 mx-auto h-full grid grid-cols-3 mt-8 " :style="`background-image:url()`">
      <div id="sliderImageElem" class="fadeIn flex items-center overflow-hidden">
      <div id="carsoulImg" class="p-2 bg-slate-400 m-auto rounded-lg">
       <img  @mousemove="xClient" @mouseleave="DefaultImageMargin" :style="{ marginLeft:`${x}px`,marginTop:`${y}px`}" :src="slide.images[0]"  class="max-w-80 w-80 max-h-80 m-auto" />
      </div>
    </div>
      
      <div class="col-span-2 h-5/6 w-11/12 m-auto grid grid-rows-4">

      <h1 class="text-right font-serif text-5xl">{{slide.title}}</h1>
     
      <p class="text-slate-600 font-thin text-left row-span-2 mt-5 ">{{slide.description}}</p>
      
     <div class="grid grid-cols-3">
      <p class=" w-1/4 h-min font-sans text-center text-5xl text-red-600 shadow-sm shadow-teal-600">{{slide.price}}<span class="text-3xl">$</span></p>
      <div>
        <input type="text" name="" id="">
      </div>
     </div>
      </div>
     </div>
    <div class="grid grid-cols-4 gap-2 bg-slate-100 rounded-2xl w-11/12 h-2/6 m-auto mt-2 max-sm:text-xs p-2">
    <div class=" w-full h-full rounded-lg"><img class="w-6/12 mx-auto " src="https://campshopping.ir/wp-content/uploads/2020/01/011.png" alt=""><p class="text-center mb-3">Shipping nationwide</p></div>
    <div class=" w-full h-full rounded-lg"><img class="w-6/12 mx-auto " src="https://campshopping.ir/wp-content/uploads/2020/01/003-300x300.png" alt=""><p class="text-center  mb-3">Immediate delivery in London</p></div>
     <div class=" w-full h-full rounded-lg"><img class="w-6/12 mx-auto" src="https://campshopping.ir/wp-content/uploads/2020/01/002-300x300.png" alt=""><p class="text-center  mb-3">Product return guarantee</p></div>
     <div class=" w-full h-full rounded-lg"><img class="w-6/12 mx-auto" src="https://campshopping.ir/wp-content/uploads/2020/01/0044-300x300.png" alt=""><p class="text-center mb-3">Ability to receive in person</p></div>
    </div>
    <div class="text-right p-2 w-1/12"><p class="text-lg font-serif text-zinc-700">{{position}}</p></div>
    <div class="grid grid-cols-3 w-3/12 gap-1">
      <div class="flex justify-end">
      <button  @click="increaseinputQauntit" class="w-2/12 rounded-l-lg bg-slate-100" >+</button>
      <input  class="w-4/12 text-center text-nowrap" type="number" min="1" max="15" step="1" name="quantiti" :value="inputValue" inputmode="numeric">
      <button @click="decreaseinputQauntit" class="w-2/12 rounded-r-lg bg-slate-100" >-</button>
      </div>
      <div class="col-span-2">
      <button class="bg-red-600 shadow-xl shadow-zinc-50 rounded-sm p-1">add to basket</button>
      </div>
    </div>
       <NuxtLink to="/"><button class="p-1 rounded-md bg-neutral-50 border-teal-400 mx-auto mt-5 hover:border-2">Home</button></NuxtLink>
   
  </div>
</template>

<script setup>
import { useFetch } from '@vueuse/core'


 const {id}=useRoute().params
  const productsKey=50
  const url=(`https://api.escuelajs.co/api/v1/products/${id}`)
  const {data:slide}= await useFetch(url).json()
  const position="Available"
const inputValue=ref(1)
  function increaseinputQauntit(){
    if (inputValue.value<15) {
      inputValue.value++
    } else {
      toastr.error("the products number couldn't be more than number 15")
    }
   
  }
    function decreaseinputQauntit(){
      if (inputValue.value>1) {
      inputValue.value--
    } else {
     toastr.info("the products number should be more than number 1")
    }
  }
///image zoom variable
let x=ref(0)
let y=ref(0)
  function xClient(event){
    let clientX=event.clientX
    let clientY=event.clientY
    console.log(clientX);
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
</script>

<script>
export default {


}
</script>

<style>

</style>