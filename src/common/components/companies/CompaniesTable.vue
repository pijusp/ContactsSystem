<template>
    <md-card class="mt-20">
        <div class="flex bg-gray justify-between">
            <p class="text-lg px-16">Įmonės pavadinimas</p>
            <p class="text-lg px-60">Veiksmas</p>
        </div>
        <ul class="flex flex-col justify-center space-y-4 mt-8 mb-8">
            <li
                v-for="company in getCompanies"
                :key="company.id"
                class="text-2xl flex justify-between px-14"
            >
                <p class="">{{ company.name }}</p>
                <div class="flex space-x-4">
                    <BaseButton
                        style="border-radius: 9999px"
                        class="w-52 hover:bg-dark-blue"
                        >Redaguoti</BaseButton
                    >
                    <BaseButton
                        style="border-radius: 9999px"
                        class="w-28 bg-red hover:bg-dark-red"
                        >Ištrinti</BaseButton
                    >
                </div>
            </li>
        </ul>
    </md-card>
</template>

<script>
import BaseButton from "../base-models/BaseButton.vue";
import { mapActions, mapGetters } from "vuex";
export default {
    components: {
        BaseButton,
    },
    methods: {
        ...mapActions([
            "FETCH_COMPANIES",
            "openModal",
            "fetchModalMode",
            "fetchModalType",
        ]),
    },
    computed: {
        ...mapGetters(["getCompanies"]),
    },
    created() {
        this.FETCH_COMPANIES();
    },
};
</script>

<style scoped></style>
