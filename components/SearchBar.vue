<template>
<div class="container w-full h-72 mt-3 bg-opacity-30 bg-gray-400 flex items-center justify-end text-xs sm:text-xs lg:text-lg">
    <div class="w-11/12 h-full float-right grid grid-rows-2 mt-3">
    <div  class="h-44 w-11/12 mt-3 flex items-center"><h1 id="searchBarTitle" class="text-5xl p-3 rounded-xl shadoww hover:tracking-wide font-serif text-pretty animate__animated animate__backInLeft animate__delay-1s animate__slow animate__repeat-1">Add Some <span class="rounded-xl animate__animated animate__fadeOutDown animate__slower animate__infinite text-white"  id="searchBarTitleSpan" >Color</span> To Your Life!</h1></div>
    <div class="rounded-xl w-full h-16 flex justify-end mt-10">
    <div class="w-8/12 pr-3 rounded-3xl h-full bg-rose-500">
  <div class="w-11/12 h-full pr-3 flex justify-end items-center">
    <input @keyup="keyWordSearch" class="w-11/12 h-9 sm:h-12  rounded-lg px-2 bg-slate-200 hover:bg-zinc-50 focus:bg-zinc-50 transition-all duration-500" type="text" placeholder="find every thing that you may want ..." >
      <button class="absolute w-2/12 h-9 sm:h-12   rounded-lg bg-gradient-to-tr from-sky-400 via-orange-300 to-sky-600 hover:via-slate-200 hover:to-sky-400 hover:tracking-widest transition-all duration-300">Search</button>
  </div> 

    <div v-if="keyword" class="h-max-40 overflow-hidden z-10">
      <ul  class="w-11/12 h-24 h-max-40 mx-auto rounded-xl bg-slate-100 overflow-auto">
        <li v-for="index in search" :key="index" class="h-10">{{index.title}}</li>
      </ul>
    </div>
  </div>
    </div>
    </div>
</div>
</template>

<script setup>
import { ref} from 'vue'

let keyword=ref()

function keyWordSearch(event){
  
  keyword.value=event.target.value
  
  if(keyword){
//ul.class add hidden
  }
  console.log(keyword.value);
  return keyword.value
}

 let url=(`https://api.escuelajs.co/api/v1/products/?title=${keyword}`)
 const {data:search}= await useFetch(url)

</script>


<style>
.shadoww{
  box-shadow: 0px 15px 35px 0px rgb(25, 100, 180);
}
</style>