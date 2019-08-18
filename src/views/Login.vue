<template>

    <div class="login h-100">

        <div class="login-div">

            <div class="header">
                <h1>Please log in</h1>
            </div>

            <form class="login-form">

                <div class="fieldset">
                    <label for="1" class="input--label"><strong>username</strong></label>
                    <input id="1" type="text">
                </div>

                <div class="fieldset">
                    <label for="2" class="input--label"><strong>password</strong></label>
                    <input id="2" type="password">
                </div>

                <button>
                    Let me in
                </button>

            </form>

        </div>

    </div>

</template>

<script>
    import {Vue} from 'vue-property-decorator';

    export default class Login extends Vue {

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