import Vue from 'vue';
import App from './App.vue';
import router from './router';
import store from './store';
import vuetify from './plugins/Vuetify';
import '@/styles/style.scss';
import '@/plugins/Notification';
import StorageService from "@/modules/StorageService";
import ApiService from "@/modules/ApiService";

Vue.config.productionTip = false;

const tokenData = StorageService.getTokenData();
if (tokenData) {
    // @ts-ignore
    ApiService.setToken(tokenData.access_token);
}

new Vue({
    router,
    store,
    // @ts-ignore
    vuetify,
    render: (h) => h(App),
}).$mount('#app');
