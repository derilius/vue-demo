<template>
    <div class="login-div">

        <h1>Please log in</h1>

        <form @submit.prevent="onLogin">
            <div>
                <label for="1" class="input--label"><strong>username</strong></label>
                <input id="1" type="text" v-model=login>
            </div>
            <div>
                <label for="2" class="input--label"><strong>password</strong></label>
                <input id="2" type="password" v-model=password>
            </div>
            <a> Zapomniałeś hasła? </a>

            <div class="d-flex flex-wrap mt-3">
                <v-btn block color="primary" type="submit">
                    Let me in!
                </v-btn>

                <v-btn block class="mt-3" @click="register">
                    Register
                </v-btn>
            </div>

        </form>

    </div>
</template>

<script lang="ts">
    import {Component, Vue} from 'vue-property-decorator';
    import LoginService from "@/panel/auth/LoginService";

    @Component
    export default class Login extends Vue {

        public login: string = "";
        public password: string = "";

        public onLogin() {
            LoginService.login(this.login, this.password);
        }

        public register() {
            this.$router.push("/auth/register");
        }

    }
</script>

<style scoped lang="scss">

    .login-div {
        max-width: 50%;
        padding: 20px;
        background-color: rgba(255, 255, 255, 0.80);
        border-radius: 10px;
        box-sizing: border-box;
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

</style>
