<template>
    <div class="container pt-7 pb-5 md:pb-20 ixeo__area">
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
                          <div class="lg:w-6/12 pt-4  md:pl-[75px]">
                            <h3 class="mb-4 md:mb-6 text-[24px] md:pl-[30px]">IPFS</h3>
                            <ul class="tab__content__in_list">
                              <li v-for="(item, index) in items" :key="index" class="mb-9 md:mr-[15%] relative pl-8 text-[14px] md:text-[16px]">{{ item }}</li>
                            </ul>
                            <a href="https://www.google.com" class="bg-[#FA8C16] min-w-[206px] text-white p-3 mt-[24px] md:mt-[60px]  rounded-[6px] hover:bg-[#F97316] text-center transition inline-block duration-300 md:ml-[30px] text-[16px] md:text-[20px]">
                              Start Building
                            </a>
                          </div>
                          <div class="lg:w-6/12 mt-8">
                            <figure>
                                <img class="ml-[auto] h-[300px] sm:h-[469px]" src="/public/img/ixeo_right_img1.png" alt="">
                            </figure>
                          </div>
                        </div>
                    </div>
                    <div v-bind:class="{ 'hidden': openTab !== 2, 'block': openTab === 2 }">
                      <div class="flex flex-wrap">
                          <div class="lg:w-6/12 pt-4 md:pl-[75px]">
                            <h3 class="mb-4 md:mb-6 text-[24px] md:pl-[30px]">XCMP</h3>
                            <ul class="tab__content__in_list">
                              <li v-for="(item, index) in items" :key="index" class="mb-9 md:mr-[15%] relative pl-8 text-[14px] md:text-[16px]">{{ item }}</li>
                            </ul>
                            <a href="https://www.google.com" class="bg-[#FA8C16] min-w-[206px] text-white p-3 mt-[24px] md:mt-[60px]  rounded-[6px] hover:bg-[#F97316] text-center transition inline-block duration-300 md:ml-[30px] text-[16px] md:text-[20px]">
                              Start Building
                            </a>
                          </div>
                          <div class="lg:w-6/12 mt-8">
                            <figure>
                                <img class="ml-[auto] h-[300px] sm:h-[469px]" src="/public/img/ixeo_right_img1.png" alt="">
                            </figure>
                          </div>
                        </div>
                    </div>
                    <div v-bind:class="{ 'hidden': openTab !== 3, 'block': openTab === 3 }">
                      <div class="flex flex-wrap">
                          <div class="lg:w-6/12 pt-4 md:pl-[75px]">
                            <h3 class="mb-4 md:mb-6 text-[24px] md:pl-[30px]">EVM</h3>
                            <ul class="tab__content__in_list">
                              <li v-for="(item, index) in items" :key="index" class="mb-9 md:mr-[15%] relative pl-8 text-[14px] md:text-[16px]">{{ item }}</li>
                            </ul>
                            <a href="https://www.google.com" class="bg-[#FA8C16] min-w-[206px] text-white p-3 mt-[24px] md:mt-[60px]  rounded-[6px] hover:bg-[#F97316] text-center transition inline-block duration-300 md:ml-[30px] text-[16px] md:text-[20px]">
                              Start Building
                            </a>
                          </div>
                          <div class="lg:w-6/12 mt-8">
                            <figure>
                                <img class="ml-[auto] h-[300px] sm:h-[469px]" src="/public/img/ixeo_right_img1.png" alt="">
                            </figure>
                          </div>
                        </div>
                    </div>
                    <div v-bind:class="{ 'hidden': openTab !== 4, 'block': openTab === 4 }">
                      <div class="flex flex-wrap">
                          <div class="lg:w-6/12 pt-4 md:pl-[75px]">
                            <h3 class="mb-4 md:mb-6 text-[24px] md:pl-[30px]">Others</h3>
                            <ul class="tab__content__in_list">
                              <li v-for="(item, index) in items" :key="index" class="mb-9 md:mr-[15%] relative pl-8 text-[14px] md:text-[16px]">{{ item }}</li>
                            </ul>
                            <a href="https://www.google.com" class="bg-[#FA8C16] min-w-[206px] text-white p-3 mt-[24px] md:mt-[60px]  rounded-[6px] hover:bg-[#F97316] text-center transition inline-block duration-300 md:ml-[30px] text-[16px] md:text-[20px]">
                              Start Building
                            </a>
                          </div>
                          <div class="lg:w-6/12 mt-8">
                            <div class="api_code_with_copy_code">
                              <ul className="copycode_header">
                                <li>API CODE</li>
                                <li @click="copyCode">Copy Code</li>
                              </ul>
                              <div class="copy_code_body">
                                import fs from 'fs';
                                import path from 'path';
                                import { create, IPFSHTTPClient } from 'ipfs-http-client';
                                import { ethers } from 'ethers';
                                import { ApiPromise, WsProvider } from '@polkadot/api';
                                import { typesBundleForPolkadot } from '@crustio/type-definitions';
                                import { Keyring } from '@polkadot/keyring';

                                const crustChainEndpoint = 'wss://rpc.crust.network'; // More endpoints: https://github.com/crustio/crust-apps/blob/master/packages/apps-config/src/endpoints/production.ts#L9
                                const ipfsW3GW = 'https://crustipfs.xyz'; // More web3 authed gateways: https://github.com/crustio/ipfsscan/blob/main/lib/constans.ts#L29
                                const crustSeeds = 'xxx xxx xxx xxx xxx xxx xxx xxx xxx xxx xxx xxx'; // Create account(seeds): https://wiki.crust.network/docs/en/crustAccount
                                const api = new ApiPromise({
                                    provider: new WsProvider(crustChainEndpoint),
                                    typesBundle: typesBundleForPolkadot,
                                });

                                main();

                                async function main() {
                                    // I. Upload file to IPFS
                                    // 1. Read file
                                    const filePath = 'sampleFile.txt';
                                    const fileContent = await fs.readFileSync(path.resolve(__dirname, filePath));

                                    // 2. [Local] Create IPFS instance
                                    const ipfsLocal = await create({ url: 'http://localhost:5001' });

                                    // 2. [Gateway] Create IPFS instance
                                    // Now support: ethereum-series, polkadot-series, solana, elrond, flow, near, ...
                                    // Let's take ethereum as example
                                    const pair = ethers.Wallet.createRandom();
                                    const sig = await pair.signMessage(pair.address);
                                    const authHeaderRaw = `eth-${pair.address}:${sig}`;
                                    const authHeader = Buffer.from(authHeaderRaw).toString('base64');
                                    const ipfsRemote = create({
                                        url: `${ipfsW3GW}/api/v0`,
                                        headers: {
                                            authorization: `Basic ${authHeader}`
                                        }
                                    });

                                    // 3. Add IPFS
                                    const rst = await addFile(ipfsRemote, fileContent); // Or use IPFS local
                                    console.log(rst);

                                    // II. Place storage order
                                    await placeStorageOrder(rst.cid, rst.size);
                                    // III. [OPTIONAL] Add prepaid
                                    // Learn what's prepard for: https://wiki.crust.network/docs/en/DSM#3-file-order-assurance-settlement-and-discount
                                    const addedAmount = 100; // in pCRU, 1 pCRU = 10^-12 CRU
                                    await addPrepaid(rst.cid, addedAmount);

                                    // IV. Query storage status
                                    // Query forever here ...
                                    while (true) {
                                        const orderStatus: any = (await getOrderState(rst.cid)).toJSON();
                                        console.log('Replica count: ', orderStatus['reported_replica_count']); // Print the replica count
                                        await new Promise(f => setTimeout(f, 1500)); // Just wait 1.5s for next chain-query
                                    }
                                }

                                async function addFile(ipfs: IPFSHTTPClient, fileContent: any) {
                                    // 1. Add file to ipfs
                                    const cid = await ipfs.add(fileContent);

                                    // 2. Get file status from ipfs
                                    const fileStat = await ipfs.files.stat("/ipfs/" + cid.path);

                                    return {
                                        cid: cid.path,
                                        size: fileStat.cumulativeSize
                                    };
                                }

                                async function placeStorageOrder(fileCid: string, fileSize: number) {
                                    // 1. Construct place-storage-order tx
                                    const tips = 0;
                                    const memo = '';
                                    const tx = api.tx.market.placeStorageOrder(fileCid, fileSize, tips, memo);

                                    // 2. Load seeds(account)
                                    const kr = new Keyring({ type: 'sr25519' });
                                    const krp = kr.addFromUri(crustSeeds);

                                    // 3. Send transaction
                                    await api.isReadyOrError;
                                    return new Promise((resolve, reject) => {
                                        tx.signAndSend(krp, ({events = [], status}) => {
                                            console.log(`💸  Tx status: ${status.type}, nonce: ${tx.nonce}`);

                                            if (status.isInBlock) {
                                                events.forEach(({event: {method, section}}) => {
                                                    if (method === 'ExtrinsicSuccess') {
                                                        console.log(`✅  Place storage order success!`);
                                                        resolve(true);
                                                    }
                                                });
                                            } else {
                                                // Pass it
                                            }
                                        }).catch(e => {
                                            reject(e);
                                        })
                                    });
                                }

                                async function addPrepaid(fileCid: string, amount: number) {
                                    // 1. Construct add-prepaid tx
                                    const tx = api.tx.market.addPrepaid(fileCid, amount);

                                    // 2. Load seeds(account)
                                    const kr = new Keyring({ type: 'sr25519' });
                                    const krp = kr.addFromUri(crustSeeds);

                                    // 3. Send transaction
                                    await api.isReadyOrError;
                                    return new Promise((resolve, reject) => {
                                        tx.signAndSend(krp, ({events = [], status}) => {
                                            console.log(`💸  Tx status: ${status.type}, nonce: ${tx.nonce}`);

                                            if (status.isInBlock) {
                                                events.forEach(({event: {method, section}}) => {
                                                    if (method === 'ExtrinsicSuccess') {
                                                        console.log(`✅  Add prepaid success!`);
                                                        resolve(true);
                                                    }
                                                });
                                            } else {
                                                // Pass it
                                            }
                                        }).catch(e => {
                                            reject(e);
                                        })
                                    });
                                }

                                async function getOrderState(cid: string) {
                                    await api.isReadyOrError;
                                    return await api.query.market.filesV2(cid);
                                }
                              </div>
                              <div v-if="copyStatus" class="copy_status">{{ copyStatus }}</div>
                            </div>
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
      ],
      copyStatus: null, // Add this line to merge both data properties
    };
  },
  methods: {
    toggleTabs: function (tabNumber) {
      this.openTab = tabNumber;
    },
    copyCode() {
      const codeBody = this.$el.querySelector('.copy_code_body');
      const codeToCopy = codeBody.innerText;

      const textArea = document.createElement('textarea');
      textArea.value = codeToCopy;
      document.body.appendChild(textArea);
      textArea.select();

      try {
        document.execCommand('copy');
        this.copyStatus = 'Code copied to clipboard!';
      } catch (err) {
        console.error('Unable to copy code', err);
        this.copyStatus = 'Copy failed. Please try again.';
      }

      document.body.removeChild(textArea);

      // Clear the status message after a few seconds
      setTimeout(() => {
        this.copyStatus = null;
      }, 3000);
    },
  },
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