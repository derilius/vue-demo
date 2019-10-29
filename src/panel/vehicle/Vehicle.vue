<template>
    <div class="w-100 h-100 d-flex flex-wrap">

        <div class="content-div col-lg-4">
            <div class="d-flex col-lg-9" style="margin:0!important;padding:0!important;">
                <v-text-field
                        placeholder='Szukaj'
                        v-model='search'>
                </v-text-field>
            </div>
            <div class="d-flex col-lg-3">
                <v-btn color='primary'>
                    Dodaj
                </v-btn>
            </div>
            <v-data-table class="elevation-1 w-100"
                          :headers="headers"
                          :items="vehicles"
                          :items-per-page="10"
            ></v-data-table>
        </div>

        <div class="content-div col-lg-8">
            <form class="d-flex w-100">
                <v-text-field class="form-input col-lg-4"
                        label='Marka'
                        placeholder='Marka'
                        type='text'
                        v-model='selected.marka'>
                </v-text-field>
                <v-text-field class="form-input col-lg-4"
                        label='Model'
                        placeholder='model'
                        type='text'
                        v-model='selected.model'>
                </v-text-field>
                <v-text-field class="form-input col-lg-4"
                        label='rok prod'
                        placeholder='rok produkcji'
                        type='number'
                        v-model='selected.year'>
                </v-text-field>
            </form>
        </div>

    </div>
</template>

<script lang='ts'>
    import {Component, Vue} from 'vue-property-decorator';

    @Component({})
    export default class Vehicle extends Vue {

        public search = '';
        public selected = {};
        public headers = [
            {text: 'Marka', value: 'name', align: 'left',},
            {text: 'Model', value: 'model',},
            {text: 'Nr rejestracyjny', value: 'nr', align: 'right'},
        ];
        public vehicles = [
            {
                name: 'Audi',
                model: "A4",
                nr: "RLA 304405",
            },
            {
                name: 'Opel',
                model: "Insygnia",
                nr: "RZE AB214",
            },
            {
                name: 'Audi',
                model: "A3",
                nr: "RLA 3021",
            },
        ];

    }

</script>

<style scoped lang="scss">

    .form-input{
        padding: 10px;
    }

</style>
