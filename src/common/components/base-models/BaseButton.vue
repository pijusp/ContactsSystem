<template>
    <button
        @click="onClick"
        class="flex rounded-md shadow-md shadow-slate-500 h-9 w-64 justify-center items-center text-white hover:bg-dark-blue bg-blue"
    >
        <slot></slot>
    </button>
</template>

<script>
export default {
    methods: {
        onClick() {
            this.$emit("click");
        },
    },
};
</script>

<style scoped></style>
