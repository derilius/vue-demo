<template>
    <div class="menu">

        <img width="150" height="150" alt="Vue logo" src="../../../assets/logo.png">

        <div class="d-flex flex-wrap align-start">
            <MenuBookmark v-for="(item,index) in bookmarks" :key="index" :label="item"></MenuBookmark>
        </div>

        <div class="logout">
            <v-btn @click="onLogout"> wyjć stont </v-btn>
        </div>

    </div>
</template>

<script lang="ts">
    import {Component, Emit, Vue} from 'vue-property-decorator';
    import MenuBookmark from './MenuBookmark.vue';

    @Component({
        components: {
            MenuBookmark,
        },
    })
    export default class Menu extends Vue {

        @Emit('logout')
        public onLogout() {
            return 0;
        }

        public bookmarks: string[] = [
            'Pierwsza zakładka',
            'Druga zakładka',
        ];

    }
</script>

<style scoped>

    .menu {
        padding: 10px;
        background-color: #0B1B36;
        min-width: 300px;
        min-height: 100vh;
        color: #ffffff;
        position: relative;
    }

    .logout {
        display: flex;
        width: 100%;
        justify-content: center;
        position: absolute;
        bottom: 0;
        margin-bottom: 15px;
    }

</style>
