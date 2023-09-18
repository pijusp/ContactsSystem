<template>
    <div class="flex pt-1 pb-2 space-x-10">
        <BaseFilter>
            <template #filter-name>Įmonė</template>
            <template #filter>
                <select
                    v-model="selectedCompany"
                    class="border-2 border-gray rounded-lg h-9 w-60 text-zinc text-base"
                >
                    <option :value="null">Filtruoti įmones..</option>
                    <option
                        v-for="company in companies"
                        :key="company.id"
                        :value="company.id"
                    >
                        {{ company.name }}
                    </option>
                </select>
            </template>
        </BaseFilter>
        <BaseFilter>
            <template #filter-name>Padalinys</template>
            <template #filter>
                <select
                    v-model="selectedDivision"
                    class="border-2 border-gray rounded-lg h-9 w-60 text-zinc text-base"
                >
                    <option :value="null">Filtruoti divizijas..</option>
                    <option
                        v-for="company in companies"
                        :key="company.id"
                        :value="company.id"
                    >
                        {{ company.name }}
                    </option>
                </select>
            </template>
        </BaseFilter>
        <BaseFilter>
            <template #filter-name>Skyrius</template>
            <template #filter>
                <select
                    v-model="selectedDepartment"
                    class="border-2 border-gray rounded-lg h-9 w-60 text-zinc text-base"
                >
                    <option :value="null">Filtruoti departamentus</option>
                    <option
                        v-for="company in companies"
                        :key="company.id"
                        :value="company.id"
                    >
                        {{ company.name }}
                    </option>
                </select>
            </template>
        </BaseFilter>
        <BaseFilter>
            <template #filter-name>Grupė</template>
            <template #filter>
                <select
                    v-model="selectedGroup"
                    class="border-2 border-gray rounded-lg h-9 w-60 text-zinc text-base"
                >
                    <option :value="null">Filtruoti grupes</option>
                    <option
                        v-for="company in companies"
                        :key="company.id"
                        :value="company.id"
                    >
                        {{ company.name }}
                    </option>
                </select>
            </template>
        </BaseFilter>
        <BaseFilter>
            <template #filter-name>Ofisas</template>
            <template #filter>
                <select
                    v-model="selectedOffice"
                    class="border-2 border-gray rounded-lg h-9 w-60 text-zinc text-base"
                >
                    <option :value="null">Filtruoti adresus</option>
                    <option
                        v-for="company in companies"
                        :key="company.id"
                        :value="company.id"
                    >
                        {{ company.name }}
                    </option>
                </select>
            </template>
        </BaseFilter>
    </div>
</template>

<script>
import BaseFilter from "../base-models/BaseFilter.vue";
export default {
    components: {
        BaseFilter,
    },
    data() {
        return {
            selectedCompany: null, // Initialize the selected company
            companies: [
                { id: 1, name: "Company A" },
                { id: 2, name: "Company B" },
                { id: 3, name: "Company C" },
            ],
        };
    },
};
</script>

<style scoped></style>
