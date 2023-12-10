<template>
    <div class="container px-3">
        <div class="flex flex-wrap -mx-3">
            <div class="w-7/12 px-3">
                <div class="px-14">
                    <h3>Get in touch with the team</h3>
                    <UInput class="mb-5" color="transparent" variant="outline" placeholder="Email..." />
                    <USelect color="transparent" variant="outline" v-model="selectQuestion" :options="question" />
                </div>
            </div>
            <div class="w-5/12 px-3">
                <img src="/img/contact.png" alt="">
            </div>
        </div>
    </div>
</template>

<script setup>
const question = reactive(['Development Questions', 'Design Questions', 'Marketing Questions']);
const selectQuestion = reactive(question[0]);
</script>

<style lang="scss" scoped>

</style>