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
            <v-btn @click='login'>
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

    @Component
    export default class RemindPassword extends Vue {

        public formData: { mail: string } = {
            mail: '',
        };

        public onRemind() {
            LoginService.remindPassword(this.formData.mail);
        }

        public login() {
            this.$router.push('/auth/login');
        }

    }
</script>
