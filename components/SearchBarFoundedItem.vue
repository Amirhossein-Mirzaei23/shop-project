<template>
    <div class="bg-rose-200 py-1" v-for="item in index " :key="item">
        <li class=" bg-slate-200 mt-1">{{item.title}}</li>
    </div>
</template>

<script setup>

const {index}=defineProps(['index'])

</script>

<style lang="scss" scoped>

</style>