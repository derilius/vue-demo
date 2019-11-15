<template>
    <div class="w-100 h-100 d-flex flex-wrap">

        <div class="col-lg-4">
            <Table
                    :enable_header="true"
                    :headers="headers"
                    :values="vehicles"
            ></Table>
        </div>

        <div class="content-div col-lg-8">
            <div class="w-100 d-flex flex-wrap">
                <label class="w-100" style="text-align: right;font-size: 20px;padding: 5px 10px 5px 10px">
                    Audi A3 RLA 3021
                </label>
                <v-divider class="w-100 mx-4"
                           style="padding-bottom: 15px"
                ></v-divider>
            </div>
            <div class="d-flex flex-wrap w-100">
                <v-text-field class="form-input col-lg-4"
                              label='Rok prod'
                              placeholder='Rok prod'
                              type='text'
                              v-model='selected.year'>
                </v-text-field>
                <v-text-field class="form-input col-lg-8"
                              label='VIN'
                              placeholder='VIN'
                              type='text'
                              v-model='selected.vin'>
                </v-text-field>
                <v-text-field class="form-input col-lg-4"
                              label='Ozn. silnika'
                              placeholder='Ozn. silnika'
                              type='text'
                              v-model='selected.engine'>
                </v-text-field>
                <v-text-field class="form-input col-lg-4"
                              label='Pojemność'
                              placeholder='Pojemność'
                              type='number'
                              v-model='selected.capacity'>
                </v-text-field>
                <v-text-field class="form-input col-lg-4"
                              label='Paliwo'
                              placeholder='Paliwo'
                              type='text'
                              v-model='selected.fuel'>
                </v-text-field>
            </div>
            <div class="w-100 d-flex flex-wrap">
                <h2>Historia</h2>
                <div style="width: 100%;min-height: 1px;max-height: 1px; background-color: lightgray; margin-bottom: 1rem;margin-top: 0.5rem"></div>
            </div>
            <div class="w-100 d-flex">
                <Table class="w-100"
                       :enable_header="false"
                       :headers="headers2"
                       :values="history"
                ></Table>
            </div>
        </div>

    </div>
</template>

<script lang='ts'>
    import {Component, Vue} from 'vue-property-decorator';
    import Table from "@/panel/vehicle/Table.vue";

    @Component({
        components: {Table}
    })
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
        public headers2 = [
            {text: 'Data', value: 'date', align: 'left',},
            {text: 'Osoba', value: 'worker',},
            {text: 'Koszt', value: 'cost', align: 'right'},
        ];
        public history = [
            {
                date: new Date().toDateString(),
                worker: "Jan Kowalski",
                cost: 1200,
            },
            {
                date: new Date().toDateString(),
                worker: "Adam Nowak",
                cost: 300,
            },
            {
                date: new Date().toDateString(),
                worker: "Jan Kowalski",
                cost: 750,
            },
        ];

    }

</script>

<style scoped lang="scss">

    .form-input {
        padding: 10px;
    }

</style>
