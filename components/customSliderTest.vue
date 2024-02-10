<script setup>
import { ref, watchEffect,defineEmits} from "vue";
import CustomMinMaxSlider from "./CustomMinMaxSlider.vue";

const sliderMin = ref(50);
const sliderMax = ref(80);

const emit=defineEmits(["update:sliderMin", "update:sliderMax"])

watchEffect(sliderMin,()=>{
if (sliderMin.value) {
    emit("update:sliderMin", sliderMin.value);
}
})

function filterEvent() {
      emit("updateName", "ali sheikh");
    }
</script>

<template>
  <div class="slider-cont">
    <h3>from: {{ sliderMin }}$ <span class=" font-serif">to</span> {{ sliderMax }} $</h3>
    <CustomMinMaxSlider
      :max="700"
      v-model:min-value="sliderMin"
      v-model:max-value="sliderMax"
    />
 <div><button @click="$emit('filterEvent',sliderMin,sliderMax)" class="hover:via-slate-600 hover:text-white hover:tracking-wider transition-all duration-500 bg-gradient-to-tr from-gray-400 via-slate-50 to-gray-400 text-lg p-2 rounded-xl">Filter</button>
 </div>
  </div>
</template>