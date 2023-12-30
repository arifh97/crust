<template>
    <div class="hero_area pt-[140px] md:pt-[215px] pb-[80px] md:pb-[115px] bg-cover bg-left-bottom reactive">
         <video autoplay muted loop class="absolute inset-0 w-full h-full object-cover -z-0">
          <source src="/public/img/hero-orange-video.mp4" type="video/mp4">
        </video>
        <div class="absolute inset-0 bg-black opacity-50"></div>
        <img src="/public/img/hero-banner-after.png" alt="" class="w-full h-auto absolute top-0 left-0 z-1">
        <div class="container px-3 z-10 relative">
            <div class="flex -mx-3 justify-center">
                <div class="w-full sm:w-10/12 px-3 text-center pb-[140px]">
                    <div class="mb-[30px] md:mb-24 px-[2%]">
                        <h1 class="font-normal text-white text-[28px] md:text-[45px] lg:text-[60px] xl:text-[64px] leading-[1.28]">Complete Your Web3 Journey <strong class="font-bold block">with Decentralized Storage</strong></h1>
                    </div>
                    <div class="w-11/12 sm:w-10/12 md:w-8/12 flex flex-wrap items-center gap-4 md:gap-8 mx-auto justify-center">
                        <Button class="min-w-[170px] lg:min-w-[210px] btn_one">Build on Crust</Button>
                        <Button class="min-w-[170px] lg:min-w-[210px] btn_two">Crust Mainnet</Button>
                        <Button class="min-w-[170px] lg:min-w-[210px] btn_three">EthDA </Button>
                    </div>
                </div>
            </div>
            <div class="flex flex-wrap -mx-3 justify-center">
                <div class="w-1/2 md:w-1/3 lg:w-1/4 px-3 mb-10 md:mb-7 text-center" v-for="item in bannerInfo" :key="item.title">
                    <h3 class="text-[18px] md:text-[32px] font-bold leading-tight mb-3 text-white">{{ item.title }}</h3>
                    <p class="mb-0 text-primary-500 uppercase font-medium text-[14px] md:text-[18px]">{{ item.des }}</p>
                </div>
            </div>
        </div>
    </div>
</template>

<script setup>
    const bannerInfo = reactive([
        {
            title: '640,037 TB',
            des: 'Storage capacity'
        },
        {
            title: '1,525',
            des: 'DISTRIBUTED NODES'
        },
        {
            title: '2,021,065',
            des: 'STORAGE ORDERS'
        },
        {
            title: '32',
            des: 'REPLICAS ON AVERAGE'
        },
    ])
</script>

<style lang="scss" scoped>

</style>