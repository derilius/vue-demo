<template>

    <div class='toolbar'>
        <Tool v-for='(tool,index) in tools' :key='index' :label='tool'></Tool>
    </div>

</template>

<script lang='ts'>
    import {Component, Vue} from 'vue-property-decorator';
    import Tool from './Tool.vue';

    @Component({
        components: {
            Tool,
        },
    })
    export default class Toolbar extends Vue {

        public tools: string[] = [
            'First tool',
            'Second tool',
            'Third tool',
        ];

    }
</script>

<style scoped>

    .toolbar {
        display: flex;
        justify-content: space-around;
        min-width: 100%;
        height: 5vh;
        padding: 10px 20px 10px 20px;
        background-color: #0B1B36;
        color: white;
    }

</style>
