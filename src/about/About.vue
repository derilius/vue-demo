<template>

    <div class="about">

        <Menu></Menu>
        <div class="content">

            <Toolbar></Toolbar>

            <div class="data-content">
                <TextContent></TextContent>
            </div>

        </div>

    </div>

</template>

<script lang="ts">
    import {Component, Vue} from 'vue-property-decorator';
    import Menu from '@/about/components/Menu.vue';
    import Toolbar from '@/about/components/Toolbar.vue';
    import TextContent from '@/about/components/TextContent.vue';

    @Component({
        components: {
            Menu, Toolbar, TextContent,
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
