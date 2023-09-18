<template>
    <div id="app">
        <component
            :is="header"
            v-if="$router.currentRoute.path !== '/login'"
        ></component>

        <router-view></router-view>
    </div>
</template>

<script>
import Navbar from "./common/components/layout/Navbar.vue";
import NavbarExtended from "./common/components/layout/NavbarExtended.vue";

export default {
    components: {
        Navbar,
        NavbarExtended,
    },
    data() {
        return {
            searchValue: "",
        };
    },
    computed: {
        header() {
            if (localStorage.getItem("pocketbase_auth")) {
                return NavbarExtended;
            } else {
                return Navbar;
            }
        },
    },
};
</script>

<style></style>
