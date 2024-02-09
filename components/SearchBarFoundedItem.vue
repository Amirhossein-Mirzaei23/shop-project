<template>
    
<div >
       <div class="bg-rose-200 mt-5 py-1" v-for="item in index" :key="item">
        <li :v-if="item" class=" bg-slate-200 mt-1"  v-for="elem in item" :key="elem">{{item}}</li>
      <!----- <li class=" bg-slate-200 mt-1" v-for="atr in item" :key="atr">{{atr.title}}</li> --> 
    </div>  
  
</div>
   
</template>

<script setup>
const numberT=Math.random()
console.log(numberT);
const {index}= defineProps(['index'])

</script>

<style lang="scss" scoped>

</style>