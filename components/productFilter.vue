<template>
    <div class="container w-full h-screen bg-slate-400 bg-opacity-60 rounded-3xl">
<section class="h-72 w-11/12 bg-opacity-40 rounded-xl bg-zinc-50 mx-auto mt-3 grid grid-rows-5 items-center">
    <div class="w-full h-5/6 text-center bg-teal-200 rounded-lg flex justify-center items-center"><h1 class="font-sans text-xl">Filter by price</h1></div>
    <div class="float-left flex gap-3 justify-center px-5 w-11/12 relative mt-2 row-span-2 mx-auto">

  <div class="w-11/12"><custom-slider-test></custom-slider-test></div>
    </div>
    <div class="mt-10 w-11/12 mx-auto">
        <button @click="filter" class="hover:via-slate-600 hover:text-white hover:tracking-wider transition-all duration-500 bg-gradient-to-tr from-gray-400 via-slate-50 to-gray-400 text-lg p-2 rounded-xl">Filter</button>
    </div>

</section>

    </div>
</template>

<script setup>
import{defineEmits} from 'vue'
const maxvalue=defineModel('maxvalue')
const minvalue=defineModel('minvalue')

const sliderMin=ref(50)
const minvalueInput=ref()

function filter(){
 console.log(minvalueInput);
}

</script>
<script>
export default {
    setup() {
       
    }
}
</script>
<style lang="scss" scoped>

</style>