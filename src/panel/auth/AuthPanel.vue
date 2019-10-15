<template>
    <div class='auth h-100'>

        <transition mode='out-in' name='fade'>
            <router-view></router-view>
        </transition>

    </div>
</template>

<script lang='ts'>
    import {Component, Vue} from 'vue-property-decorator';

    @Component
    export default class AuthPanel extends Vue {

    }

</script>

<style lang='scss'>

    .auth {
        display: flex;
        align-items: center;
        justify-content: center;
        background: url('../../assets/photo01.jpg') no-repeat;
        background-size: cover;
        min-height: 100vh;
        padding: 10px;
    }

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

    .header {
        width: 100%;
        align-self: flex-start;
    }

    .button-bottom {
        width: 100%;
        display: flex;
        align-self: flex-end;
        justify-content: space-between;
        flex-wrap: wrap;
    }

</style>
