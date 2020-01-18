<template>
    <div>
        <v-toolbar style="height: 65px!important;">
            <i class="fas fa-bars fa-2x"></i>

            <v-spacer></v-spacer>

            <v-toolbar-items>
                <v-menu
                        :close-on-content-click="false"
                        :nudge-width="200"
                        max-width="300px"
                        offset-y
                >
                    <template v-slot:activator="{ on }">
                        <v-btn v-on="on" text>
                            <i class="fas fa-bell" style="font-size: 20px"></i>
                        </v-btn>
                    </template>

                    <v-card>
                        <v-list v-for="title in titles" @click="title">
                            <v-list-item>
                                <v-list-item-content>
                                    <v-list-item-title>{{title}}</v-list-item-title>
                                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris faucibus porttitor
                                    accumsan. Cras non tellus.
                                </v-list-item-content>
                            </v-list-item>
                            <v-divider></v-divider>
                        </v-list>
                    </v-card>
                </v-menu>

                <v-menu offset-y bottom left>
                    <template v-slot:activator="{ on }">
                        <v-btn v-on="on" text>
                            imie nazwisko <i class="fas fa-sort-down fa-2x"
                                             style="padding-bottom: 10px; padding-left: 3px"></i>
                        </v-btn>
                    </template>

                    <v-list>
                        <v-list-item
                                v-for="(option, i) in options"
                                :key="i"
                                @click=""
                        >
                            <v-list-item-title>{{ option }}</v-list-item-title>
                        </v-list-item>
                        <v-list-item @click='onLogout'><i class="fas fa-sign-out-alt"></i> &nbsp; Wyloguj
                        </v-list-item>
                    </v-list>
                </v-menu>
            </v-toolbar-items>

        </v-toolbar>
    </div>
</template>

<script lang='ts'>
    import {Component, Emit, Vue} from 'vue-property-decorator';

    @Component({})
    export default class Toolbar extends Vue {

        public titles: string[] = ['Title 1', 'Title 2', 'Title 3'];
        public options: string[] = ['Opcja 1', 'Opcja 2', 'Opcja 3'];

        @Emit('logout')
        public onLogout() {
            return 0;
        }

    }
</script>

<style scoped>

</style>
