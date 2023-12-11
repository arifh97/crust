<template>
    <div class="container pb-20 ixeo__area">
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
          <div class="ixeo__tab__content relative flex flex-col w-full pt-[70px] pb-20 px-7 rounded-[10px] bg-[#080809]">
            <transition name="fade" mode="out-in">
                <div :key="openTab" class="fade">
                    <div v-bind:class="{ 'hidden': openTab !== 1, 'block': openTab === 1 }">
                        <div class="flex flex-wrap">
                          <div class="w-6/12 pt-4">
                            <h3 class="mb-5">IPFS</h3>
                            <ul>
                              <li class="mb-7">Native IPFS integrations and toolkits for all web3 and web2 users</li>
                              <li class="mb-7">Chain agnostic storage services for any use case scenario</li>
                              <li>Leverage Crust solutions to enhance your IPFS experience. </li>
                            </ul>
                            <a href="https://www.google.com" class="bg-[orange] min-w-[206px] text-white p-3 mt-[30px]  rounded-[6px] hover:bg-[#F97316] text-center transition inline-block duration-300">
                              Start Building
                            </a>
                          </div>
                          <div class="w-6/12">
                            <figure>
                                <img class="ml-[auto]" src="/public/img/ixeo_right_img1.png" alt="">
                            </figure>
                          </div>
                        </div>
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