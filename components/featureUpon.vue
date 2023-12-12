<template>
    <div class="container px-3 featureupon pt-[50px] md:pt-[0px]">
        <div class="flex flex-wrap items-center -mx-3">
            <div class="w-full px-3">
                <SectionTitle title="A tech stack to be built upon" />
            </div>
            <div class="lg:w-6/12 px-3 mt-[-100px] lg:mt-[0]">
                <img src="/img/upon.png" alt="">
            </div>
            <div class="lg:w-6/12 px-3">
                <div :class="['single__item relative z-[1] flex items-center gap-[30px] md-[20px]  md:mb-[45px] pl-8 lg:pl-0']" v-for="(item , index) in array.slice().reverse()" :key="index">
                    <div class="f_U_number text-[45px] md:text-[52px] font-medium">
                        0{{ index + 1 }}
                    </div>
                    <div class="mt-[30px] md:mt-0">
                        <h4 class="mb-3 text-[22px] md:text-[28px] font-roboto">{{ item.title }}</h4>
                        <p class="mb-0 text-[#B7B7B7] leading-8 text-[14px] md:text-[18px]">{{ item.des }}</p>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script setup>
const array = reactive([
    {
        title: 'Decentralized Physical Infrastructure',
        des: 'Validators, Storage providers, Gateway providers',
    },
    {
        title: 'Blockchain and Storage protocols',
        des: 'GPoS, MPoW, DSM, TEE, IPFS',
    },
    {
        title: 'Interoperability and Tooling',
        des: 'EVM, XCMP, X-Chain Contracts, Pallets, SDK, APIs, etc.',
    },
    {
        title: 'Application',
        des: 'Crust Files, Crust Cloud, IPFS Scan, etc. ',
    },
]);
</script>

<style lang="scss" scoped>

</style>