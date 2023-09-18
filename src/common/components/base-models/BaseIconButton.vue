<template>
    <button
        class="bg-blue rounded-3xl shadow-md shadow-slate-900 h-11 w-11 justify-center items-center hover:bg-dark-blue"
        @click="$emit('click')"
    >
        <slot></slot>
    </button>
</template>

<script>
export default {
    data() {
        return {};
    },
};
</script>

<style scoped></style>
