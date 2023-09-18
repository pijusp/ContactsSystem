<template>
    <div class="flex flex-col">
        <label class="text-base"><slot name="filter-name"></slot></label>
        <slot name="filter"></slot>
    </div>
</template>

<script>
export default {};
</script>

<style scoped></style>
