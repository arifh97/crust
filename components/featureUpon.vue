<template>
    <div class="container px-3 featureupon pt-[50px] md:pt-[0px]">
        <div class="flex flex-wrap items-center -mx-3">
      <!-- Left Side Navigation -->
            
            <div class="w-full px-3">
                <SectionTitle title="A tech stack to be built upon" />
            </div>
            <!-- Right Side Content -->
            <div class="lg:w-6/12 px-3 mt-[-100px] lg:mt-[0] hidden lg:block">
                <transition name="fade" mode="out-in">
                    <div :key="openTab" class="fade">
                        <div v-bind:class="{ 'hidden': openTab !== 1, 'block': openTab === 1 }">
                            <img src="/img/upon.png" alt="">
                        </div>
                        <div v-bind:class="{ 'hidden': openTab !== 2, 'block': openTab === 2 }">
                            <img src="/img/upon.png" alt="">
                        </div>
                        <div v-bind:class="{ 'hidden': openTab !== 3, 'block': openTab === 3 }">
                            <img src="/img/upon.png" alt="">
                        </div>
                        <div v-bind:class="{ 'hidden': openTab !== 4, 'block': openTab === 4 }">
                            <img src="/img/upon.png" alt="">
                        </div>
                    </div>
                </transition>
            </div>
            
            <div class="lg:w-6/12 px-3 ">
                <ul class="flex flex-col space-y-2">
                    <li v-on:click="toggleTabs(1)" :class="{'nav-item': true, 'active': openTab === 1 }">
                        <div :class="['single__item relative z-[1] mb-[30px]  md:mb-[45px] pl-8 lg:pl-0']">
                            <div class="box  flex gap-4  md:gap-[30px]">
                                <div class="f_U_number text-[45px] md:text-[52px] font-medium mt-3 md:mt-0">
                                    04
                                </div>
                                <div class="mt-[30px] lg:mt-0">
                                    <h4 class="mb-3 text-[22px] md:text-[28px] font-roboto">Application</h4>
                                    <p class="mb-0 text-[#B7B7B7] leading-8 text-[14px] md:text-[18px]">Crust Files, Crust Cloud, IPFS Scan, etc.</p>
                                </div>                             
                            </div>
                            
                            <figure class="lg:hidden">
                                <img src="/img/upon.png" alt="">
                            </figure>
                        </div>
                    </li>
                    <li v-on:click="toggleTabs(2)" :class="{'nav-item': true, 'active': openTab === 2 }">
                        <div :class="['single__item relative z-[1] mb-[30px]  md:mb-[45px] pl-8 lg:pl-0']">
                            <div class="box  flex   gap-4  md:gap-[30px]">
                                <div class="f_U_number text-[45px] md:text-[52px] font-medium mt-3 md:mt-0">
                                    03
                                </div>
                                <div>
                                    <h4 class="mb-3 text-[22px] md:text-[28px] font-roboto">Interoperability and Tooling</h4>
                                    <p class="mb-0 text-[#B7B7B7] leading-8 text-[14px] md:text-[18px]">EVM, XCMP, X-Chain Contracts, Pallets, SDK, APIs, etc.</p>
                                </div>                             
                            </div>
                            
                            <figure class="lg:hidden">
                                <img src="/img/upon.png" alt="">
                            </figure>
                        </div>
                    </li>
                    <li v-on:click="toggleTabs(3)" :class="{'nav-item': true, 'active': openTab === 3 }">
                        <div :class="['single__item relative z-[1] mb-[30px]  md:mb-[45px] pl-8 lg:pl-0']">
                            <div class="box  flex  gap-4  md:gap-[30px]">
                                <div class="f_U_number text-[45px] md:text-[52px] font-medium mt-3 md:mt-0">
                                    02
                                </div>
                                <div>
                                    <h4 class="mb-3 text-[22px] md:text-[28px] font-roboto">Blockchain and Storage protocols</h4>
                                    <p class="mb-0 text-[#B7B7B7] leading-8 text-[14px] md:text-[18px]">GPoS, MPoW, DSM, TEE, IPFS</p>
                                </div>                             
                            </div>
                            
                            <figure class="lg:hidden">
                                <img src="/img/upon.png" alt="">
                            </figure>
                        </div>
                    </li>
                    <li v-on:click="toggleTabs(4)" :class="{'nav-item': true, 'active': openTab === 4 }">
                        <div :class="['single__item relative z-[1] mb-[30px]  md:mb-[45px] pl-8 lg:pl-0']">
                            <div class="box  flex gap-4  md:gap-[30px] ">
                                <div class="f_U_number text-[45px] md:text-[52px] font-medium mt-3 md:mt-0">
                                    01
                                </div>
                                <div>
                                    <h4 class="mb-3 text-[22px] md:text-[28px] font-roboto">Decentralized Physical Infrastructure</h4>
                                    <p class="mb-0 text-[#B7B7B7] leading-8 text-[14px] md:text-[18px]">Validators, Storage providers, Gateway providers</p>
                                </div>                             
                            </div>
                            
                            <figure class="lg:hidden">
                                <img src="/img/upon.png" alt="">
                            </figure>
                        </div>
                    </li>
                </ul>
            </div>
        </div>
    </div>
  </template>
  
  <script>
  export default {
    name: "products-tab",
    data() {
      return {
        openTab: 1
      };
    },
    methods: {
      toggleTabs: function (tabNumber) {
        this.openTab = tabNumber;
      }
    }
  };
  </script>
  
  <style scoped>
.fade-enter-active, .fade-leave-active {
  transition: opacity 0.5s;
}

.fade-enter, .fade-leave-to {
  opacity: 0;
}
  </style>