<template>
    <div class="grid px-20 pt-9 w-screen">
        <p class="text-6xl leading-18">Įmonės</p>
        <div class="flex space-x-6 pt-5 pb-4 items-center">
            <BaseIconButton
                class="h-12 w-14"
                @click="
                    openModal();
                    fetchModalMode('create');
                    fetchModalType('company');
                "
            >
                <img src="../assets/icons/Plus Math.svg" class="md-icon" />
            </BaseIconButton>
            <p class="text-lg pl-4">Pridėti naują įmonę</p>
        </div>
        <p class="pb-2">
            Iš viso rasta: <strong>{{ getCompaniesSum }} įmonės</strong>
        </p>
        <CompaniesTable></CompaniesTable>
        <BaseModal>
            <template #header>
                <h2 v-if="getModalMode === 'create'">Pridėkite naują įmonę</h2>
                <h2 v-if="getModalMode === 'edit'">Redaguoti įmonę</h2>
            </template>
        </BaseModal>
    </div>
</template>

<script>
import BaseIconButton from "../common/components/base-models/BaseIconButton.vue";
import CompaniesTable from "../common/components/companies/CompaniesTable.vue";
import BaseModal from "../common/components/base-models/BaseModal.vue";
import { mapActions, mapGetters, mapMutations } from "vuex";
export default {
    components: {
        BaseIconButton,
        BaseModal,
        CompaniesTable,
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
        ...mapGetters(["getCompaniesSum", "getModalMode", "getModalType"]),
    },
    created() {
        this.FETCH_COMPANIES();
    },
};
</script>
