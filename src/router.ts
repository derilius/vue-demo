import Vue from 'vue';
import Router from 'vue-router';
import Login from './login/Login.vue';

Vue.use(Router);

const router = new Router({
    mode: 'history',
    base: process.env.BASE_URL,
    routes: [
        {
            path: '/login',
            name: 'login',
            component: Login
        },
        {
            path: '/about',
            name: 'about',
            // route level code-splitting
            // this generates a separate chunk (about.[hash].js) for this route
            // which is lazy-loaded when the route is visited.
            component: () => import(/* webpackChunkName: "about" */ './about/About.vue'),
        },
    ],
});

router.beforeEach((from, to, next) => {
    console.log('from:', from);
    console.log('to:', to);
    console.log('next:', next);
    const cos = localStorage.getItem("token");

    console.log(cos);

    next();
});

export default router;
