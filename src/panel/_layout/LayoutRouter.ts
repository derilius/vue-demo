import Layout from '@/panel/_layout/Layout.vue';
import Home from '@/panel/home/Home.vue';
import History from '@/panel/history/History.vue';

export default [
    {
        path: '/panel',
        name: 'panel',
        component: Layout,
        meta: {
            title: 'panel',
            public: false,
            onlyWhenLoggedOut: false,
        },
        children: [
            {
                path: 'home',
                name: 'home',
                component: Home,
                meta: {
                    title: 'home',
                    public: false,
                    onlyWhenLoggedOut: false,
                },
            },
            {
                path: 'history',
                name: 'history',
                component: History,
                meta: {
                    title: 'history',
                    public: false,
                    onlyWhenLoggedOut: false,
                },
            },
        ],
    },
];
