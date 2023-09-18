import PocketBase from "pocketbase";
import router from "../../router/index";

const pb = new PocketBase("http://127.0.0.1:8090");

pb.autoCancellation(false);

const storedUserData = JSON.parse(localStorage.getItem("pocketbase_auth"));

export default {
    state: {
        remindPassword: false,
        currentUser: storedUserData ? storedUserData.model : {},
    },
    mutations: {
        SET_CURRENT_USER: (state, user) => (state.currentUser = user),
        SET_REMIND_PASSWORD_OPEN: (state) => (state.remindPassword = true),
        SET_REMIND_PASSWORD_CLOSE: (state) => (state.remindPassword = false),
    },
    getters: {
        getCurrentUser: (state) => state.currentUser,
        getRemindPassword: (state) => state.remindPassword,
    },
    actions: {
        openRemindPassword({ commit }) {
            commit("SET_REMIND_PASSWORD_OPEN");
        },
        closeRemindPassword({ commit }) {
            commit("SET_REMIND_PASSWORD_CLOSE");
        },
        async doLogin({ commit }, { email, password }) {
            try {
                const response = await pb
                    .collection("users")
                    .authWithPassword(`${email}`, `${password}`);

                if (!response.record || !response.token) {
                    throw new Error(
                        "Login failed. Please check your credentials."
                    );
                }

                commit("SET_CURRENT_USER", response.record);
            } catch (error) {
                console.error("Login error:", error);
                throw error;
            }
        },

        doLogout() {
            pb.authStore.clear();
            router.push("/");
            router.go(0);
        },
    },
};
