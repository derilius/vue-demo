import Vue from 'vue';
import Router from 'vue-router';
import Login from '@/panel/login/Login.vue';
import About from "@/panel/about/About.vue";
import StorageService from "@/modules/StorageService";

Vue.use(Router);

const router = new Router({
    mode: 'history',
    base: process.env.BASE_URL,
    routes: [
        {
            path: '/login',
            name: 'login',
            component: Login,
            meta: {
                title: 'Login',
                public: true,
                onlyWhenLoggedOut: true,
            },
        },
        {
            path: '/about',
            name: 'about',
            component: About,
            meta: {
                title: 'Login',
                public: false,
                onlyWhenLoggedOut: false,
            },
        },
    ],
});

router.beforeEach((to, from, next) => {
    const isPublic = to.matched.some(record => record.meta.public);
    const onlyWhenLoggedOut = to.matched.some(record => record.meta.onlyWhenLoggedOut);
    const loggedIn = !!StorageService.getTokenData();

    if (to.fullPath === '/' && loggedIn) {
        return next('/about');
    } else if (to.fullPath === '/' && !loggedIn) {
        return next('/login');
    } else if (to.fullPath === '/login' && loggedIn) {
        return next('/about');
    } else if (!isPublic && !loggedIn) {
        return next('/login');
    }
    return next();
});

export default router;
