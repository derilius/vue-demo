<template>
    <form class='login-div' @submit.prevent='onRemind'>

        <h1 class='header'>Please log in</h1>

        <div class='w-100'>
            <v-text-field
                    label='mail'
                    placeholder='mail'
                    v-model='formData.mail'>
            </v-text-field>
        </div>

        <div class='button-bottom'>
            <v-btn :to="{name: 'login'}">
                Back
            </v-btn>

            <v-btn color='primary' type='submit'>
                Remind me
            </v-btn>
        </div>

    </form>
</template>

<script lang='ts'>
    import {Component, Vue} from 'vue-property-decorator';
    import LoginService from '@/panel/auth/LoginService';
    import NotificationService from '@/modules/NotificationService';

    @Component
    export default class RemindPassword extends Vue {

        public formData: { mail: string } = {
            mail: '',
        };

        public async onRemind() {
            try {
                await LoginService.remindPassword(this.formData.mail);
                await this.$router.push('/auth/login');
                NotificationService.success('Success');
            } catch (e) {
                NotificationService.error(e);
            }
        }

    }
</script>
