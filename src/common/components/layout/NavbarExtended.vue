<template>
    <nav class="bg-blue w-screen">
        <div class="h-30 px-4 py-7 mx-auto flex justify-between items-center">
            <div
                class="flex items-center space-x-20 text-2xl leading-6 nav-links"
            >
                <router-link to="/">
                    <img
                        src="../../../assets/icons/TELTONIKA-LOGO-WHITE.svg"
                        alt="Company Logo"
                        class="md-image h-12 pl-12"
                        active-class="active-link"
                    />
                </router-link>
                <router-link
                    to="/employee-management"
                    class="text-white"
                    active-class="active-link"
                    >Kontaktai</router-link
                >
                <router-link
                    to="/company-management"
                    class="text-white"
                    active-class="active-link"
                    >Įmonės</router-link
                >
                <router-link
                    to="/structure-management"
                    class="text-white"
                    active-class="active-link"
                    >Struktūra</router-link
                >
                <router-link
                    to="/office-management"
                    class="text-white"
                    active-class="active-link"
                    >Ofisai</router-link
                >
                <router-link
                    to="/admin-management"
                    class="text-white"
                    active-class="active-link"
                    >Paskyros</router-link
                >
            </div>

            <md-menu md-direction="bottom-end">
                <BaseIconButton
                    md-menu-trigger
                    class="cursor-pointer text-white md:flex items-center space-x-1"
                >
                    <img src="../../../assets/icons/Male User.svg" />
                </BaseIconButton>
                <md-menu-content
                    class="bg-white p-0 rounded-md shadow-md mt-24"
                    md-width="48"
                >
                    <md-list-item
                        class="p-0 max-h-10 cursor-pointer hover:bg-gray"
                    >
                        <p class="text-sm">Priminti slaptažodį</p>
                        <img
                            src="../../../assets/icons/Vector.svg"
                            class="pl-2 ml-2"
                        />
                    </md-list-item>
                    <md-list-item
                        @click="doLogout"
                        class="p-0 max-h-10 cursor-pointer hover:bg-gray text-sm"
                    >
                        <p>Atsijungti</p>
                    </md-list-item>
                </md-menu-content>
            </md-menu>
        </div>
    </nav>
</template>

<script>
import { mapActions } from "vuex";
import BaseIconButton from "../base-models/BaseIconButton.vue";
import toastMixin from "../../mixins/toastMixin";
export default {
    components: {
        BaseIconButton,
    },

    name: "NavbarExtended",
    data() {
        return {};
    },
    mixins: [toastMixin],
    methods: {
        ...mapActions(["doLogout"]),
        async performLogout() {
            try {
                await this.doLogout();
                this.showToast(
                    "Logged out successfully! See you soon!",
                    "success"
                );
            } catch (error) {
                this.showToast(`Error while logging out: ${error}`, "warning");
            }
        },
    },
    actions: {},
};
</script>

<style scoped>
.nav-links a:not(.md-button) {
    color: white !important;
}
.md-list-item-container {
    font-size: 14px !important;
    padding: 0px 4px !important;
}
.active-link {
    border-bottom: 2px solid white;
}
</style>
