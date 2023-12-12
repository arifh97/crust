<template>
    <div class="container px-3 brand_area pt-16 md:pt-0">
      <div class="flex -mx-3 justify-center">
        <div class="w-full">
          <SectionTitle title="Your omnichain solution for decentralized storage in web3" />
        </div>
      </div>
      <div class="flex flex-wrap -mx-3">
        <div class="w-full px-3">
          <Vue3Marquee reverse>
            <img v-for="img in imgArray" :key="img" :src="img"/>
          </Vue3Marquee>
        </div>
      </div>
    </div>
  </template>
  
  <script setup>
    const imgArray = [
        '/img/brand/1.png',
        '/img/brand/2.png',
        '/img/brand/3.png',
        '/img/brand/4.png',
        '/img/brand/5.png',
        '/img/brand/6.png',
        '/img/brand/7.png',
        
    ];
  </script>
  
  <style lang="scss" scoped>
  /* Add any additional styles if needed */
  </style>
  

  <!-- <div v-for="n in 12" :key="n" class="text-center">
    <img :src="`/img/brand/${n}.png`" class="w-full" alt="">
  </div> -->