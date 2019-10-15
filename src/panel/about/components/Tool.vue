<template>

    <div class='tool'>Tool one</div>

</template>

<script lang='ts'>
    import {Component, Prop, Vue} from 'vue-property-decorator';

    @Component
    export default class Tool extends Vue {

        @Prop(String)
        public label!: string;

    }

</script>

<style scoped>

    .tool {
        padding: 5px 10px 0 10px;
        border-left: black solid 2px;
        border-right: black solid 2px;
    }

</style>
