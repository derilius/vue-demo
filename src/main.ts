import Vue from 'vue';
import App from './App.vue';
import router from './router';
import store from './store';
import vuetify from './plugins/Vuetify';
import '@/styles/style.scss';
import '@/plugins/Notification';

Vue.config.productionTip = false;

new Vue({
    router,
    store,
    // @ts-ignore
    vuetify,
    render: (h) => h(App),
}).$mount('#app');
