<template>
    <div class='about'>

        <Menu></Menu>
        <div class='content w-100'>
            <Toolbar @logout='logout'></Toolbar>

            <div class='data-content'>

                <!--                <TextContent :text="{aa: 1}"></TextContent>-->
                <router-view></router-view>
            </div>
        </div>

    </div>

</template>

<script lang='ts'>
    import {Component, Vue} from 'vue-property-decorator';
    import Menu from '@/panel/_layout/components/Menu.vue';
    import Toolbar from '@/panel/_layout/components/Toolbar.vue';
    import TextContent from '@/panel/_layout/components/TextContent.vue';
    import LoginService from '@/panel/auth/LoginService';

    @Component({
        components: {
            Menu, Toolbar, TextContent,
        },
    })
    export default class Layout extends Vue {

        get userInfo(): { id: number } {
            return this.$store.getters.getUserData;
        }

        public logout() {
            LoginService.logout();
        }

    }

</script>

<style scoped lang="scss">

    .about {
        display: flex;
        justify-content: flex-start;
        background-color: white;
        min-height: 100vh;
    }

    .content {
        margin-left: 220px;
        height: 100vh;
        background-color: rgb(238, 238, 238);
    }

    .data-content {
        display: flex;
        flex-wrap: wrap;
        padding: 10px;
    }

    .content-div {
        display: flex;
        flex-direction: column;
        background-color: white;
        flex-wrap: wrap;
        border: 5px solid rgb(238, 238, 238);
        border-radius: 20px;
    }

    .content-div-form {
        display: flex;
        flex-wrap: wrap;
        padding: 5px;
    }

</style>
