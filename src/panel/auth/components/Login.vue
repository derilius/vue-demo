<template>
    <form class="login-div" @submit.prevent="onLogin">

        <h1 class="header">Please log in</h1>

        <div class="w-100">
            <v-text-field
                    label="username"
                    placeholder="username"
                    v-model="formData.username">
            </v-text-field>
            <v-text-field
                    label="password"
                    placeholder="password"
                    type="password"
                    v-model="formData.password">
            </v-text-field>
            <a> Zapomniałeś hasła? </a>
        </div>

        <div class="button-bottom">
            <v-btn class="col-lg-5" @click="register">
                Register
            </v-btn>

            <v-btn class="col-lg-5" color="primary" type="submit">
                Let me in!
            </v-btn>
        </div>

    </form>
</template>

<script lang="ts">
    import {Component, Vue} from 'vue-property-decorator';
    import LoginService from "@/panel/auth/LoginService";

    @Component
    export default class Login extends Vue {

        public formData: object = {
            username: "",
            password: "",
        };

        public onLogin() {
            LoginService.login(this.formData);
        }

        public register() {
            this.$router.push("/auth/register");
        }

    }
</script>

<style scoped lang="scss">

    .login-div {
        display: flex;
        flex-wrap: wrap;
        align-items: center;
        justify-content: center;
        min-height: 400px;
        max-width: 500px;
        padding: 20px;
        background-color: rgba(255, 255, 255, 0.80);
        border-radius: 10px;
        box-sizing: border-box;
    }

</style>
