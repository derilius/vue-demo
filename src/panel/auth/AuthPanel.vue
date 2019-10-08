<template>
    <div class="auth h-100">

        <router-view></router-view>

    </div>
</template>

<script lang="ts">
    import {Component, Vue} from 'vue-property-decorator';

    @Component
    export default class AuthPanel extends Vue {

    }

</script>

<style scoped lang="scss">

    .auth {
        display: flex;
        align-items: center;
        justify-content: center;
        background: url("../../assets/photo01.jpg") no-repeat;
        background-size: cover;
        min-height: 100vh;
        padding: 10px;
    }

</style>
