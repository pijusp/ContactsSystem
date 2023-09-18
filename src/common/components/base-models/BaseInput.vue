<template>
    <div class="input-wrap p-6 max-w-449 flex flex-col">
        <label class="text-base text-zinc" v-if="label">{{ label }}</label>
        <div class="relative p-4 flex space-x-4 rounded-sm bg-gray">
            <div class="icon-left">
                <slot name="iconLeft"> </slot>
            </div>
            <input
                :type="inputType"
                :value="value"
                :placeholder="placeholder"
                @input="updateValue"
                @change="changeValue"
                v-bind="$attrs"
                :id="inputId"
                class="w-full bg-gray-input outline-none text-base"
            />
            <div class="icon-right">
                <slot name="iconRight"> </slot>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    props: {
        label: {
            type: [String, Boolean],
            default: false,
        },
        value: {
            type: String,
            default: "",
        },
        placeholder: {
            type: String,
            default: "",
        },
        inputId: {
            type: String,
            default: "",
        },
        inputType: {
            type: String,
            default: "text",
        },
    },
    methods: {
        updateValue(event) {
            this.$emit("input", event.target.value);
        },
        changeValue(event) {
            this.$emit("change", event.target.value);
        },
    },
};
</script>

<style scoped></style>
