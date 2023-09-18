import PocketBase from "pocketbase";

const pb = new PocketBase("http://127.0.0.1:8090");

pb.autoCancellation(false);

export default {
    state: {
        divisions: [],
        divisionsForCards: [],
    },
    mutations: {
        SET_DIVISIONS(state, divisions) {
            state.divisions = divisions;
        },
        SET_DIVISIONS_FOR_CARDS(state, divisionsForCards) {
            state.divisionsForCards = divisionsForCards;
        },
    },
    getters: {
        getDivisions: (state) => {
            return state.divisions;
        },
        getDivisionsForCards: (state) => {
            return state.divisionsForCards;
        },
    },
    actions: {
        async FETCH_DIVISIONS_FOR_CARDS({ commit, state }) {
            try {
                const divisions = await pb
                    .collection("divisions")
                    .getFullList();

                commit("SET_DIVISIONS_FOR_CARDS", divisions);
            } catch (error) {
                // Handle error
                console.error("Error loading divisions:", error);
            }
        },
    },
};
