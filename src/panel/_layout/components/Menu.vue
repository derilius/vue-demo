<template>
    <div class='menu'>

        <div class="d-flex justify-center align-center" style="height:65px;border: white solid 1px">
        </div>

        <div class="d-flex flex-wrap">
            <router-link :to="{name: 'home'}" class="w-100 menu-link-label menu-link"><label>
                <i class="fas fa-home"></i>&nbsp;
                <span> Strona główna</span>
            </label></router-link>
            <router-link :to="{name: 'vehicle'}" class="w-100 menu-link-label menu-link"><label>
                <i class="fas fa-car"></i>&nbsp;
                <span> Pojazdy </span>
            </label></router-link>
            <router-link :to="{name: 'history'}" class="w-100 menu-link-label menu-link"><label>
                <i class="fas fa-car"></i>&nbsp;
                <span> Historia </span>
            </label></router-link>
        </div>

    </div>
</template>

<script lang='ts'>
    import {Component, Vue} from 'vue-property-decorator';

    @Component({})
    export default class Menu extends Vue {

    }
</script>

<style scoped>

    .menu {
        background-color: #0B1B36;
        max-width: 220px;
        min-height: 100vh;
        color: #ffffff;
        position: fixed;
    }

    .menu-link-label {
        padding-left: 20px;
        padding-top: 20px;
    }

    .menu-link {
        color: white;
        text-decoration: none;
        text-align: left;
        font-size: 14px;
        font-weight: bold;
        text-transform: uppercase;
    }

</style>
