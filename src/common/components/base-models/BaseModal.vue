<template>
    <md-dialog
        :md-active="getModalOpen"
        @md-clicked-outside="closeModal()"
        class="h-fit mx-auto my-auto"
    >
        <div class="relative p-6 w-750">
            <header class="text-3xl pb-6 ml-10 mt-5">
                <slot name="header"></slot>
            </header>
            <component :is="determineFormComponent"></component>
            <BaseIconButton
                @click="closeModal()"
                class="absolute top-5 right-5"
            >
                <img
                    src="../../../assets/icons/Plus Math.svg"
                    class="rotate-45 pl-2 pb-1"
                />
            </BaseIconButton>
        </div>
    </md-dialog>
</template>

<script>
import { mapActions, mapGetters } from "vuex";
import BaseIconButton from "./BaseIconButton.vue";
import CompanyForm from "../companies/CompanyForm.vue";

export default {
    components: {
        BaseIconButton,
        CompanyForm,
    },
    computed: {
        ...mapGetters(["getModalOpen", "getModalMode", "getModalType"]),
        determineFormComponent() {
            if (this.getModalType === "company") {
                return CompanyForm;
            }
        },
    },
    methods: {
        ...mapActions(["closeModal", "openModal"]),
    },
};
</script>

<style scoped></style>
