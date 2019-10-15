import AuthPanel from '@/panel/auth/AuthPanel.vue';
import Login from '@/panel/auth/components/Login.vue';
import Register from '@/panel/auth/components/Register.vue';
import Activate from '@/panel/auth/components/Activate.vue';
import RemindPassword from '@/panel/auth/components/RemindPassword.vue';
import ResetPassword from '@/panel/auth/components/ResetPassword.vue';

export default [
    {
        path: '/auth',
        name: 'auth',
        component: AuthPanel,
        meta: {
            title: 'auth',
            public: true,
            onlyWhenLoggedOut: true,
        },
        children: [
            {
                path: 'login',
                name: 'login',
                component: Login,
                meta: {
                    title: 'login',
                    public: true,
                    onlyWhenLoggedOut: true,
                },
            },
            {
                path: 'register',
                name: 'register',
                component: Register,
                meta: {
                    title: 'register',
                    public: true,
                    onlyWhenLoggedOut: true,
                },
            },
            {
                path: 'activate/:token',
                name: 'activate',
                component: Activate,
                meta: {
                    title: 'activate',
                    public: true,
                    onlyWhenLoggedOut: true,
                },
            },
            {
                path: 'remind-password',
                name: 'remind-password',
                component: RemindPassword,
                meta: {
                    title: 'remind password',
                    public: true,
                    onlyWhenLoggedOut: true,
                },
            },
            {
                path: 'reset-password/:token',
                name: 'reset-password',
                component: ResetPassword,
                meta: {
                    title: 'reset password',
                    public: true,
                    onlyWhenLoggedOut: true,
                },
            },
        ],
    },
];
