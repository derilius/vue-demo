<template>

    <div class="about">

        <div class="menu">

            <div class="d-flex">
                <img width="150" height="150" alt="Vue logo" src="../assets/logo.png">

                <div class="menu-bookmark">
                    Pierwsza zakładka
                </div>

                <div class="menu-bookmark">
                    Druga zakładka
                </div>

            </div>

        </div>

        <div class="content">

            <div class="toolbar">
                <div class="tool">Tool one</div>
                <div class="tool">Tool two</div>
                <div class="tool">Tool three</div>
            </div>

            <div class="data">
                <div class="data-content">
                    <p>
                        Lorem Ipsum jest tekstem stosowanym jako przykładowy wypełniacz w przemyśle poligraficznym.
                        Został po raz pierwszy użyty w XV w. przez nieznanego drukarza do wypełnienia tekstem
                        próbnej książki. Pięć wieków później zaczął być używany przemyśle elektronicznym, pozostając
                        praktycznie niezmienionym. Spopularyzował się w latach 60. XX w. wraz z publikacją arkuszy
                        Letrasetu, zawierających fragmenty Lorem Ipsum, a ostatnio z zawierającym różne wersje Lorem
                        Ipsum oprogramowaniem przeznaczonym do realizacji druków na komputerach osobistych, jak
                        Aldus PageMaker
                    </p>
                </div>
            </div>

        </div>

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
    export default class Home extends Vue {
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

    .menu {
        display: flex;
        flex-direction: row;
        justify-content: space-around;
        padding: 10px;
        background-color: #0B1B36;
        min-width: 20%;
        min-height: 100vh;
        color: #ffffff;
    }

    .menu-bookmark {
        font-size: 20px;
        margin: 10px 20px 10px 20px;
        padding: 5px 15px 5px 15px;
        display: flex;
    }

    .menu-bookmark:hover {
        padding-left: 30px;
    }

    .toolbar {
        display: flex;
        justify-content: space-around;
        min-width: 100%;
        height: 5vh;
        padding: 10px 20px 10px 20px;
        background-color: #0B1B36;
        color: white;
    }

    .tool {
        padding: 5px 10px 0 10px;
        border-left: black solid 2px;
        border-right: black solid 2px;
    }

    .data {
        display: flex;
        justify-content: flex-start;
        align-content: stretch;
        align-items: stretch;
        padding: 20px;
    }

    .data-content {
        display: flex;
        align-content: stretch;
        align-items: stretch;
        background-color: white;
        padding: 30px 30px 30px 30px;
        border-radius: 20px 20px 20px 20px;
    }

    p {
        text-align: justify;
    }

</style>