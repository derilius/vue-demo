import Vue from 'vue';
import Router from 'vue-router';
import StorageService from '@/modules/StorageService';
import AuthRouter from '@/panel/auth/AuthRouter';
import LayoutRouter from "@/panel/_layout/LayoutRouter";

Vue.use(Router);

const router = new Router({
    mode: 'history',
    base: process.env.BASE_URL,
    routes: [
        ...AuthRouter,
        ...LayoutRouter,
    ],
});

router.beforeEach((to, from, next) => {
    const isPublic = to.matched.some((record) => record.meta.public);
    const onlyWhenLoggedOut = to.matched.some((record) => record.meta.onlyWhenLoggedOut);
    const loggedIn = !!StorageService.getTokenData();

    if (to.fullPath === '/' && loggedIn) {
        return next('/panel/home');
    } else if (to.fullPath === '/' && !loggedIn) {
        return next('/auth/login');
    } else if (to.fullPath === '/auth/login' && loggedIn) {
        return next('/panel/home');
    } else if (!isPublic && !loggedIn) {
        return next('/auth/login');
    }
    return next();
});

export default router;
