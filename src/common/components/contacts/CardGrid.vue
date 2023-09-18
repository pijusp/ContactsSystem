<template>
    <div class="grid grid-cols-4 grid-rows-2 gap-5 pt-3">
        <ContactContainer
            v-for="contact in getContacts"
            :key="contact.id"
            @click="getContactId(contact.id)"
        >
            <template #name>{{ contact.name }}</template>
            <template #position>{{ contact.position }}</template>
            <template #contact-information>
                <p class="text-base leading-6 tracking-wide">
                    Telefono nr: {{ contact.phone_number }}
                </p>
                <p class="text-base leading-6 tracking-wide">
                    El. paštas: {{ contact.email }}
                </p>
                <p class="text-base leading-6 tracking-wide">
                    Adresas:
                    {{
                        getOfficesForCards.filter(
                            (office) => office.id === contact.office_id
                        )[0]?.name
                    }}
                </p>
            </template>
        </ContactContainer>
    </div>
</template>

<script>
import { mapActions, mapGetters } from "vuex";
import ContactContainer from "./ContactContainer.vue";

export default {
    name: "CardGrid",
    data() {
        return {};
    },
    components: { ContactContainer },
    methods: {
        ...mapActions(["FETCH_OFFICES_FOR_CARDS", "FETCH_CONTACT"]),
        getContactId(id) {
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

<style scoped></style>
