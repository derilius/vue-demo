<template>

    <div class="login h-100">

        <div class="login-div">

            <div class="header">
                <h1>Please log in</h1>
            </div>

            <form class="login-form" @submit.prevent="onLogin">

                <div class="fieldset">
                    <label for="1" class="input--label"><strong>username</strong></label>
                    <input id="1" type="text" v-model=login>
                </div>

                <div class="fieldset">
                    <label for="2" class="input--label"><strong>password</strong></label>
                    <input id="2" type="password" v-model=password>
                </div>

                <button type="submit">
                    Let me in
                </button>

            </form>

        </div>

    </div>

</template>

<script lang="ts">
    import {Component, Vue} from 'vue-property-decorator';
    import LoginService from "@/login/LoginService";

    @Component
    export default class Login extends Vue {

        private loginService: LoginService = new LoginService();
        public login: string = "";
        public password: string = "";

        mounted() {
            console.log("mounted");
            this.loginService.get();
        }

        public onLogin() {
            this.loginService.post(this.login, this.password);
        }

    }

</script>

<style scoped lang="scss">

    .login {
        display: flex;
        align-items: center;
        justify-content: center;
        background: url("../assets/photo01.jpg") no-repeat;
        background-size: cover;
        min-height: 100vh;
        padding: 10px;
    }

    .login-div {
        max-width: 50%;
        padding: 20px;
        background-color: rgba(255, 255, 255, 0.80);
        border-radius: 10px;
        box-sizing: border-box;
    }

    .header {
        padding-bottom: 20px;
    }

    .fieldset {
        padding-bottom: 20px;
    }

    .login--form {
        width: 70%;
        display: flex;
        align-items: center;
        justify-content: center;

        &-wrapper {
            max-width: 100%;
            min-width: 100%;
        }
    }

    input {
        padding: 12px 15px;
        border-radius: 5px;
        border: 2px solid white;
        outline: none;
        width: 100%;
    }

    input:focus {
        border-color: #a0a0a0;
    }

    .input--label {
        text-transform: uppercase;
        letter-spacing: .9px;
        font-size: 12px;
        color: #6d6d6d;
        padding-bottom: 10px;
    }

    button {
        padding: 10px 20px 10px 20px;
        border-radius: 5px;
        box-shadow: 0 0 5px 0 rgba(0, 0, 0, 0.75);
    }

</style>