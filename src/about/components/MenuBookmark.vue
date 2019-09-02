<template>

    <div class="menu-bookmark">
        {{label}}
    </div>

</template>

<script lang="ts">
    import {Component, Prop, Vue} from 'vue-property-decorator';

    @Component
    export default class MenuBookmark extends Vue {

        @Prop(String)
        public label!: string;

    }

</script>

<style scoped>

    .menu-bookmark {
        font-size: 20px;
        margin: 10px 20px 10px 20px;
        padding: 5px 15px 5px 15px;
        display: flex;
    }

</style>
