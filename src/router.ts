import Vue from 'vue';
import Router from 'vue-router';
import About from '@/panel/about/About.vue';
import StorageService from '@/modules/StorageService';
import Login from '@/panel/auth/components/Login.vue';
import AuthRouter from '@/panel/auth/AuthRouter';

Vue.use(Router);

const router = new Router({
    mode: 'history',
    base: process.env.BASE_URL,
    routes: [
        ...AuthRouter,
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
    const isPublic = to.matched.some((record) => record.meta.public);
    const onlyWhenLoggedOut = to.matched.some((record) => record.meta.onlyWhenLoggedOut);
    const loggedIn = !!StorageService.getTokenData();

    if (to.fullPath === '/' && loggedIn) {
        return next('/about');
    } else if (to.fullPath === '/' && !loggedIn) {
        return next('/auth/login');
    } else if (to.fullPath === '/auth/login' && loggedIn) {
        return next('/about');
    } else if (!isPublic && !loggedIn) {
        return next('/auth/login');
    }
    return next();
});

export default router;
