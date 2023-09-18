import PocketBase from "pocketbase";

const pb = new PocketBase("http://127.0.0.1:8090");

pb.autoCancellation(false);

export default {
    state: {
        groups: [],
        groupsForCards: [],
    },
    mutations: {
        SET_GROUPS(state, groups) {
            state.groups = groups;
        },
        SET_GROUPS_FOR_CARDS(state, groupsForCards) {
            state.groupsForCards = groupsForCards;
        },
    },
    getters: {
        getGroups: (state) => {
            return state.groups;
        },
        getGroupsForCards: (state) => {
            return state.groupsForCards;
        },
    },
    actions: {
        async FETCH_GROUPS_FOR_CARDS({ commit, state }) {
            try {
                const groups = await pb
                    .collection("groups")
                    .getFullList();

                commit("SET_GROUPS_FOR_CARDS", groups);
            } catch (error) {
                // Handle error
                console.error("Error loading groups:", error);
            }
        },
    },
};
