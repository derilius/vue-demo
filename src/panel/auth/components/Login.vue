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
            <router-link :to='{name: ' remind-password
            '}'> Zapomniałeś hasła?</router-link>
        </div>

        <div class='button-bottom'>
            <v-btn @click='register'>
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

    @Component
    export default class Login extends Vue {

        public formData: object = {
            username: '',
            password: '',
        };

        public onLogin() {
            LoginService.login(this.formData);
        }

        public register() {
            this.$router.push('/auth/register');
        }

    }
</script>
