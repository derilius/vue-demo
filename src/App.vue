<template>
    <div id='app'>
        <v-app>
            <router-view/>
        </v-app>
    </div>
</template>

<script lang='ts'>
    import {Component, Vue} from 'vue-property-decorator';

    @Component
    export default class App extends Vue {
    }
</script>

<style lang='scss'>

    #app {
        font-family: 'Avenir', Helvetica, Arial, sans-serif;
        -webkit-font-smoothing: antialiased;
        -moz-osx-font-smoothing: grayscale;
        text-align: center;
        color: #000000;
    }

    html {
        overflow-y: auto !important;
    }

</style>
