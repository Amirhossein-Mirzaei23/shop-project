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

</script>

<template>
  <div class="slider-cont">
    <h3>from: {{ sliderMin }}$ <span class=" font-serif">to</span> {{ sliderMax }} $</h3>
    <CustomMinMaxSlider
      :max="700"
      v-model:min-value="sliderMin"
      v-model:max-value="sliderMax"
    />
  </div>
</template>