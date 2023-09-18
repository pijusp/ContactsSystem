import PocketBase from "pocketbase";

const pb = new PocketBase("http://127.0.0.1:8090");

pb.autoCancellation(false);

export default {
    state: {
        contacts: [],
        contactsSum: 0,
        currentPage: 1,
        itemsPerPage: 25,
        contact: {},
    },
    mutations: {
        SET_CONTACTS(state, contacts) {
            state.contacts = contacts;
        },
        SET_CONTACT(state, contact) {
            state.contact = contact;
        },
        SET_CONTACTS_SUM(state, contactsSum) {
            state.contactsSum = contactsSum;
        },
        SET_CURRENT_PAGE(state, page) {
            state.currentPage = page;
        },
        SET_ITEMS_PER_PAGE(state, perPage) {
            state.itemsPerPage = perPage;
        },
    },
    getters: {
        getContacts: (state) => {
            return state.contacts;
        },
        getContact: (state) => {
            return state.contact;
        },
        getContactsSum: (state) => {
            return state.contactsSum;
        },
        getCurrentPage: (state) => state.currentPage,
    },
    actions: {
        async FETCH_CONTACTS({ commit, state }) {
            try {
                console.log("Curr page " + state.currentPage);
                const data = await this.loadContacts(
                    "employees",
                    state.currentPage,
                    state.itemsPerPage
                );

                commit("SET_CONTACTS", data.items);

                commit("SET_CONTACTS_SUM", data.totalItems);
            } catch (error) {
                // Handle error
                console.error("Error loading contacts:", error);
            }
        },
        async FETCH_CONTACT({ commit, state }, id) {
            try {
                const data = await this.loadContact(id);

                commit("SET_CONTACT", data);
            } catch (err) {
                console.error("Error loading contact");
            }
        },
    },
};
// `id="${id}"`
