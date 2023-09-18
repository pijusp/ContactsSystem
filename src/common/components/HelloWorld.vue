<template>
    <p class="text-3xl font-bold underline to-blue-600">{{ msg }}</p>
</template>

<script>
export default {
    name: "HelloWorld",
    props: {
        message: {
            type: String,
            default: "World",
        },
    },
    data() {
        return {
            msg: this.message,
        };
    },
};
</script>
