<template>
    <header class="heading py-6 bg-transparent absolute top-0 left-0 w-full z-10">
        <div class="container">
            <div class="flex items-center">
                <div class="w-3/12">
                    <NuxtLink to="/">
                        <img src="/img/logo.png" alt="" class="w-[99px] h-6" />
                    </NuxtLink>
                </div>
                <div class="w-9/12 lg:w-7/12 text-center">
                    <button class="menu_bar ml-auto block lg:hidden" @click="toggleMenu">
                        <svg xmlns="http://www.w3.org/2000/svg" width="37" height="37" viewBox="0 0 37 37" fill="none">
                            <rect width="37" height="37" rx="18.5" fill="#FA8C16"/>
                            <path d="M28.1562 16.4792H12.4791" stroke="white" stroke-width="2.23958" stroke-linecap="round" stroke-linejoin="round"/>
                            <path d="M28.1562 12H8" stroke="white" stroke-width="2.23958" stroke-linecap="round" stroke-linejoin="round"/>
                            <path d="M28.1562 20.9583H8" stroke="white" stroke-width="2.23958" stroke-linecap="round" stroke-linejoin="round"/>
                            <path d="M28.1562 25.4375H12.4791" stroke="white" stroke-width="2.23958" stroke-linecap="round" stroke-linejoin="round"/>
                        </svg>
                    </button>
                    <nav class="main-menu" :class="{ 'hide': !isMenuOpen }">
                        <ul class="flex flex-wrap items-center justify-start">
                            <li v-for="(item,index) in menus" :key="index">
                                <NuxtLink to="/" class="block capitalize py-2 px-5 font-normal text-base text-white text-opacity-60 transition-all duration-300 hover:text-primary-500 hover:text-opacity-100">{{ item }}</NuxtLink>
                            </li>
                            <span class="lg:hidden flex justify-center pt-4">
                                <USelect v-model="lang" :options="langs" class="w-max uppercase" color="primary" variant="none" />
                            </span>
                            
                        </ul>
                    </nav>
                </div>
                <div class="lg:w-2/12 text-right hidden lg:block">
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

const isMenuOpen = ref(false);

const toggleMenu = () => {
  isMenuOpen.value = !isMenuOpen.value;
};
</script>

<style lang="scss" scoped>


</style>