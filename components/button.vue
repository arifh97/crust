<template>
    <UButton size="sm" :class="[props.class, 'h-12 justify-center rounded-md transition-all duration-500']">
        <slot></slot>
    </UButton>
</template>

<script setup>
const props =defineProps('class');
onMounted(() => {
    console.log(props);
})
</script>

<style lang="scss" scoped>

</style>