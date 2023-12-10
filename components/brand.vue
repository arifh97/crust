<template>
    <div class="container px-3 brand_area">
        <div class="flex -mx-3 justify-center">
            <div class="w-full">
                <SectionTitle title="Your omnichain solution for decentralized storage in web3">
                    <div class="w-full grid grid-cols-6 gap-x-14 gap-y-10 justify-center mt-12">
                    <div v-for="n in 12" :key="n" class="text-center"><img :src="`/img/brand/${n}.png`" class="w-full" alt=""></div>
                </div>
                </SectionTitle>
            </div>
        </div>
        <div class="flex flex-wrap -mx-3">            
            <div class="w-full px-3">
                <!-- <UTabs v-model="selected" :items="items" /> -->
                <!-- static korte hoba -->
            </div>
        </div>
    </div>
</template>

<script setup>
// const items = reactive([{
//   label: 'Tab1',
//   content: '<h3>hello</h3>'
// }, {
//   label: 'Tab2',
//   content: 'And, this is the content for Tab2'
// }, {
//   label: 'Tab3',
//   content: 'Finally, this is the content for Tab3'
// }])

</script>

<style lang="scss" scoped>

</style>