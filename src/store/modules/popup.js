export default {
    state: {
        popupOpen: false,
    },
    mutations: {
        SET_POPUP_OPEN: (state) => (state.popupOpen = true),
        SET_POPUP_CLOSED: (state) => (state.popupOpen = false),
    },
    getters: {
        getPopupOpen: (state) => state.popupOpen,
    },
    actions: {
        openPopup({ commit }) {
            commit("SET_POPUP_OPEN");
        },
        closePopup({commit}){
            commit("SET_POPUP_CLOSED");
        }

    },
};
