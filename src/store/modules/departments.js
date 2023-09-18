import PocketBase from "pocketbase";

const pb = new PocketBase("http://127.0.0.1:8090");

pb.autoCancellation(false);

export default {
    state: {
        departments: [],
        departmentsForCards: [],
    },
    mutations: {
        SET_DEPARTMENTS(state, departments) {
            state.departments = departments;
        },
        SET_DEPARTMENTS_FOR_CARDS(state, departmentsForCards) {
            state.departmentsForCards = departmentsForCards;
        },
    },
    getters: {
        getDepartments: (state) => {
            return state.departments;
        },
        getDepartmentsForCards: (state) => {
            return state.departmentsForCards;
        },
    },
    actions: {
        async FETCH_DEPARTMENTS_FOR_CARDS({ commit, state }) {
            try {
                const departments = await pb
                    .collection("departments")
                    .getFullList();

                commit("SET_DEPARTMENTS_FOR_CARDS", departments);
            } catch (error) {
                // Handle error
                console.error("Error loading departments:", error);
            }
        },
    },
};
