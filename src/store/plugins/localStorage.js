export default (store) => {
    // Initialize currentUser from localStorage when the app starts
    const currentUser = localStorage.getItem("currentUser");
    if (currentUser) {
        store.commit("SET_CURRENT_USER", JSON.parse(currentUser));
    }

    // Watch for changes to the currentUser state and save it to localStorage
    store.subscribe((mutation, state) => {
        if (mutation.type === "SET_CURRENT_USER") {
            localStorage.setItem(
                "currentUser",
                JSON.stringify(state.currentUser)
            );
        }
    });
};
