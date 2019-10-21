import Layout from "@/panel/_layout/Layout.vue";
import Vehicle from "@/panel/vehicle/Vehicle.vue";
import Home from "@/panel/home/Home.vue";

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
                path: 'vehicle',
                name: 'vehicle',
                component: Vehicle,
                meta: {
                    title: 'vehicle',
                    public: false,
                    onlyWhenLoggedOut: false,
                },
            },
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
        ],
    },
];
