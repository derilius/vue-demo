<template>
    <div class="content-div col-lg-12">

        <div class="d-flex flex-wrap ">
            <div class="d-flex col-lg-4">
                <v-text-field
                        label="Data od"
                        placeholder='Data'
                        v-model='dates.from'>
                </v-text-field>
            </div>
            <div class="d-flex col-lg-4">
                <v-text-field
                        label="Data do"
                        placeholder='Data'
                        v-model='dates.to'>
                </v-text-field>
            </div>
            <div class="d-flex col-lg-2">
                <v-text-field
                        label="szukaj"
                        placeholder='Szukaj'
                        v-model='search'>
                </v-text-field>
            </div>
            <div class="d-flex col-lg-2">
                <v-btn color='primary'>
                    SEARCH
                </v-btn>
                <v-btn>
                    FILTER
                </v-btn>
            </div>
        </div>

        <v-data-table
                :headers="headers"
                :items="history"
                :items-per-page="5"
                class="elevation-1"
        ></v-data-table>

    </div>
</template>

<script lang='ts'>
    import {Component, Vue} from 'vue-property-decorator';

    @Component({})
    export default class History extends Vue {

        public search = '';
        public dates: { from: string, to: string } = {from: '', to: ''};
        public headers = [
            {text: 'Marka', value: 'name', align: 'left',},
            {text: 'Model', value: 'model',},
            {text: 'Nr rejestracyjny', value: 'nr', align: 'right'},
        ];
        public history = [];

    }

</script>

<style scoped lang="scss">

</style>
