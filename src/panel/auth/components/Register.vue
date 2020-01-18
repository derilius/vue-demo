<template>
    <form class='login-div' @submit.prevent='register'>

        <h1 class='header'>Rejestracja</h1>

        <div class='w-100'>

            <v-text-field
                    label='Imię'
                    placeholder='Imię'
                    v-model='formData.firstName'>
            </v-text-field>
            <v-text-field
                    label='Nazwisko'
                    placeholder='Nazwisko'
                    v-model='formData.lastName'>
            </v-text-field>
            <v-text-field
                    label='Email'
                    placeholder='Email'
                    v-model='formData.mail'>
            </v-text-field>
            <v-text-field
                    type='password'
                    label='Hasło'
                    placeholder='Hasło'
                    v-model='formData.password'>
            </v-text-field>
        </div>

        <div class='button-bottom'>
            <v-btn @click='login'>
                Wróć
            </v-btn>

            <v-btn color='primary' type='submit'>
                Załóż konto
            </v-btn>
        </div>

    </form>
</template>

<script lang='ts'>
import {Component, Vue} from 'vue-property-decorator';
import LoginService from '@/panel/auth/LoginService';
import NotificationService from '@/modules/NotificationService';

@Component
export default class Register extends Vue {

    public formData: object = {
        firstName: '',
        lastName: '',
        mail: '',
        password: '',
    };

    public async register() {
        try {
            await LoginService.register(this.formData);
            await this.$router.push('/auth/login');
            NotificationService.success('Zarejestrowano!');
        } catch (e) {
            NotificationService.error(e);
        }
    }

    public login() {
        this.$router.push('/auth/login');
    }

}
</script>
