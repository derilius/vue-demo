<template>
    <v-data-table
            :headers="headers"
            :items="values"
            :search="search"
            sort-by="nr"
            class="elevation-1"
    >
        <template v-slot:top>
            <v-toolbar v-if="enable_header" flat color="white">
                <v-text-field
                        v-model="search"
                        label="Szukaj"
                        single-line
                        hide-details
                ></v-text-field>
                <v-divider
                        class="mx-4"
                        inset
                        vertical
                ></v-divider>
                <v-spacer></v-spacer>
                <v-dialog v-model="dialog" max-width="500px">
                    <template v-slot:activator="{ on }">
                        <v-btn color="primary" dark class="mb-2" v-on="on">Dodaj</v-btn>
                    </template>
                </v-dialog>
            </v-toolbar>
        </template>
        <template v-slot:no-data>
            <!--            <v-btn color="primary" @click="initialize">Reset</v-btn>-->
        </template>
    </v-data-table>
</template>

<script lang='ts'>
    import {Component, Prop, Vue} from 'vue-property-decorator';

    @Component({})
    export default class Table extends Vue {

        @Prop(Array)
        public values!: object[];
        @Prop(Array)
        public headers!: object[];
        @Prop(Boolean)
        public enable_header!: boolean;
        public search = '';

    }

</script>

<style scoped>

</style>