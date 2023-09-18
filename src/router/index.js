import Vue from "vue";
import VueRouter from "vue-router";
import Home from "../views/Home.vue";
import AdminLogin from "../views/AdminLogin.vue";
import ViewContact from "../views/ViewContact.vue";
import EmployeeManagement from "../views/EmployeeManagement.vue";
import CompanyManagement from "../views/CompanyManagement.vue";
import StructureManagement from "../views/StructureManagement.vue";
import OfficeManagement from "../views/OfficeManagement.vue";
import AdminManagement from "../views/AdminManagement.vue";

Vue.use(VueRouter);

const routes = [
    {
        path: "/",
        name: "Contact cards",
        component: Home,
        meta: {
            title: "Kontaktai",
        },
    },
    {
        path: "/login",
        name: "Admin login",
        component: AdminLogin,
        meta: {
            title: "Prisijungti",
        },
    },
    {
        path: "/view-contact/:id",
        name: "View Contact",
        component: ViewContact,
        meta: {
            title: "Informacija",
        },
    },
    {
        path: "/employee-management",
        name: "Employee management",
        component: EmployeeManagement,
        meta: {
            title: "Kontaktų sistema",
        },
    },
    {
        path: "/company-management",
        name: "Company management",
        component: CompanyManagement,
        meta: {
            title: "Įmonės",
        },
    },
    {
        path: "/structure-management",
        name: "Structure management",
        component: StructureManagement,
        meta: {
            title: "Struktūra",
        },
    },
    {
        path: "/office-management",
        name: "Office management",
        component: OfficeManagement,
        meta: {
            title: "Ofisai",
        },
    },
    {
        path: "/admin-management",
        name: "Admin account management",
        component: AdminManagement,
        meta: {
            title: "Paskyros",
        },
    },
    // {
    //     path: "*",
    //     name: "NotFound",
    //     component: () => import("../views/NotFound.vue"),
    //     meta: {
    //         title: "404",
    //     },
    // },
];

const router = new VueRouter({
    mode: "history",
    base: "/",
    routes,
});

router.beforeEach((to, from, next) => {
    document.title = `${to.meta.title} | Contacts system`;
    next();
});

export default router;
