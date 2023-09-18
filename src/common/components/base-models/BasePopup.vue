<template>
    <md-dialog
        :md-active.sync="showPopup"
        md-click-outside-to-close
        class="flex flex-col"
    >
        <div class="max-w-449">
            <header class="font-medium text-xl pt-4 px-4">
                <slot name="header"></slot>
            </header>
            <p class="p-4">
                <slot name="content"></slot>
            </p>
            <div class="flex justify-end">
                <slot name="actions"></slot>
            </div>
        </div>
    </md-dialog>
</template>

<script>
export default {
    name: "PopupCustom",
    data: () => ({
        showPopup: false,
    }),
};
</script>

<style scoped></style>
