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
                                                <v-text-field v-model="name"
                                                              label="nazwa">
                                                </v-text-field>
                                            </v-col>
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
                    <i v-if="item.id !== 1 && item.id !== 2" class="fas fa-trash" @click="deleteItem(item)"></i>
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
    import NotificationService from '@/modules/NotificationService';
    import {TransactionType} from '@/panel/transaction/types';
    import RoleService from '@/panel/role/RoleService';
    import {IRole} from '@/panel/role/types';

    @Component({})
    export default class Role extends Vue {

        public dialog = false;
        public formTitle = '';
        public name = '';
        public headers = [
            {text: 'Nazwa', value: 'name'},
            {text: 'Actions', value: 'action', sortable: false},
        ];
        public data: IRole[] = [];

        public deleteItem(item: TransactionType) {
            const confirmed = confirm('Jesteś pewnien, że chcesz usunąć?');
            if (confirmed) {
                this.delete(item.id);
            }
        }

        public close() {
            this.dialog = false;
        }

        public save() {
            this.create(this.name);
            this.close();
        }

        public mounted() {
            this.getAll();
        }

        public async getAll() {
            try {
                this.data = await RoleService.getAll();
            } catch (e) {
                NotificationService.error(e);
            }
        }

        public async create(name: string) {
            try {
                await RoleService.save(name);
                this.getAll();
            } catch (e) {
                NotificationService.error(e);
            }
        }

        public async delete(id: number) {
            try {
                await RoleService.delete(id);
                this.getAll();
            } catch (e) {
                NotificationService.error(e);
            }
        }

    }
</script>

<style scoped lang="scss">

</style>
