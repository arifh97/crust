<template>
    <div class="container pt-7 pb-16 md:pb-20 ixeo__area">
        <div class="flex flex-wrap">
          <ul class="flex mb-0 list-none flex-wrap flex-row  w-full ixeo__list_wrapper rounded-[10px] bg-[#0C0C0C] backdrop-filter-[blur(7px)]">
              <li v-on:click="toggleTabs(1)" :class="{'nav-item': true, 'active': openTab === 1 }">
                IPFS
              </li>
              <li v-on:click="toggleTabs(2)" :class="{'nav-item': true, 'active': openTab === 2 }">
                XCMP
              </li>
              <li v-on:click="toggleTabs(3)" :class="{'nav-item': true, 'active': openTab === 3 }">
                EVM
              </li>
              <li v-on:click="toggleTabs(4)" :class="{'nav-item': true, 'active': openTab === 4 }">
                Others
              </li>
          </ul>
          <div class="ixeo__tab__content relative flex flex-col w-full pt-[45px] pb-7 md:pb-16 px-[20px] md:px-7 rounded-[10px] bg-[#080809]">
            <transition name="fade" mode="out-in">
                <div :key="openTab" class="fade">
                    <div v-bind:class="{ 'hidden': openTab !== 1, 'block': openTab === 1 }">
                        <div class="flex flex-wrap">
                          <div class="lg:w-6/12 pt-4">
                            <h3 class="mb-4 md:mb-6 text-[24px] md:text-[36px]">IPFS</h3>
                            <ul class="tab__content__in_list">
                              <li v-for="(item, index) in items" :key="index" class="mb-6 md:mr-[25%] relative pl-8 text-[14px] md:text-[16px]">{{ item }}</li>
                            </ul>
                            <a href="https://www.google.com" class="bg-[orange] min-w-[206px] text-white p-3 mt-[30px]  rounded-[6px] hover:bg-[#F97316] text-center transition inline-block duration-300">
                              Start Building
                            </a>
                          </div>
                          <div class="lg:w-6/12 mt-8">
                            <figure>
                                <img class="ml-[auto]" src="/public/img/ixeo_right_img1.png" alt="">
                            </figure>
                          </div>
                        </div>
                    </div>
                    <div v-bind:class="{ 'hidden': openTab !== 2, 'block': openTab === 2 }">
                      <div class="flex flex-wrap">
                          <div class="lg:w-6/12 pt-4">
                            <h3 class="mb-4 md:mb-6 text-[24px] md:text-[36px]">XCMP</h3>
                            <ul class="tab__content__in_list">
                              <li v-for="(item, index) in items" :key="index" class="mb-6 md:mr-[25%] relative pl-8 text-[14px] md:text-[16px]">{{ item }}</li>
                            </ul>
                            <a href="https://www.google.com" class="bg-[orange] min-w-[206px] text-white p-3 mt-[30px]  rounded-[6px] hover:bg-[#F97316] text-center transition inline-block duration-300">
                              Start Building
                            </a>
                          </div>
                          <div class="lg:w-6/12 mt-8">
                            <figure>
                                <img class="ml-[auto]" src="/public/img/ixeo_right_img1.png" alt="">
                            </figure>
                          </div>
                        </div>
                    </div>
                    <div v-bind:class="{ 'hidden': openTab !== 3, 'block': openTab === 3 }">
                      <div class="flex flex-wrap">
                          <div class="lg:w-6/12 pt-4">
                            <h3 class="mb-4 md:mb-6 text-[24px] md:text-[36px]">EVM</h3>
                            <ul class="tab__content__in_list">
                              <li v-for="(item, index) in items" :key="index" class="mb-6 md:mr-[25%] relative pl-8 text-[14px] md:text-[16px]">{{ item }}</li>
                            </ul>
                            <a href="https://www.google.com" class="bg-[orange] min-w-[206px] text-white p-3 mt-[30px]  rounded-[6px] hover:bg-[#F97316] text-center transition inline-block duration-300">
                              Start Building
                            </a>
                          </div>
                          <div class="lg:w-6/12 mt-8">
                            <figure>
                                <img class="ml-[auto]" src="/public/img/ixeo_right_img1.png" alt="">
                            </figure>
                          </div>
                        </div>
                    </div>
                    <div v-bind:class="{ 'hidden': openTab !== 4, 'block': openTab === 4 }">
                      <div class="flex flex-wrap">
                          <div class="lg:w-6/12 pt-4">
                            <h3 class="mb-4 md:mb-6 text-[24px] md:text-[36px]">Others</h3>
                            <ul class="tab__content__in_list">
                              <li v-for="(item, index) in items" :key="index" class="mb-6 md:mr-[25%] relative pl-8 text-[14px] md:text-[16px]">{{ item }}</li>
                            </ul>
                            <a href="https://www.google.com" class="bg-[orange] min-w-[206px] text-white p-3 mt-[30px]  rounded-[6px] hover:bg-[#F97316] text-center transition inline-block duration-300">
                              Start Building
                            </a>
                          </div>
                          <div class="lg:w-6/12 mt-8">
                            <figure>
                                <img class="ml-[auto]" src="/public/img/ixeo_right_img1.png" alt="">
                            </figure>
                          </div>
                        </div>
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
        openTab: 1,
        items: [
          'Native IPFS integrations and toolkits for all web3 and web2 users',
          'Chain agnostic storage services for any use case scenario',
          'Leverage Crust solutions to enhance your IPFS experience.'
        ]
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