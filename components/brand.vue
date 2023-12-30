<template>
    <div class="container px-3 brand_area pb-8 md:pb-20 pt-16">
      <div class="flex -mx-3 justify-center md:mb-14 mb-7">
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
        '/img/brand/Aave.png',
        '/img/brand/Algorand.png',
        '/img/brand/APTOS.svg',
        '/img/brand/Arbitrum.png',
        '/img/brand/BNB_Chain.svg',
        '/img/brand/Chainlink-logo.svg',
        '/img/brand/Ethereum.png',
        '/img/brand/IPFS logo.png',
        '/img/brand/Moonbeam.png',
        '/img/brand/Moonriver.png',
        '/img/brand/MultiversX.svg',
        '/img/brand/NEAR.png',
        '/img/brand/OASIS.svg',
        '/img/brand/Optimism.svg',
        '/img/brand/polkadot.svg',
        '/img/brand/polygon-logo.svg',
        '/img/brand/Shardeum-Network.png',
        '/img/brand/Solana.svg',
        '/img/brand/Uniswap.svg',
        '/img/brand/Uniswap.svg.png',
        '/img/brand/zkSync.svg',
        
    ];
    
  </script>
  
  <style lang="scss" scoped>
  /* Add any additional styles if needed */
  </style>
  