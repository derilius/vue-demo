<template>

    <div class='about'>

        <Menu @logout='logout'></Menu>
        <div class='content'>

            <Toolbar></Toolbar>

            <div class='data-content'>
                <TextContent></TextContent>
            </div>
            <div>
                <v-btn @click='getUserInfo'> check user</v-btn>
                <br>
                {{userInfo}}
            </div>

            <div>
                <v-btn @click='getAdminInfo'> check admin</v-btn>
                <br>
                {{adminInfo}}
            </div>
        </div>

    </div>

</template>

<script lang='ts'>
    import {Component, Vue} from 'vue-property-decorator';
    import Menu from '@/panel/about/components/Menu.vue';
    import Toolbar from '@/panel/about/components/Toolbar.vue';
    import TextContent from '@/panel/about/components/TextContent.vue';
    import LoginService from '@/panel/auth/LoginService';

    @Component({
        components: {
            Menu, Toolbar, TextContent,
        },
    })
    export default class Home extends Vue {

        public userInfo: string = '';
        public adminInfo: string = '';

        public logout() {
            LoginService.logout();
        }

        public async getUserInfo() {
            this.userInfo = await LoginService.getUserInfo();
        }

        public async getAdminInfo() {
            this.adminInfo = await LoginService.getAdminInfo();
        }

    }

</script>

<style scoped>

    .about {
        display: flex;
        justify-content: flex-start;
        background-color: white;
        min-height: 100vh;
    }

    .content {
        min-width: 80%;
        height: 100vh;
        background-color: rgb(238, 238, 238);
    }

    .data-content {
        display: flex;
        justify-content: flex-start;
        align-content: stretch;
        align-items: stretch;
        padding: 20px;
    }

    p {
        text-align: justify;
    }

</style>
