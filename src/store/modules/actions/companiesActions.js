import PocketBase from "pocketbase";

const pb = new PocketBase("http://127.0.0.1:8090");

pb.autoCancellation(false);

export default {
    state: {
        currentDeleteCompany: {},
    },
    mutations: {
        setCurrentDeleteCompany: (state, info) =>
            (state.currentDeleteCompany = info),
    },
    getters: {
        getCurrentDeleteCompany({ commit }, info) {
            commit(setCurrentDeleteCompany, info);
        },
    },
    actions: {
        async addNewCompany({ dispatch }, data) {
            const company = await pb.collection("companies").create(data);

            if (!company.id) {
                throw new Error("New company creation failed");
            }
            dispatch("FETCH_COMPANIES");
        },
    },
};
