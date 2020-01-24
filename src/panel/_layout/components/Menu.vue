<template>
    <div class='menu'>

        <div class="d-flex justify-center align-center" style="height:65px;border:solid 1px white">
            <strong style="letter-spacing: 3px;font-size: 25px">LOGO</strong>
        </div>

        <div class="d-flex flex-wrap">
            <router-link :to="{name: 'home'}" class="w-100 menu-link-label menu-link">
                <i class="fas fa-home"></i>&nbsp;
                <span> Strona główna</span>
            </router-link>
            <router-link :to="{name: 'osoby'}" class="w-100 menu-link-label menu-link">
                <i class="fas fa-users"></i>&nbsp;
                <span> Osoby </span>
            </router-link>
            <router-link :to="{name: 'property'}" class="w-100 menu-link-label menu-link">
                <i class="fas fa-building"></i>&nbsp;
                <span> Nieruchomości </span>
            </router-link>
            <router-link :to="{name: 'transaction'}" class="w-100 menu-link-label menu-link">
                <i class="fas fa-handshake"></i>&nbsp;
                <span> Transakcje </span>
            </router-link>
            <router-link :to="{name: 'role'}" class="w-100 menu-link-label menu-link">
                <i class="fas fa-user-tag"></i></i>&nbsp;
                <span> Role </span>
            </router-link>
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
        background-color: #0B3B5A;
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
