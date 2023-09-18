export default {
    state: {
        modalIsOpen: false,
        modalMode: "",
        modalType: "",
    },
    mutations: {
        SET_MODAL_IS_OPEN: (state) => (state.modalIsOpen = true),
        SET_MODAL_IS_CLOSED: (state) => (state.modalIsOpen = false),
        SET_MODAL_MODE: (state, modalMode) => (state.modalMode = modalMode),
        SET_MODAL_TYPE: (state, modalType) => (state.modalType = modalType),
    },
    getters: {
        getModalOpen: (state) => state.modalIsOpen,
        getModalMode: (state) => state.modalMode,
        getModalType: (state) => state.modalType,
    },
    actions: {
        openModal({ commit }) {
            commit("SET_MODAL_IS_OPEN");
        },
        closeModal({ commit }) {
            commit("SET_MODAL_IS_CLOSED");
        },
        fetchModalMode({ commit }, modalMode) {
            commit("SET_MODAL_MODE", modalMode);
        },
        fetchModalType({ commit }, modalType) {
            commit("SET_MODAL_TYPE", modalType);
        },
    },
};
