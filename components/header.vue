<template>
    <header class="heading py-6 bg-transparent absolute top-0 left-0 w-full z-10">
        <div class="container">
            <div class="flex items-center">
                <div class="w-3/12">
                    <NuxtLink to="/">
                        <img src="/img/logo.png" alt="" class="w-[99px] h-6" />
                    </NuxtLink>
                </div>
                <div class="w-7/12 text-center">
                    <nav>
                        <ul class="flex flex-wrap items-center justify-center">
                            <li v-for="(item,index) in menus" :key="index">
                                <NuxtLink to="/" class="block capitalize py-2 px-5 font-normal text-base text-white text-opacity-60 transition-all duration-300 hover:text-primary-500 hover:text-opacity-100">{{ item }}</NuxtLink>
                            </li>
                        </ul>
                    </nav>
                </div>
                <div class="w-2/12 text-right">
                    <USelect v-model="lang" :options="langs" class="w-max ml-auto uppercase" color="primary" variant="none" />
                </div>
            </div>
        </div>
    </header>
</template>

<script setup>
const menus = ['Home', 'Get Started', 'Build', 'Documents', 'Blog'];
const langs = ['en', 'bn', 'ar'];
const lang = ref(langs[0]);
</script>

<style lang="scss" scoped>

</style>