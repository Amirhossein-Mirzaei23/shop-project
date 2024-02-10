<template>
    <div class="container w-full h-screen bg-slate-400 bg-opacity-60 rounded-3xl">
<section class="h-72 w-11/12 bg-opacity-40 rounded-xl bg-zinc-50 mx-auto mt-3 grid grid-rows-5 items-center">
    <div class="w-full h-5/6 text-center bg-teal-200 rounded-lg flex justify-center items-center"><h1 class="font-sans text-xl">Filter by price</h1></div>
    <div class="float-left flex gap-3 justify-center px-5 w-11/12 relative mt-2 row-span-2 mx-auto">

  <div class="w-11/12"><custom-slider-test @filterEvent="filter" /></div>
    </div>
    <div class="mt-10 w-11/12 mx-auto">
     </div>

</section>

    </div>
</template>

<script setup>
import{defineEmits} from 'vue'
const maxvalue=defineModel('maxvalue')
const minvalue=defineModel('minvalue')

const sliderMin=ref(0)
const sliderMax=ref(0)

async function filter(min,max){

console.log("min: ",min,"max: ",max);
/// productFilter ,emit
//const emit=defineEmits(["updateProduct"],[productFilter])
emitValue(min,max)
return {min,max,sliderMax}
}

const emit=defineEmits['emitValue']

function emitValue(minValue,maxValue){
console.log(minValue,maxValue);
}

//  const {data:productFilter}=await useFetch(`https://api.escuelajs.co/api/v1/products/?price_min=${min}&price_max=${max}`)
//  watchEffect(min,(newVAl)=>{
//      console.log(newVAl);
//  })
</script>
<script>
export default {
    setup() {
       
    }
}
</script>
<style lang="scss" scoped>

</style>