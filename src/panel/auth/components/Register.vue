<template>
    <form class="register-div" @submit.prevent="register">

        <h1 class="header">Please register</h1>

        <div class="w-100">

            <v-text-field
                    label="First name"
                    placeholder="First name"
                    v-model="formData.firstName">
            </v-text-field>
            <v-text-field
                    label="Last name"
                    placeholder="Last name"
                    v-model="formData.lastName">
            </v-text-field>
            <v-text-field
                    label="Username"
                    placeholder="Username"
                    v-model="formData.username">
            </v-text-field>
            <v-text-field
                    type="password"
                    label="Password"
                    placeholder="Password"
                    v-model="formData.password">
            </v-text-field>
        </div>

        <div class="button-bottom">
            <v-btn @click="login">
                Back
            </v-btn>

            <v-btn color="primary" type="submit">
                Create account
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
            firstName: "",
            lastName: "",
            username: "",
            password: "",
        };

        public register() {
            LoginService.register(this.formData);
        }

        public login() {
            this.$router.push("/auth/login");
        }

    }
</script>

<style scoped lang="scss">

    .register-div {
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
