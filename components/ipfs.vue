<template>
    <div class="container px-3 ipfs__area pt-12 md:pt-0">
        <div class="flex flex-wrap items-center -mx-3">
            <div class="w-full px-3">
                <SectionTitle title="IPFS Done the Right Way" subtitle="Elevating your IPFS experience, Crust Network serves as incentivized service layer, safeguarding your data with accessibility, replication, and long-term guarantees." />
            </div>
            <div class="px-3 w-full md:w-5/12 flex justify-center">
                <img class="md:-ml-[59px] max-w-[390gupx] w-[100%]" src="/img/ipfs.png" alt="">
            </div>
            <div class="px-3 w-full md:w-7/12 mt-10 md:mt-0">
                <div class="single__ipfs__item mb-[30px]" v-for="item in ipfsArray" :key="item">
                    <h4 class="mb-4 md:mb-5 leading-[130%] text-[22px] md:text-[28px]">{{ item.title }}</h4>
                    <p class="text-white text-opacity-60 text-[14px] md:text-[16px]">{{ item.des }}</p>
                </div>
            </div>
        </div>
    </div>
</template>

<script setup>
 const ipfsArray = reactive([
    {
        title:'Dedicated Gateway Service:',
        des: `Upload and retrieve data with Crust’s dedicated IPFS gateways. Our gateways ensure highest performance for the best user experience on IPFS.`
    },
    {
        title:'Decentralized Pinning Service:',
        des: `Pin your data to Crust and enjoy multiple replicas per file secured via a fully decentralized protocol and infrastructure. On-demand as well as permanently.`
    },
    {
        title:'Data Query Service:',
        des: `Inspect your storage orders directly on-chain or via our IPFS storage explorer to validate data availability, number of replicas and more.`
    },
 ])
</script>

<style lang="scss" scoped>

</style>