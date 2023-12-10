<template>
    <div class="pt-[235px] pb-[200px] bg-[url('/img/hero-banner.png')] bg-cover bg-left-bottom reactive">
        <img src="/img/hero-banner-after.png" alt="" class="w-full h-auto absolute top-0 left-0 z-0">
        <div class="container px-3">
            <div class="flex -mx-3 justify-center">
                <div class="w-10/12 px-3 text-center pb-[140px]">
                    <div class="mb-24 px-[2%]">
                        <h1 class="font-normal text-white text-[64px] leading-[1.28]">Complete Your Web3 Journey <strong class="font-bold">with Decentralized Storage</strong></h1>
                    </div>
                    <div class="w-8/12 flex items-center gap-8 mx-auto justify-center">
                        <Button class="w-full">Build on Crust</Button>
                        <Button class="w-full bg-[#131313] border border-solid border-white border-opacity-[.30] hover:border-primary-full">Crust Mainnet</Button>
                    </div>
                </div>
            </div>
            <div class="flex -mx-3 justify-center">
                <div class="w-3/12 px-3 text-center" v-for="item in bannerInfo" :key="item.title">
                    <h3 class="text-[38px] font-bold leading-tight mb-3 text-white">{{ item.title }}</h3>
                    <p class="mb-0 text-primary-500 uppercase font-medium text-opacity-90">{{ item.des }}</p>
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