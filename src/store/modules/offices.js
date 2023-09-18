import PocketBase from "pocketbase";

const pb = new PocketBase("http://127.0.0.1:8090");

pb.autoCancellation(false);

export default {
    state: {
        offices: [],
        officesForCards: [],
    },
    mutations: {
        SET_OFFICES(state, offices) {
            state.offices = offices;
        },
        SET_OFFICES_FOR_CARDS(state, officesForCards) {
            state.officesForCards = officesForCards;
        },
    },
    getters: {
        getOffices: (state) => {
            return state.offices;
        },
        getOfficesForCards: (state) => {
            return state.officesForCards;
        },
        getOfficeNameById: (state) => (officeId) => {
            return state.offices.find((office) => office.id === officeId)?.name;
        },
    },
    actions: {
        async FETCH_OFFICES_FOR_CARDS({ commit, state }) {
            try {
                const offices = await pb.collection("offices").getFullList();

                commit("SET_OFFICES_FOR_CARDS", offices);
            } catch (error) {
                // Handle error
                console.error("Error loading offices:", error);
            }
        },
    },
};
