<template>
    <div class="w-screen px-24 pt-8">
        <h2 class="text-5xl font-light mb-16">
            Detalesnė kontakto informacija:
        </h2>
        <div class="flex items-center pl-2">
            <div class="shrink-0">
                <img
                    src="../assets/icons/Test Account.svg"
                    alt="Test Account"
                    class="w-24 h-24 pr-7"
                />
            </div>
            <div>
                <h3 class="font-normal text-4xl">
                    <slot name="name">{{
                        `${getContact.name} ${getContact.surname}`
                    }}</slot>
                </h3>
                <h4 class="text-2xl leading-6">
                    <slot name="position"
                        >Pozicija: {{ getContact.position }}</slot
                    >
                </h4>
            </div>
        </div>
        <md-card md-with-hover class="flex mt-7 space-x-96 pb-7">
            <div class="flex flex-col space-y-10 mt-14 ml-8 mb-6">
                <div>
                    <h4 class="text-2xl">Kontaktinės detalės:</h4>
                    <div class="w-full h-px bg-gray"></div>
                </div>
                <p class="text-xl">
                    Elektroninis paštas: {{ getContact.email }}
                </p>
                <p class="text-xl">
                    Telefono numeris: {{ getContact.phone_number }}
                </p>
            </div>
            <div class="flex flex-col space-y-10 mt-14 ml-8">
                <div>
                    <h4 class="text-2xl">Kompanijos detalės:</h4>
                    <div class="w-full h-px bg-gray"></div>
                </div>
                <p class="text-xl">
                    Kompanija:
                    {{
                        getCompanies.filter(
                            (company) => company.id === getContact.company_id
                        )[0]?.name
                    }}
                </p>
                <p class="text-xl">
                    Būstinė:
                    {{
                        getOfficesForCards.filter(
                            (office) => office.id === getContact.office_id
                        )[0]?.name
                    }}
                </p>
                <p class="text-xl">
                    Departamentas:
                    {{
                        getDepartmentsForCards.filter(
                            (department) =>
                                department.id === getContact.department_id
                        )[0]?.name
                    }}
                </p>
                <p class="text-xl">
                    Divizija:
                    {{
                        getDivisionsForCards.filter(
                            (division) => division.id === getContact.division_id
                        )[0]?.name
                    }}
                </p>
                <p class="text-xl">
                    Grupė:
                    {{
                        getGroupsForCards.filter(
                            (group) => group.id === getContact.group_id
                        )[0]?.name
                    }}
                </p>
            </div>
        </md-card>
    </div>
</template>

<script>
import { mapActions, mapGetters } from "vuex";

export default {
    name: "ViewContact",
    props: ["id"],
    computed: {
        ...mapGetters([
            "getContact",
            "getCompanies",
            "getOfficesForCards",
            "getDepartmentsForCards",
            "getDivisionsForCards",
            "getGroupsForCards",
        ]),
    },
    created() {
        this.FETCH_CONTACT(this.$route.params.id);
        this.FETCH_COMPANIES();
        this.FETCH_OFFICES_FOR_CARDS();
        this.FETCH_DEPARTMENTS_FOR_CARDS();
        this.FETCH_DIVISIONS_FOR_CARDS();
        this.FETCH_GROUPS_FOR_CARDS();
    },
    methods: {
        ...mapActions([
            "FETCH_CONTACT",
            "FETCH_COMPANIES",
            "FETCH_OFFICES_FOR_CARDS",
            "FETCH_DEPARTMENTS_FOR_CARDS",
            "FETCH_DIVISIONS_FOR_CARDS",
            "FETCH_GROUPS_FOR_CARDS",
        ]),
    },
};
</script>

<style scoped>
/* Add styling for the detailed contact view */
</style>
