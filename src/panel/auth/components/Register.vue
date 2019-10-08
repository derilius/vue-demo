<template>
    <div class="register-div">

        <h1>Please log in</h1>

        <form @submit.prevent="register">

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

            <div class="d-flex flex-wrap mt-3">
                <v-btn block color="primary" type="submit">
                    Create account
                </v-btn>

                <v-btn block class="mt-3" @click="login">
                    Back
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

        public formData: object = {
            firstName: "asf",
            lastName: "asf",
            username: "asf",
            password: "asf",
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
        max-width: 50%;
        padding: 20px;
        background-color: rgba(255, 255, 255, 0.80);
        border-radius: 10px;
        box-sizing: border-box;
    }

</style>
