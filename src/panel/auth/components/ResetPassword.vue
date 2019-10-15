<template>
    <form class='login-div' @submit.prevent='onReset'>

        <h1 class='header'>Please log in</h1>

        <div class='w-100'>
            <v-text-field
                    label='new password'
                    placeholder='new password'
                    type='password'
                    v-model='formData.newPassword'>
            </v-text-field>
            <v-text-field
                    label='new password'
                    placeholder='new password'
                    type='password'
                    v-model='formData.repeatedPassword'>
            </v-text-field>
        </div>

        <div class='button-bottom'>
            <v-btn :to="{name: 'login'}">
                Back
            </v-btn>

            <v-btn color='primary' type='submit'>
                Reset
            </v-btn>
        </div>

    </form>
</template>

<script lang='ts'>
    import {Component, Vue} from 'vue-property-decorator';
    import LoginService from '@/panel/auth/LoginService';
    import NotificationService from '@/modules/NotificationService';

    @Component
    export default class ResetPassword extends Vue {

        public formData: object = {
            newPassword: '',
            repeatedPassword: '',
        };

        public async onReset() {
            const token = this.$route.params.token;
            try {
                await LoginService.resetPassword(this.formData, token);
                await this.$router.push('/auth/login');
                NotificationService.success('Success');
            } catch (e) {
                NotificationService.error(e);
            }
        }

    }
</script>
