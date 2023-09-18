<template>
    <div>
        <md-table v-model="getContacts" md-card @click="$emit('click')">
            <md-table-row>
                <md-table-head class="custom-table-header"
                    >Vardas ir Pavardė</md-table-head
                >
                <md-table-head class="custom-table-header"
                    >Pozicija</md-table-head
                >
                <md-table-head class="custom-table-header"
                    >Telefono numeris</md-table-head
                >
                <md-table-head class="custom-table-header"
                    >Elektroninis paštas</md-table-head
                >
                <md-table-head class="custom-table-header"
                    >Adresas</md-table-head
                >
            </md-table-row>

            <md-table-row
                v-for="contact in getContacts"
                :key="contact.id"
                @click="getContactId(contact.id)"
            >
                <md-table-cell>{{
                    `${contact.name} ${contact.surname}`
                }}</md-table-cell>
                <md-table-cell>{{ contact.position }}</md-table-cell>
                <md-table-cell>{{ contact.phone_number }}</md-table-cell>
                <md-table-cell>{{ contact.email }}</md-table-cell>
                <md-table-cell>{{
                    getOfficesForCards.filter(
                        (office) => office.id === contact.office_id
                    )[0]?.name
                }}</md-table-cell>
            </md-table-row>
        </md-table>
    </div>
</template>

<script>
import { mapActions, mapGetters } from "vuex";
export default {
    name: "TableGrid",
    data: () => ({}),
    methods: {
        ...mapActions(["FETCH_OFFICES_FOR_CARDS", "FETCH_CONTACT"]),
        getContactId(id) {
            console.log("Card clicked");

            this.$router.push(`/view-contact/${id}`);
        },
    },
    computed: {
        ...mapGetters(["getContacts", "getOfficesForCards"]),
    },
    created() {
        this.FETCH_OFFICES_FOR_CARDS();
    },
};
</script>
<style scoped>
.custom-table-header {
    font-size: 20px;
    font-weight: bold;
    line-height: 24px;
    color: black !important;
}
</style>
