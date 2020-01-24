<template>
    <div class="content-div col-lg-12">

        <template>
            <v-data-table
                    :headers="headers"
                    :items="data"
                    sort-by="lastName"
                    class="elevation-1"
            >
                <template v-slot:top>
                    <v-toolbar flat color="white">
                        <v-toolbar-title>Nieruchomości</v-toolbar-title>
                        <v-divider
                                class="mx-4"
                                inset
                                vertical
                        ></v-divider>
                        <v-spacer></v-spacer>
                        <v-dialog v-model="dialog" max-width="500px">
                            <template v-slot:activator="{ on }">
                                <v-btn color="primary" dark class="mb-2" v-on="on" @click="formTitle = 'utwórz'">Dodaj
                                </v-btn>
                            </template>
                            <v-card>
                                <v-card-title>
                                    <span class="headline">{{ formTitle }}</span>
                                </v-card-title>

                                <v-card-text>
                                    <v-container>
                                        <v-row>
                                            <v-col cols="12" sm="6" md="4">
                                                <v-text-field v-model="editedItem.address"
                                                              label="adres">
                                                </v-text-field>
                                            </v-col>
                                            <v-col cols="12" sm="6" md="4">
                                                <v-text-field v-model="editedItem.area"
                                                              label="powierzchnia">
                                                </v-text-field>
                                            </v-col>
                                            <v-col cols="12" sm="6" md="4">
                                                <v-text-field v-model="editedItem.type"
                                                              label="Typ">
                                                </v-text-field>
                                            </v-col>
                                            <v-col cols="12" sm="6" md="4">
                                                <v-text-field v-model="editedItem.condition"
                                                              label="stan">
                                                </v-text-field>
                                            </v-col>
                                            <v-col cols="12" sm="6" md="4">
                                                <v-text-field v-model="editedItem.floor"
                                                              label="piętro">
                                                </v-text-field>
                                            </v-col>
                                            <v-col cols="12" sm="6" md="4">
                                                <v-text-field v-model="editedItem.price"
                                                              type="number"
                                                              label="cena">
                                                </v-text-field>
                                            </v-col>
                                            <v-col cols="12" sm="6" md="4">
                                                <v-text-field v-model="editedItem.handingDate"
                                                              type="date"
                                                              label="data oddania">
                                                </v-text-field>
                                            </v-col>
                                            <v-col cols="12" sm="6" md="4">
                                                <v-text-field v-model="editedItem.roomsNumber"
                                                              type="number"
                                                              label="liczba pokoi">
                                                </v-text-field>
                                            </v-col>
                                            <v-col cols="12" sm="6" md="4">
                                                <v-text-field v-model="editedItem.roomsFloors"
                                                              type="number"
                                                              label="liczba pomieszczen">
                                                </v-text-field>
                                            </v-col>
                                            <v-select cols="12" sm="6" md="4"
                                                      :items="peoples"
                                                      item-text="fullName"
                                                      item-value="id"
                                                      v-model="editedItem.personId"
                                                      label="właściciel"
                                            ></v-select>
                                        </v-row>
                                    </v-container>
                                </v-card-text>

                                <v-card-actions>
                                    <v-spacer></v-spacer>
                                    <v-btn color="blue darken-1" text @click="close">Anuluj</v-btn>
                                    <v-btn color="blue darken-1" text @click="save">Zapisz</v-btn>
                                </v-card-actions>
                            </v-card>
                        </v-dialog>
                    </v-toolbar>
                </template>
                <template v-slot:item.action="{ item }">
                    <i class="fas fa-edit" @click="editItem(item)"></i>
                    &nbsp;
                    <i class="fas fa-trash" @click="deleteItem(item)"></i>
                </template>
                <template v-slot:no-data>
                    <v-btn color="primary" @click="getAll">Odśwież</v-btn>
                </template>
            </v-data-table>
        </template>

    </div>
</template>

<script lang='ts'>
    import {Component, Vue} from 'vue-property-decorator';
    import PropertyService from '@/panel/property/PropertyService';
    import NotificationService from '@/modules/NotificationService';
    import {Property, SimplePerson} from '@/panel/property/types';

    @Component({})
    export default class People extends Vue {

        public dialog = false;
        public formTitle = '';
        public headers = [
            {text: 'Adress', value: 'address'},
            {text: 'Powierzchnia', value: 'area'},
            {text: 'Typ', value: 'type'},
            {text: 'Stan', value: 'condition'},
            {text: 'Piętro', value: 'floor'},
            {text: 'Cena', value: 'price'},
            {text: 'Liczba pokoi', value: 'roomsNumber'},
            {text: 'Liczba pięter', value: 'roomsFloors'},
            {text: 'Data oddania', value: 'handingDate'},
            {text: 'Actions', value: 'action', sortable: false},
        ];
        public data: Property[] = [];
        public peoples: SimplePerson[] = [];
        public editedItem: Property = {
            address: '',
            area: 0,
            condition: 0,
            floor: '',
            handingDate: 0,
            id: 0,
            price: '',
            roomsFloors: '',
            roomsNumber: 0,
            type: '',
        };

        public editItem(item: Property) {
            this.formTitle = 'edytuj';
            this.editedItem = Object.assign({}, item);
            this.dialog = true;
        }

        public deleteItem(item: Property) {
            const confirmed = confirm('Jesteś pewnien, że chcesz usunąć?');
            if (confirmed) {
                this.delete(item.id);
            }
        }

        public close() {
            this.dialog = false;
            this.editedItem = {} as Property;
        }

        public save() {
            if (this.editedItem.id > 0) {
                this.edit(this.editedItem.id, this.editedItem);
            } else {
                this.create(this.editedItem);
            }
            this.close();
        }

        public mounted() {
            this.getAll();
            this.getPeople();
        }

        public async getAll() {
            try {
                this.data = await PropertyService.getAll();
            } catch (e) {
                NotificationService.error(e);
            }
        }

        public async getPeople() {
            try {
                this.peoples = await PropertyService.getPeople();
            } catch (e) {
                NotificationService.error(e);
            }
            this.peoples.map(p => {
                p.fullName = p.firstName + ' ' + p.lastName;
            });
        }

        public async create(formData: {}) {
            try {
                await PropertyService.save(formData);
                this.getAll();
            } catch (e) {
                NotificationService.error(e);
            }
        }

        public async edit(id: number, formData: {}) {
            try {
                await PropertyService.update(id, formData);
                this.getAll();
            } catch (e) {
                NotificationService.error(e);
            }
        }

        public async delete(id: number) {
            try {
                await PropertyService.delete(id);
                this.getAll();
            } catch (e) {
                NotificationService.error(e);
            }
        }

    }
</script>

<style scoped lang="scss">

</style>
