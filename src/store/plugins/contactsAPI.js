import PocketBase from "pocketbase";

const pb = new PocketBase("http://127.0.0.1:8090");

const contactsAPI = (store) => {
    store.loadContacts = async function (
        collectionName,
        currentPage,
        itemsPerPage
    ) {
        currentPage = currentPage ?? 1;
        try {
            const contacts = await pb
                .collection(collectionName)
                .getList(currentPage, itemsPerPage);

            return contacts;
        } catch (error) {
            // Handle error
            console.error("Error loading contacts:", error);
        }
    };
    store.loadContact = async function (id) {
        const contact = await pb.collection("employees").getOne(id);
        return contact;
    };
};

export default contactsAPI;
