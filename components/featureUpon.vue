<template>
    <div class="container px-3 featureupon">
        <div class="flex flex-wrap items-center -mx-3">
            <div class="w-full px-3">
                <SectionTitle title="A tech stack to be built upon" />
            </div>
            <div class="w-6/12 px-3">
                <img src="/img/upon.png" alt="">
            </div>
            <div class="w-6/12 px-3">
                <div :class="['single__item relative z-[1] flex items-center gap-[30px]  mb-[45px]']" v-for="(item , index) in array.slice().reverse()" :key="index">
                    <div class="f_U_number text-[52px] font-medium">
                        0{{ index + 1 }}
                    </div>
                    <div>
                        <h4 class="mb-3 text-[28px] font-roboto">{{ item.title }}</h4>
                        <p class="mb-0 text-[#B7B7B7] leading-8 text-[18px]">{{ item.des }}</p>
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