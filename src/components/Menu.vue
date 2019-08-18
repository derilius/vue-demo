<template>

    <div class="menu">

        <h1>MENU</h1>

    </div>

</template>

<script lang="ts">

    import {Component, Vue} from 'vue-property-decorator';

    @Component
    export default class Menu extends Vue {

    }

</script>

<style scoped>

    .menu {
        padding: 10px;
        background-color: white;
        box-shadow: 10px 0 10px -5px rgba(0,0,0,0.75);
        min-width: 150px;
        max-width: 250px;
        min-height: 100vh;
    }

</style>
