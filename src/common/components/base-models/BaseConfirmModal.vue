<template>
    <md-dialog md-with-hover class="max-w-1152">
        <div class="flex flex-col pb-4 pr-4 pt-8 pl-12">
            <header class="pt-4 pb-8 text-4xl leading-12">
                <slot name="header"></slot>
            </header>

            <p class="text-3xl pb-4 leading-9">
                <slot name="content"></slot>
            </p>

            <div class="justify-end text-3xl leading-9 font-normal">
                <slot name="actions"></slot>
            </div>
        </div>
    </md-dialog>
</template>

<script>
export default {
    name: "ConfirmModal",
    data() {
        return {};
    },
};
</script>

<style scoped></style>
