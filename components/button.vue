<template>
    <UButton size="sm" :class="[props.class, 'h-[50px] justify-center rounded-md transition-all duration-500']">
        <slot></slot>
    </UButton>
</template>

<script setup>
const props =defineProps('class');

</script>

<style lang="scss" scoped>

</style>