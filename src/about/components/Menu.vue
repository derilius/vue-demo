<template>

    <div class="menu">

        <div class="d-flex">
            <img width="150" height="150" alt="Vue logo" src="../../assets/logo.png">

            <MenuBookmark v-for="(item,index) in bookmarks" :key="index" :label="item"></MenuBookmark>

        </div>

    </div>

</template>

<script lang="ts">
    import {Component, Vue} from 'vue-property-decorator';
    import MenuBookmark from '@/about/components/MenuBookmark.vue';

    @Component({
        components: {
            MenuBookmark,
        },
    })
    export default class Menu extends Vue {

        public bookmarks: string[] = [
            'Pierwsza zakładka',
            'Druga zakładka',
        ];

    }
</script>

<style scoped>

    .menu {
        display: flex;
        flex-direction: row;
        justify-content: space-around;
        padding: 10px;
        background-color: #0B1B36;
        min-width: 300px;
        min-height: 100vh;
        color: #ffffff;
    }

</style>
