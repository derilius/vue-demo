<template>
    <div id="app">
        <!--    <div id="nav">-->
        <!--      <router-link to="/">Home</router-link> |-->
        <!--      <router-link to="/about">About</router-link>-->
        <!--    </div>-->
        <router-view/>
    </div>
</template>

<script lang="ts">
    import {Component, Vue} from 'vue-property-decorator';
    import Menu from '@/components/Menu.vue'; // @ is an alias to /src

    @Component({
        components: {
            Menu,
        },
    })
    export default class App extends Vue {
    }
</script>

<style lang="scss">
  
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
