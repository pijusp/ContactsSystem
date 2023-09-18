<template>
    <div class="px-4 py-16 sm:px-6 lg:px-8 bg-white rounded-md h-5/6">
        <div class="max-w-lg mx-8">
            <p class="text-center text-5xl font-medium leading-14">
                Admin prisijungimas
            </p>
            <form
                @submit.prevent="submitForm"
                action=""
                class="mb-0 space-y-2 p-4 sm:p-6 lg:p-8 flex flex-col items-center"
            >
                <BaseInput
                    :placeholder="'Įveskite el. pašto adresą...'"
                    :inputId="'email'"
                    :inputType="'email'"
                    :label="'Elektroninis paštas'"
                    v-model="email"
                    class="w-449"
                    @input="validateEmail"
                >
                    <template #iconLeft>
                        <img
                            src="../../../assets/icons/Mail.svg"
                            alt="Mail icon"
                        />
                    </template>
                </BaseInput>
                <p v-if="!validEmail" class="text-red">
                    Neteisingas el. pašto adresas.
                </p>
                <BaseInput
                    :placeholder="'Įveskite slaptažodį...'"
                    :inputId="'password'"
                    :inputType="passInputType"
                    :label="'Slaptažodis'"
                    v-model="password"
                    class="w-449"
                    @input="validatePassword"
                >
                    <template #iconLeft>
                        <img
                            src="../../../assets/icons/Lock.svg"
                            alt="Lock icon"
                        />
                    </template>
                    <template #iconRight>
                        <img
                            @click="revealInput"
                            src="../../../assets/icons/Trailing Icon.svg"
                            alt="Eye icon"
                            class="hover:cursor-pointer"
                        />
                    </template>
                </BaseInput>
                <p v-if="!validPassword" class="text-red">
                    Slaptažodis turi būti bent 8 simbolių ilgio.
                </p>
                <p class="text-center text-sm text-gray-500 pt-4 pb-20">
                    Pamiršote slaptažodį?
                    <a
                        class="no-underline cursor-pointer"
                        @click="openRemindPassword"
                        >Pakeiskite slaptažodį</a
                    >
                </p>
                <BaseButton :disabled="!validForm"> Prisijungti </BaseButton>
            </form>
        </div>
    </div>
</template>

<script>
import BaseInput from "../base-models/BaseInput.vue";
import BaseButton from "../base-models/BaseButton.vue";
import router from "../../../router/index";
import toastMixin from "../../mixins/toastMixin";
import { mapActions, mapMutations, mapGetters } from "vuex";
export default {
    data() {
        return {
            email: "",
            password: "",
            passInputType: "password",
            validEmail: true,
            validPassword: true,
            validForm: true,
            notificationDelay: 3000,
            emailTimer: null,
            passwordTimer: null,
        };
    },
    mixins: [toastMixin],
    components: {
        BaseInput,
        BaseButton,
    },
    methods: {
        ...mapActions(["doLogin"]),
        ...mapMutations(["SET_REMIND_PASSWORD_OPEN"]),
        ...mapGetters(["getCurrentUser"]),
        openRemindPassword() {
            this.SET_REMIND_PASSWORD_OPEN();
        },
        revealInput() {
            console.log("revealInput");
            if (this.passInputType === "password") {
                this.passInputType = "text";
            } else {
                this.passInputType = "password";
            }
        },
        validateEmail() {
            clearTimeout(this.emailTimer);

            this.emailTimer = setTimeout(() => {
                this.validEmail = /\S+@\S+\.\S+/.test(this.email);

                if (!this.validEmail) {
                    this.showToast(
                        "Please use a valid email address!",
                        "warning"
                    );
                }
            }, this.notificationDelay);
        },

        validatePassword() {
            clearTimeout(this.passwordTimer);

            this.passwordTimer = setTimeout(() => {
                this.validPassword = this.password.length >= 8;

                if (!this.validPassword) {
                    this.showToast(
                        "Password must be at least 8 characters long!",
                        "warning"
                    );
                }
            }, this.notificationDelay);
        },
        validateForm() {
            this.validateEmail();
            this.validatePassword();
            if (this.validEmail && this.validPassword) {
                this.validForm = true;
            } else {
                this.validForm = false;
            }
        },
        async submitForm() {
            if (this.validForm) {
                try {
                    await this.doLogin({
                        email: this.email,
                        password: this.password,
                    });

                    if (this.getCurrentUser) {
                        this.showToast(
                            "Logged in successfully! Welcome!",
                            "success"
                        );
                        setTimeout(() => {
                            router.push("/employee-management");
                            router.go(0);
                        }, 1500);
                    } else {
                        this.showToast(
                            "Login failed. Please check your credentials.",
                            "error"
                        );
                    }
                } catch (error) {
                    console.error("Login error:", error);

                    this.showToast(
                        `An error occurred during login: ${error.message}`,
                        "error"
                    );
                }
            } else {
                this.showToast(
                    "Please fill out the form correctly.",
                    "warning"
                );
            }
        },
    },
};
</script>

<style scoped></style>
