<template>

    <div class='data-content-text'>
        <pre>
            {{text}}
        </pre>
    </div>

</template>

<script lang='ts'>
    import {Component, Prop, Vue} from 'vue-property-decorator';

    @Component
    export default class TextContent extends Vue {

        @Prop(Object)
        public text!: object;

    }
</script>

<style scoped>

    .data-content-text {
        display: flex;
        align-content: stretch;
        align-items: stretch;
        background-color: white;
        padding: 20px 20px 20px 20px;
        margin: 10px 10px 10px 10px;
        border-radius: 20px 20px 20px 20px;
    }

</style>
