<template>
    <div class="container px-3">
        <div class="flex flex-wrap items-center -mx-3 contact__form__wrapper p-14">
            <div class="w-7/12 px-3">
                <div class="content__form__area">
                    <h3 class="mb-5">Get in touch with the team</h3>
                    <div class="contact__form__inner">
                        <UInput class="mb-5" color="transparent" variant="outline" placeholder="Email" />
                        <USelect color="transparent" variant="outline" v-model="selectQuestion" :options="question" />
                        <!-- Submit button -->
                        <button @click="handleSubmit" class="bg-[orange] min-w-[192px] text-white p-3 mt-[30px]  rounded-[6px] hover:bg-[#F97316] transition duration-300">
                            Submit
                        </button>
                    </div>
                    
                </div>
            </div>
            <div class="w-5/12 px-3">
                <img class="max-w-[400px]" src="/public/img/ipfs.png" alt="">
            </div>
        </div>
    </div>
</template>

<script setup>
const question = reactive(['Development Questions', 'Design Questions', 'Marketing Questions']);
const selectQuestion = reactive(question[0]);
const handleSubmit = () => {
    // Handle form submission logic here
    console.log('Form submitted');
    // You can perform additional actions or make API calls here
};
</script>

<style lang="scss" scoped>

</style>