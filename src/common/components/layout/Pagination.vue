<template>
    <div class="flex justify-center mt-5 space-x-5">
        <button
            @click="goToPreviousPage"
            :disabled="currentPage === 1"
            class="bg-blue w-72 rounded-md flex space-x-2 items-center justify-start shadow-md hover:bg-dark-blue p-1"
        >
            <img src="../../../assets/icons/Double Left.svg" />
            <p class="text-white font-medium text-base">PRAEITAS PUSLAPIS</p>
        </button>
        <button
            @click="goToNextPage"
            :disabled="currentPage === totalPages"
            class="bg-blue w-72 rounded-md flex space-x-2 items-center shadow-md hover:bg-dark-blue p1"
        >
            <p class="text-white font-medium text-base ml-3">KITAS PUSLAPIS</p>
            <img src="../../../assets/icons/Double Right.svg" />
        </button>
    </div>
</template>

<script>
export default {
    props: {
        // currentPage: Number,
        // totalPages: Number,
    },
    methods: {
        goToPreviousPage() {
            if (this.currentPage > 1) {
                this.$emit("page-change", this.currentPage - 1);
            }
        },
        goToNextPage() {
            if (this.currentPage < this.totalPages) {
                this.$emit("page-change", this.currentPage + 1);
            }
        },
    },
};
</script>

<style scoped></style>
