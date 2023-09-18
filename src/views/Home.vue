<template>
    <div class="grid w-screen px-20 pt-8 pb-12">
        <p class="text-6xl leading-18">Kontaktų sistema</p>
        <div class="flex space-x-6 pt-5 pb-4">
            <SearchBar />
            <BaseIconButton class="h-12 w-14">
                <img src="../assets/icons/FilterIcon.svg" class="md-icon" />
            </BaseIconButton>
            <BaseIconButton class="h-12 w-14">
                <img
                    :src="displayModeIcon"
                    class="md-icon"
                    @click="toggleDisplayMode"
                />
            </BaseIconButton>
        </div>
        <p class="pb-2">
            Iš viso rasta: <strong>{{ getContactsSum }} kontaktų</strong>
        </p>
        <Filters />
        <component :is="displayModeComponent" />
        <Pagination @page-change="handlePageChange" />
    </div>
</template>

<script>
import SearchBar from "../common/components/layout/SearchBar.vue";
import BaseIconButton from "../common/components/base-models/BaseIconButton.vue";
import Filters from "../common/components/layout/Filters.vue";
import Pagination from "../common/components/layout/Pagination.vue";
import CardGrid from "../common/components/contacts/CardGrid.vue";
import TableGrid from "../common/components/contacts/TableGrid.vue";
import { mapActions, mapGetters, mapMutations } from "vuex";
export default {
    components: {
        SearchBar,
        BaseIconButton,
        Filters,
        CardGrid,
        TableGrid,
        Pagination,
    },
    data() {
        return {
            displayMode: "card",
            displayModeIcon: "/src/assets/icons/BulletList.svg",
            currentPage: 1,
            itemsPerPage: 25,
        };
    },
    methods: {
        ...mapActions(["FETCH_CONTACTS"]),
        ...mapMutations(["SET_CURRENT_PAGE", "SET_ITEMS_PER_PAGE"]),
        handlePageChange(newPage) {
            this.SET_CURRENT_PAGE(newPage);
            this.loadContacts();
        },
        toggleDisplayMode() {
            if (this.displayMode === "card") {
                this.displayMode = "table";
                this.displayModeIcon = "/src/assets/icons/UserIcon.svg"; // Change to card icon
            } else {
                this.displayMode = "card";
                this.displayModeIcon = "/src/assets/icons/BulletList.svg"; // Change to table icon
            }
        },
        handlePageChange(newPage) {
            this.getCurrentPage = newPage;
            console.log("Page changed: " + this.getCurrentPage);
        },
    },
    computed: {
        ...mapGetters(["getContactsSum", "getCurrentPage"]),
        // currentPage() {
        //     return this.$store.state.contacts.currentPage;
        // },
        displayModeComponent() {
            return this.displayMode === "card" ? "CardGrid" : "TableGrid";
        },
        totalPages() {
            return Math.ceil(this.getContactsSum / this.itemsPerPage);
        },
    },
    created() {
        this.FETCH_CONTACTS();
    },
};
</script>

<style></style>
