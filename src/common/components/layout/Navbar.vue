<template>
    <nav class="h-30 bg-blue px-16 py-7">
        <div class="flex items-center justify-between">
            <div class="flex items-center space-x-4">
                <router-link to="/">
                    <img
                        src="../../../assets/icons/TELTONIKA-LOGO-WHITE.svg"
                        alt="Company Logo"
                        class="md-image h-12 pl-12"
                        active-class="active-link"
                    />
                </router-link>
            </div>
            <router-link to="/login"
                ><button
                    class="bg-white text-black px-4 py-2 rounded-full text-base"
                >
                    Login
                </button></router-link
            >
        </div>
    </nav>
</template>

<script>
export default {
    name: "Navbar",
    data() {
        return {};
    },
};
</script>

<style scoped></style>
