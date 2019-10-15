<template>
    <form class='login-div'>

        <h1 class='header'>Please activate</h1>

        <div class='w-100'>
        </div>

        <div class='button-bottom'>
            <v-btn @click='login'>
                Back
            </v-btn>
        </div>

    </form>
</template>

<script lang='ts'>
    import {Component, Vue} from 'vue-property-decorator';
    import LoginService from '@/panel/auth/LoginService';

    @Component
    export default class Activate extends Vue {

        private mounted() {
            const token = this.$route.params.token;
            LoginService.activate(token);
        }

        public login() {
            this.$router.push('/auth/login');
        }

    }
</script>

