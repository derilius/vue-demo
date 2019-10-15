<template>
    <form class='login-div'>

        <h1 class='header'>Please activate</h1>

        <div class='w-100'>
        </div>

        <div class='button-bottom'>
            <v-btn :to="{name: 'login'}">
                Back
            </v-btn>
        </div>

    </form>
</template>

<script lang='ts'>
    import {Component, Vue} from 'vue-property-decorator';
    import LoginService from '@/panel/auth/LoginService';
    import NotificationService from '@/modules/NotificationService';

    @Component
    export default class Activate extends Vue {

        private async mounted() {
            const token = this.$route.params.token;
            try {
                await LoginService.activate(token);
                await this.$router.push('/auth/login');
                NotificationService.success('Activated');
            } catch (e) {
                NotificationService.error(e);
            }
        }

    }
</script>

