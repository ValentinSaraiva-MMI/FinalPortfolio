<template>
    <div class="flex justify-center mt-12 mb-2">

        <div class="relative w-max">
            <img :src="image" class="  h-[80px] w-auto sm:h-[115px] md:h-[144px] lg:h-[180px]" alt="image logiciel" />

        </div>
    </div>
</template>

<script>
export default {
    name: "cardInspiration",
    components: {},
    props: {
        image: {
            type: String,
        },

        nom: {
            type: String,
        },
    },
};
</script>
