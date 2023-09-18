<template>
    <div class="bg-dark-blue w-screen h-screen grid place-items-center mx-auto">
        <BaseIconButton
            class="h-12 w-12 bg-white hover:bg-gray-light absolute top-20 left-20"
            @click="onBack"
        >
            <img src="../assets/icons/Curved Arrow.svg" class="md-icon" />
        </BaseIconButton>
        <component :is="loginForm"></component>
    </div>
</template>

<script>
import BaseIconButton from "../common/components/base-models/BaseIconButton.vue";

import LogIn from "../common/components/auth/LogIn.vue";
import RemindPassword from "../common/components/auth/RemindPassword.vue";
import { mapMutations, mapGetters } from "vuex";
export default {
    components: {
        BaseIconButton,
        RemindPassword,
        LogIn,
    },
    methods: {
        ...mapMutations(["SET_REMIND_PASSWORD_CLOSE"]),
        closeRemindPassword() {
            this.SET_REMIND_PASSWORD_CLOSE();
        },
        onBack() {
            if (this.getRemindPassword) {
                this.closeRemindPassword();
            } else {
                this.$router.push("/");
            }
        },
    },
    computed: {
        ...mapGetters(["getRemindPassword"]),
        loginForm() {
            if (this.getRemindPassword) {
                return RemindPassword;
            } else return LogIn;
        },
    },
};
</script>

<style scoped></style>
