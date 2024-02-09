<template>
<div class="container w-full h-72 mt-3 bg-opacity-30 bg-gray-400 flex items-center justify-end text-xs sm:text-xs lg:text-lg">
    <div class="w-11/12 h-full float-right grid grid-rows-2 mt-3">
    <div  class="h-44 w-11/12 mt-3 flex items-center"><h1 ref="searchBarTitle" class="text-5xl p-3 rounded-xl shadoww hover:tracking-wide font-serif text-pretty animate__animated animate__backInLeft animate__delay-1s animate__slow animate__repeat-1">Add Some <span class="rounded-xl animate__animated animate__fadeOutDown animate__slower animate__infinite text-white"  ref="searchBarTitleSpan" >Color</span> To Your Life!</h1></div>
    <div class="rounded-xl w-full h-16 flex justify-end mt-10">
    <div class="w-8/12 pr-3 rounded-3xl h-full">
  <div class="w-11/12 h-full pr-3 flex justify-end items-center">
    <input @keyup="keyWordSearch" class="w-11/12 h-9 sm:h-12  rounded-lg px-2 bg-slate-200 hover:bg-zinc-50 focus:bg-zinc-50 transition-all duration-500" type="text" placeholder="find every thing that you may want ..." >
      <button class="absolute w-2/12 h-9 sm:h-12   rounded-lg bg-gradient-to-tr from-sky-400 via-orange-300 to-sky-600 hover:via-slate-200 hover:to-sky-400 hover:tracking-widest transition-all duration-300">Search</button>
  </div> 

    <div v-show="keyword" class=" h-max-40 overflow-hidden z-10">
   
       <ul class="w-11/12 h-24 h-max-40 mx-auto rounded-xl bg-slate-100 overflow-auto">
    <div  class="bg-sky-200 h-20">
      <div :key="Amir"  class="bg-slate-400 mt-3">
       <div  v-for="value in Amir" :key="value">
        <search-bar-founded-item :index="value"  />
      </div>
      </div>
      
    </div>
       </ul>
    
    </div>
  </div>
    </div>
    </div>
  
</div>
</template>

<script setup>
import { ref} from 'vue'
///

let textcolor=['255,255,255','255,255,255','128,0,0','0,128,0','0,255,0','0,0,255','25, 100, 180','0,255,255','0,128,128','128,0,128']

const searchBarTitle=ref(null)
// 'searchBarTitle'

setTimeout(() => {
 
 // searchBarTitle=this.$ref.searchBarTitle
 
    searchBarTitle.value.classList.replace('animate__backInLeft','animate__pulse')
    searchBarTitle.value.classList.replace('animate__repeat-1','animate__infinite')
    searchBarTitle.value.classList.replace('animate__slow','animate__slower')

    
}, 3000);
let searchBarTitleSpan=ref(null)
let index=0

//// document.getElementById('searchBarTitleSpan')
setTimeout(() => {
 // searchBarTitleSpan=document.getElementById('searchBarTitleSpan')
 
  function changeColor(){

index++
if(index>textcolor.length-1){
  index=0
}
searchBarTitleSpan.value.style.cssText=`color:rgb(${textcolor[index]});box-shadow: 0px 13px 25px 0px rgb(${textcolor[index]});opacity:1;`

if (searchBarTitleSpan.value.classList.contains('animate__fadeOutDown')) {
  searchBarTitleSpan.value.classList.remove('animate__fadeOutDown')
  searchBarTitleSpan.value.classList.add('animate__fadeOutUp')
} else {
  searchBarTitleSpan.value.classList.remove('animate__fadeOutUp')
  searchBarTitleSpan.value.classList.add('animate__fadeOutDown')

}
}

setInterval(() => {
 changeColor()

}, 3000);

}, 1000);





//create varible to store seach bar input value
let keyword=ref()
let {Amir}=ref()

async function keyWordSearch(event){
  
  keyword.value=event.target.value
   Amir =await useFetch(`https://api.escuelajs.co/api/v1/products/?title=${keyword.value}`)

  if(keyword){
//ul.class add hidden
  }

  return {Amir,keyword}
}


</script>


<style>
.shadoww{
  box-shadow: 0px 15px 35px 0px rgb(25, 100, 180);
}
</style>