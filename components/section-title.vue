<template>
    <div class="mb-10 md:mb-14 lg:mb-16 xl:mb-20 text-center">
        <h2 v-if="props.title" class="text-[50px] leading-tight mb-4 lg:mb-6 font-medium">{{ props.title }}</h2>
        <p v-if="props.subtitle" class="mb-0 text-[22px] leading-[1.6]">{{ props.subtitle }}</p>
        <slot></slot>
    </div>
</template>

<script setup>
    const props = defineProps({
        title:{type:String,required:true},
        subtitle: String,
    })
</script>

<style lang="scss" scoped>

</style>