import Vue from 'vue';
// @ts-ignore
import Vuetify from 'vuetify/lib';
import pl from 'vuetify/src/locale/pl';

Vue.use(Vuetify);

export default new Vuetify({
    theme: {
        options: {
            customProperties: true,
        },
        themes: {
            light: {
                primary: '#0B3B5A',
                secondary: '#424242',
                accent: '#82B1FF',
                error: '#FF5252',
                info: '#2196F3',
                success: '#4CAF50',
                warning: '#FFC107',
            },
        },
    },
    lang: {
        locales: {pl},
        current: 'pl',
    },
    icons: {
        iconfont: 'fa',
    },
});
