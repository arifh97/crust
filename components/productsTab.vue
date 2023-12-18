<template>
    <div class="container product__tab pb-14 md:pb-20">
        <div class="flex flex-wrap items-center -mx-3 px-6">
      <!-- Left Side Navigation -->
            <div class="md:w-6/12 ">
                <h2 class="mb-14">Products</h2>
                <ul class="flex flex-col space-y-2">
                    <li v-on:click="toggleTabs(1)" :class="{'nav-item': true, 'active': openTab === 1 }">
                        <h4 class="text-[22px] md:text-[28px]">DSM via Crust Mainnet</h4>
                        <p class="text-[14px] md:text-[16px]">Everyone can place an on-chain storage order and get your data distributed on IPFS <a target="_blank" href="https://apps.crust.network">https://apps.crust.network</a></p>
                    </li>
                    <li v-on:click="toggleTabs(2)" :class="{'nav-item': true, 'active': openTab === 2 }">
                        <h4 class="text-[22px] md:text-[28px]">Crust Files</h4>
                        <p class="text-[14px] md:text-[16px]">Everyone can place an on-chain storage order and get your data distributed on IPFS</p>
                    </li>
                    <li v-on:click="toggleTabs(3)" :class="{'nav-item': true, 'active': openTab === 3 }">
                        <h4 class="text-[22px] md:text-[28px] ">Crust Cloud</h4>
                        <p class="text-[14px] md:text-[16px]">Everyone can place an on-chain storage order and get your data distributed on IPFS</p>
                    </li>
                    <li v-on:click="toggleTabs(4)" :class="{'nav-item': true, 'active': openTab === 4 }">
                        <h4 class="text-[22px] md:text-[28px] ">IPFS Scan</h4>
                        <p class="text-[14px] md:text-[16px]">Everyone can place an on-chain storage order and get your data distributed on IPFS</p>
                    </li>
                </ul>
            </div>
        
            <!-- Right Side Content -->
            <div class="md:w-6/12 mt-8 md:mt-0">
                <transition name="fade" mode="out-in">
                    <div :key="openTab" class="fade">
                        <div v-bind:class="{ 'hidden': openTab !== 1, 'block': openTab === 1 }">
                            <img src="/public/img/product-tab-img1.png" alt="">
                        </div>
                        <div v-bind:class="{ 'hidden': openTab !== 2, 'block': openTab === 2 }">
                            <p>Content for Settings tab goes here. 2</p>
                        </div>
                        <div v-bind:class="{ 'hidden': openTab !== 3, 'block': openTab === 3 }">
                            <p>Content for Options tab goes here. 3</p>
                        </div>
                        <div v-bind:class="{ 'hidden': openTab !== 4, 'block': openTab === 4 }">
                            <p>Content for Options tab goes here 4.</p>
                        </div>
                    </div>
                </transition>
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