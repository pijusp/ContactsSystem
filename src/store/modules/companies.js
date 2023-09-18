import PocketBase from "pocketbase";

const pb = new PocketBase("http://127.0.0.1:8090");

pb.autoCancellation(false);

export default {
    state: {
        companies: [],
        companiesSum: 0,
    },
    mutations: {
        SET_COMPANIES(state, companies) {
            state.companies = companies;
        },
        SET_COMPANIES_SUM(state, companiesSum) {
            state.companiesSum = companiesSum;
        },
    },
    getters: {
        getCompanies: (state) => {
            return state.companies;
        },
        getCompaniesSum: (state) => {
            return state.companiesSum;
        },
    },
    actions: {
        async FETCH_COMPANIES({ commit, state }) {
            try {
                const companies = await pb
                    .collection("companies")
                    .getFullList();
                console.log(companies);
                commit("SET_COMPANIES", companies);
                commit("SET_COMPANIES_SUM", companies.length);
            } catch (error) {
                // Handle error
                console.error("Error loading companies:", error);
            }
        },
    },
};
