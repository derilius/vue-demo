import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

export default new Vuex.Store({
    state: {
        userData: {},
    },
    mutations: {
        saveUserData(state, data) {
            state.userData = data;
        },
    },
    actions: {
        async setUserData(context, data) {
            await context.commit('saveUserData', data);
        },
    },
    getters: {
        getUserData: (state) => state.userData,
    },
});
