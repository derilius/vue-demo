import Layout from '@/panel/_layout/Layout.vue';
import Home from '@/panel/home/Home.vue';
import People from '@/panel/history/People.vue';
import Property from '@/panel/property/Property.vue';
import Transaction from '@/panel/transaction/Transaction.vue';
import Role from '@/panel/role/Role.vue';

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
                path: 'osoby',
                name: 'osoby',
                component: People,
                meta: {
                    title: 'osoby',
                    public: false,
                    onlyWhenLoggedOut: false,
                },
            },
            {
                path: 'property',
                name: 'property',
                component: Property,
                meta: {
                    title: 'nieruchomości',
                    public: false,
                    onlyWhenLoggedOut: false,
                },
            },
            {
                path: 'transaction',
                name: 'transaction',
                component: Transaction,
                meta: {
                    title: 'transakcje',
                    public: false,
                    onlyWhenLoggedOut: false,
                },
            },
            {
                path: 'role',
                name: 'role',
                component: Role,
                meta: {
                    title: 'role',
                    public: false,
                    onlyWhenLoggedOut: false,
                },
            },
        ],
    },
];
