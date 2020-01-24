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
                        <v-toolbar-title>Osoby</v-toolbar-title>
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
                                                <v-text-field v-model="editedItem.firstName"
                                                              label="Imie">
                                                </v-text-field>
                                            </v-col>
                                            <v-col cols="12" sm="6" md="4">
                                                <v-text-field v-model="editedItem.lastName"
                                                              label="Nazwisko">
                                                </v-text-field>
                                            </v-col>
                                            <v-col cols="12" sm="6" md="4">
                                                <v-text-field v-model="editedItem.address"
                                                              label="Adres">
                                                </v-text-field>
                                            </v-col>
                                            <v-col cols="12" sm="6" md="4">
                                                <v-text-field v-model="editedItem.telephone"
                                                              label="Nr telefonu">
                                                </v-text-field>
                                            </v-col>
                                            <v-col cols="12" sm="6" md="4">
                                                <v-text-field v-model="editedItem.pesel"
                                                              label="pesel">
                                                </v-text-field>
                                            </v-col>
                                            <v-col cols="12" sm="6" md="4">
                                                <v-text-field v-model="editedItem.birthday"
                                                              type="date"
                                                              label="data urodzenia">
                                                </v-text-field>
                                            </v-col>
                                            <v-col cols="12" sm="6" md="4">
                                                <v-text-field v-model="editedItem.salary"
                                                              type="number"
                                                              label="wypłata">
                                                </v-text-field>
                                            </v-col>
                                            <v-col cols="12" sm="6" md="4">
                                                <v-text-field v-model="editedItem.workedDate"
                                                              type="date"
                                                              label="data zatrudnienia">
                                                </v-text-field>
                                            </v-col>
                                            <v-select cols="12" sm="6" md="4"
                                                      :items="roles"
                                                      item-text="name"
                                                      item-value="id"
                                                      v-model="editedItem.roleId"
                                                      label="rola"
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
    import PeopleService from "@/panel/history/PeopleService";
    import NotificationService from "@/modules/NotificationService";
    import {Person} from "@/panel/history/types";

    @Component({})
    export default class People extends Vue {

        public dialog = false;
        public formTitle = '';
        public headers = [
            {text: 'Imie', value: 'firstName'},
            {text: 'Nazwisko', value: 'lastName'},
            {text: 'Adress', value: 'address'},
            {text: 'Nr telefonu', value: 'telephone'},
            {text: 'Pesel', value: 'pesel'},
            {text: 'Data urodzenia', value: 'birthday'},
            {text: 'Rola', value: 'roleName'},
            {text: 'Wypłata', value: 'salary'},
            {text: 'Data zatrudnienia', value: 'workedDate'},
            {text: 'Actions', value: 'action', sortable: false},
        ];
        public data: [] = [];
        public roles: [] = [];
        public editedItem: Person = {
            address: '',
            birthday: '',
            firstName: '',
            id: 0,
            lastName: '',
            pesel: '',
            roleId: 0,
            roleName: '',
            salary: 0,
            telephone: '',
            workedDate: ''
        };

        public editItem(item: Person) {
            this.formTitle = 'edytuj';
            this.editedItem = Object.assign({}, item);
            this.dialog = true
        }

        public deleteItem(item: Person) {
            const confirmed = confirm('Jesteś pewnien, że chcesz usunąć?');
            if (confirmed) {
                this.delete(item.id);
            }
        }

        public close() {
            this.dialog = false;
            this.editedItem = {} as Person;
        }

        public save() {
            if (this.editedItem.id > 0) {
                this.edit(this.editedItem.id, this.editedItem);
            } else {
                this.create(this.editedItem);
            }
            this.close()
        }

        mounted() {
            this.getAll();
            this.getRoles();
        }

        public async getAll() {
            try {
                this.data = await PeopleService.getAll();
            } catch (e) {
                NotificationService.error(e);
            }
        }

        public async getRoles() {
            try {
                this.roles = await PeopleService.getRoles();
            } catch (e) {
                NotificationService.error(e);
            }
        }

        public async create(formData: {}) {
            try {
                await PeopleService.save(formData);
                this.getAll();
            } catch (e) {
                NotificationService.error(e);
            }
        }

        public async edit(id: number, formData: {}) {
            try {
                await PeopleService.update(id, formData);
                this.getAll();
            } catch (e) {
                NotificationService.error(e);
            }
        }

        public async delete(id: number) {
            try {
                await PeopleService.delete(id);
                this.getAll();
            } catch (e) {
                NotificationService.error(e);
            }
        }

    }
</script>

<style scoped lang="scss">

</style>
