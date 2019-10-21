<template>
    <form class='login-div' @submit.prevent='onLogin'>

        <h1 class='header'>Please log in</h1>

        <div class='w-100'>
            <v-text-field
                    label='mail'
                    placeholder='mail'
                    v-model='formData.username'>
            </v-text-field>
            <v-text-field
                    label='password'
                    placeholder='password'
                    type='password'
                    v-model='formData.password'>
            </v-text-field>
            <router-link :to="{name: 'remind-password'}"> Zapomniałeś hasła?</router-link>
        </div>

        <div class='button-bottom'>
            <v-btn :to="{name: 'register'}">
                Register
            </v-btn>

            <v-btn color='primary' type='submit'>
                Let me in!
            </v-btn>
        </div>

    </form>
</template>

<script lang='ts'>
    import {Component, Vue} from 'vue-property-decorator';
    import LoginService from '@/panel/auth/LoginService';
    import NotificationService from '@/modules/NotificationService';
    import StorageService from "@/modules/StorageService";

    @Component
    export default class Login extends Vue {

        public formData: object = {
            username: '',
            password: '',
        };

        public async onLogin() {
            try {
                await LoginService.login(this.formData);
                const user = await LoginService.getUserInfo();
                StorageService.setUserData(user);
                console.log(user);
                await this.$store.dispatch('setUserData', user);
                await this.$router.push('/auth/login');
            } catch (e) {
                NotificationService.error(e);
            }
        }

    }
</script>
