<template>
    <div
        class="max-w-405 w-96 relative flex items-center h-14 rounded-sm focus-within:shadow-lg overflow-hidden p-4 bg-gray"
    >
        <div class="grid place-items-center h-full">
            <img src="../../../assets/icons/Search.svg" class="text-gray-400" />
        </div>

        <input
            class="h-full w-full outline-none text-base text-gray-700 bg-gray-input focus:outline-none pl-3"
            type="text"
            name="search-bar"
            placeholder="Ieškoti kontakto.."
        />
    </div>
</template>

<script>
export default {
    data() {
        return {};
    },
};
</script>

<style scoped></style>
