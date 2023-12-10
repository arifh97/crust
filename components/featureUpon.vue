<template>
    <div class="container px-3">
        <div class="flex flex-wrap items-center -mx-3">
            <div class="w-full px-3">
                <SectionTitle title="A tech stack to be built upon" />
            </div>
            <div class="w-6/12 px-3">
                <img src="/img/upon.png" alt="">
            </div>
            <div class="w-6/12 px-3">
                <div :class="['flex items-center flex-wrap']" v-for="(item , index) in array.slice().reverse()" :key="index">
                    <div>
                        0{{ index + 1 }}
                    </div>
                    <div>
                        <h4 class="mb-3">{{ item.title }}</h4>
                        <p class="mb-0">{{ item.des }}</p>
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
        des: 'Crust Files, Crust Cloud, IPFS Scan, etc.',
    },
    {
        title: 'Blockchain and Storage protocols',
        des: 'EVM, XCMP, X-Chain Contracts, Pallets, SDK, APIs, etc.',
    },
    {
        title: 'Interoperability and Tooling',
        des: 'GPoS, MPoW, DSM, TEE, IPFS',
    },
    {
        title: 'Application',
        des: 'Validators, Storage providers, Gateway providers',
    },
]);
</script>

<style lang="scss" scoped>

</style>