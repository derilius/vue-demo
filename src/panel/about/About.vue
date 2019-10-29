<template>
    <div class="d-flex w-100">

        <div class="content-div col-lg-3">
                       <pre>
                         {{userInfo}}
                       </pre>
        </div>

        <div class="content-div col-lg-3">
            <form class="content-div-form">
                <v-text-field class="w-100"
                              v-for='(field) in fields' :key='field'
                              :label='field'
                              :placeholder='field'
                              :disabled="field === 'id'"
                              v-model='formData.create[field]'>
                </v-text-field>
                <v-btn block @click='create'> create</v-btn>
            </form>
        </div>

        <div class="content-div col-lg-3">
            <v-btn v-if="contractors.get.length === 0" class="ioio" block @click='get' style="color: white;font-size: 16px"> get</v-btn>
            <pre v-else class="w-100 d-flex justify-center">{{contractors.get}}</pre>
        </div>

        <div class="content-div col-lg-3">
            <form v-if="contractors.find.length === 0" class="content-div-form">
                <v-select
                        :items="fields"
                        label="Select field"
                        outlined
                        v-model='formData.find.column'>
                </v-select>
                <v-text-field
                        label='value'
                        placeholder='value'
                        v-model='formData.find.value'>
                </v-text-field>
                <v-btn block @click='find'> find</v-btn>
            </form>
            <pre v-else class="w-100 d-flex justify-center align-end">{{contractors.find}}</pre>
        </div>

    </div>
</template>

<script lang='ts'>
    import {Component, Vue} from 'vue-property-decorator';
    import LoginService from '@/panel/auth/LoginService';
    import ApiService from "@/modules/ApiService";

    @Component({})
    export default class Home extends Vue {

        get userInfo(): { id: number } {
            return this.$store.getters.getUserData;
        }

        public fields: string[] = [];
        public formData: { create: { [x: string]: any }, find: { column: string, value: any } } = {
            create: {},
            find: {column: "", value: null}
        };
        public contractors: { get: [], find: [] } = {
            get: [],
            find: []
        };

        public logout() {
            LoginService.logout();
        }

        public async mounted() {
            this.fields = await ApiService.get(`private/contractor/fields/1`);
            this.fields.forEach(field => this.formData.create[field] = null);
        }

        public async create() {
            await ApiService.post('/private/contractor', this.formData.create);
        }

        public async get() {
            this.contractors.get = await ApiService.get('/private/contractor');
        }

        public async find() {
            this.contractors.find = await ApiService.post('/private/contractor/find', this.formData.find);
        }

    }

</script>

<style scoped lang="scss">

    .about {
        display: flex;
        justify-content: flex-start;
        background-color: white;
        min-height: 100vh;
    }

    .content {
        margin-left: 200px;
        height: 100vh;
        background-color: rgb(238, 238, 238);
    }

    .data-content {
        display: flex;
        flex-wrap: wrap;
        padding: 5px;
    }

    .content-div {
        display: flex;
        flex-direction: column;
        background-color: white;
        flex-wrap: wrap;
        border: 5px solid rgb(238, 238, 238);
        border-radius: 20px;
    }

    .content-div-form {
        display: flex;
        flex-wrap: wrap;
        padding: 5px;
    }

    p {
        text-align: justify;
    }

    @keyframes yourAnimation {
        0% {
            background: blue;
        }
        50% {
            transform: rotate(xx);
            background: red;
        }
        100% {
            transform: rotate(xx);
            background: blue;
        }
    }

    .ioio {
        animation: yourAnimation 1s infinite 0s linear;
    }

</style>
