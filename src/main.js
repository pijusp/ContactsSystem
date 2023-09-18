import Vue from "vue";
import App from "./App.vue";
import "./style.css";
import "vue-material/dist/vue-material.min.css";
import "vue-material/dist/theme/default.css";
import {
    MdButton,
    MdCard,
    MdRipple,
    MdMenu,
    MdDialog,
    MdList,
    MdTable,
    MdContent,
} from "vue-material/dist/components";
import router from "./router";
import store from "./store";
import Toast from "vue-toastification";
import "vue-toastification/dist/index.css";
Vue.config.productionTip = false;

Vue.use(MdButton);
Vue.use(MdCard);
Vue.use(MdRipple);
Vue.use(MdMenu);
Vue.use(MdDialog);
Vue.use(MdList);
Vue.use(MdTable);
Vue.use(MdContent);

Vue.use(Toast, {
    transition: "Vue-Toastification__bounce",
    maxToasts: 10,
    newestOnTop: true,
});

new Vue({
    router,
    store,
    render: (h) => h(App),
}).$mount("#app");
