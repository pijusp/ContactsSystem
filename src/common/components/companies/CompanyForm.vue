<template>
    <form
        @submit.prevent="
            submitForm();
            validateForm();
        "
        class="grid grid-cols-1 gap-4"
    >
        <BaseInput
            :placeholder="'Įveskite įmonės pavadinimą...'"
            :inputId="'įmonė'"
            v-model="name"
            @input="validateName"
            :label="'Įmonės pavadinimas'"
            class="ml-5"
        >
        </BaseInput>
        <p v-if="!validName" class="text-red pl-10">
            Neteisingas įmonės pavadinimo formatas.
        </p>
        <div class="flex justify-start ml-10 pb-10">
            <BaseButton
                :class="{ 'disabled-button': isSubmitDisabled }"
                :disabled="isSubmitDisabled"
            >
                Pridėti
            </BaseButton>
        </div>
    </form>
</template>

<script>
import BaseInput from "../base-models/BaseInput.vue";
import BaseButton from "../base-models/BaseButton.vue";
import toastMixin from "../../mixins/toastMixin";
import { mapActions, mapGetters } from "vuex";
export default {
    components: {
        BaseInput,
        BaseButton,
    },
    mixins: [toastMixin],
    data() {
        return {
            name: "",
            validName: true,
            validForm: true,
            notificationDelay: 3000,
            nameTimer: null,
            isSubmitDisabled: true, // Set it to true by default
        };
    },
    computed: {},
    methods: {
        ...mapActions(["addNewCompany", "closeModal"]),
        validateName() {
            clearTimeout(this.nameTimer);

            this.nameTimer = setTimeout(() => {
                this.validName = this.name.length >= 5;
                this.isSubmitDisabled = !this.validName; // Update isSubmitDisabled
                if (!this.validName) {
                    this.showToast(
                        "Company name must be at least 5 characters",
                        "warning"
                    );
                }
            }, this.notificationDelay);
        },
        validateForm() {
            this.validateName();
            if (this.validName) {
                return (this.validForm = true);
            } else this.validName = false;
        },
        async submitForm() {
            if (!this.validForm) return;
            if (this.validForm) {
                try {
                    await this.addNewCompany({
                        name: this.name,
                    });
                    this.showToast("Company added successfully", "success");
                    this.name = "";
                    this.closeModal();
                } catch (error) {
                    this.showToast("Company submission failed", "error");
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

<style scoped>
.disabled-button {
    background-color: #ccc; /* Change the background color */
    color: #666; /* Change the text color */
    cursor: not-allowed; /* Change the cursor */
}
</style>
