<template>
    <div class="container px-3 brand_area pt-8 pb-20 md:pt-16">
      <div class="flex -mx-3 justify-center mb-14">
        <div class="w-full">
          <SectionTitle title="Your omnichain solution for decentralized storage in web3" />
        </div>
      </div>
      <div class="flex flex-wrap -mx-3">
        <div class="w-full px-3">
          <Vue3Marquee  direction="normal" duration=50 class="mb-10">
            <img v-for="img in imgArray" :key="img" :src="img"/>
          </Vue3Marquee>
          <Vue3Marquee  direction="reverse" duration=50>
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
        '/img/brand/8.png',
        '/img/brand/9.png',
        '/img/brand/10.png',
        '/img/brand/11.png',
        '/img/brand/12.png',
        
    ];
    
  </script>
  
  <style lang="scss" scoped>
  /* Add any additional styles if needed */
  </style>
  