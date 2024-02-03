<template>
<search-bar></search-bar>
<br>
  <carsoul class="" />

</template>

<script setup>


let textcolor=['255,255,255','255,255,255','128,0,0','0,128,0','0,255,0','0,0,255','25, 100, 180','0,255,255','0,128,128','128,0,128']

let searchBarTitle
// 'searchBarTitle'
setTimeout(() => {
 
  searchBarTitle=document.getElementById('searchBarTitle')
 
    searchBarTitle.classList.replace('animate__backInLeft','animate__pulse')
    searchBarTitle.classList.replace('animate__repeat-1','animate__infinite')
    searchBarTitle.classList.replace('animate__slow','animate__slower')

    
}, 3000);
let searchBarTitleSpan
let index=0

//// document.getElementById('searchBarTitleSpan')
setTimeout(() => {
  searchBarTitleSpan=document.getElementById('searchBarTitleSpan')
  console.log(searchBarTitleSpan);
  function changeColor(){

index++
if(index>textcolor.length-1){
  index=0
}
searchBarTitleSpan.style.cssText=`color:rgb(${textcolor[index]});box-shadow: 0px 13px 25px 0px rgb(${textcolor[index]});opacity:1;`

if (searchBarTitleSpan.classList.contains('animate__fadeOutDown')) {
  searchBarTitleSpan.classList.remove('animate__fadeOutDown')
  searchBarTitleSpan.classList.add('animate__fadeOutUp')
} else {
  searchBarTitleSpan.classList.remove('animate__fadeOutUp')
  searchBarTitleSpan.classList.add('animate__fadeOutDown')

}
}

setInterval(() => {
 changeColor()

}, 3000);

}, 1000);




</script>


<style>

</style>