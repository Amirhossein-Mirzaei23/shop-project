<template>
    <main class="w-screen min-h-screen mx-auto backgroundImage" :style="{ backgroundImage: `url(${backgroundImagePath})` }">
    <br>
    <header class="container w-full h-16 rounded-xl bg-gradient-to-l from-green-300 via-stone-200 to-green-100 mx-auto">
    <div class="grid grid-cols-2 h-full">
<!---navbar logo and Icon container--->
    <div id="navIconContioner" class="w-full grid grid-cols-5">
    <div id="logp" class="overflow-hidden hover:overflow-visible">
    <img class="rounded-full bg-white w-6/12 h-full scale-125 mx-auto" src="../assets/images/logo.jpg" alt="logo">
    </div>
<!---navbarIcon--->
    <div id="navIcons" class="w-6/12 grid grid-cols-3 gap-2 items-center justify-items-center col-span-4">
    <div class="w-6/12 h-4/6 rounded-full bg-opacity-10"><img src="../assets/gifs/Instagram.gif" alt="Instagram Icon"></div>
    <div class="w-6/12 h-4/6 rounded-full bg-opacity-10"><img src="../assets/gifs/Telegram.gif" alt="Telegram"></div>
    <div class="w-6/12 h-4/6 rounded-full bg-opacity-10"><img src="../assets/gifs/loction.gif" alt="loction"></div>
      </div>
    </div>
<!---navbar items--->          <!------>
  <div id="navbarContioner" class="w-full h-full grid grid-cols-4 gap-1 items-center justify-items-center">
    <div class="w-8/12 h-5 flex items-center justify-items-center hover:shadow-xl hover:shadow-violet-400 border-b-2 hover:-translate-y-10 border-zinc-100 rounded-lg p-4 text-nowrap animate__animated animate__infinite animate__pulse animate__delay-2s animate__slow"><button class="mx-auto">تماس با ما</button></div>
    <div class="w-8/12 h-5 flex items-center justify-items-center hover:shadow-xl hover:shadow-violet-400 border-b-2 hover:-translate-y-10 border-zinc-100 rounded-lg p-4 text-nowrap animate__animated animate__infinite animate__pulse animate__delay-3s animate__slow"><button class="mx-auto">فروشگاه</button></div>
    <div class="w-8/12 h-5 flex items-center justify-items-center hover:shadow-xl hover:shadow-violet-400 border-b-2 hover:-translate-y-10 border-zinc-100 rounded-lg p-4 text-nowrap animate__animated animate__infinite animate__pulse animate__delay-4s animate__slow"><button class="mx-auto">سبد خرید</button></div>
    <div class="w-8/12 h-5 flex items-center justify-items-center hover:shadow-xl hover:shadow-violet-400 border-b-2 hover:-translate-y-10 border-zinc-100 rounded-lg p-4 text-nowrap animate__animated animate__infinite animate__pulse animate__delay-5s animate__slow"><button class="mx-auto">محصولات</button></div>
    </div>
    </div>
    </header>
<hr>
 <slot />

<h1>footer</h1>

    </main>
</template>

<script setup>

</script>

<script>
import backgroundImagePath from '~/assets/images/floral-bg.jpg'

export default {
  data() {
    return { backgroundImagePath }
  }
}
</script>

<style scoped>
.backgroundImage{
  background-position: center;
  background-size: cover;
  background-attachment: fixed;
  background-repeat: no-repeat;
  
}
</style>