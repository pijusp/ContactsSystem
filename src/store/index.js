import Vue from "vue";
import Vuex from "vuex";
import contacts from "./modules/contacts";
import offices from "./modules/offices";
import companies from "./modules/companies";
import departments from "./modules/departments";
import divisions from "./modules/divisions";
import groups from "./modules/groups";
import auth from "./modules/auth";
import popup from "./modules/popup";
import modal from "./modules/modal";
import companiesActions from "./modules/actions/companiesActions";
import contactsAPI from "./plugins/contactsAPI";

Vue.use(Vuex);

export default new Vuex.Store({
    modules: {
        contacts,
        offices,
        companies,
        departments,
        divisions,
        groups,
        auth,
        popup,
        modal,
        companiesActions,
    },
    plugins: [contactsAPI],
});
