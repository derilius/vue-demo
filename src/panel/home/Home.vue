<template>
    <div class="w-100 h-100 d-flex flex-wrap">

        <div class="content-div col-lg-4">
            <div class="w-100">
                <h4 class="d-flex justify-center">W NAPRAWIE</h4>
                <hr/>
            </div>
            <v-data-table class="elevation-1 w-100"
                          :headers="headers"
                          :items="notifications"
                          :items-per-page="5"
                          hide-default-header
                          hide-default-footer
            ></v-data-table>
        </div>

        <div class="content-div col-lg-4">
            <div class="w-100">
                <h4 class="d-flex justify-center">OSTATNIE NAPRAWY</h4>
                <hr/>
            </div>
            <v-data-table class="elevation-1 w-100"
                          :headers="headers"
                          :items="notifications"
                          :items-per-page="5"
                          hide-default-header
                          hide-default-footer
            ></v-data-table>
        </div>

        <div class="content-div col-lg-4">
            <div class="w-100">
                <h4 class="d-flex justify-center">AKTUALNE PROMOCJE</h4>
                <hr/>
            </div>
            <v-data-table class="elevation-1 w-100"
                          :headers="headers"
                          :items="notifications"
                          :items-per-page="5"
                          hide-default-header
                          hide-default-footer
            ></v-data-table>
        </div>

        <div class="content-div col-lg-12" style="min-height: 400px">
            <div class="col-lg-4">
                <div class="w-100">
                    <h4 class="d-flex justify-center">NOTIFICATIONS</h4>
                    <hr/>
                </div>
                <v-data-table
                        :headers="headers"
                        :items="notifications"
                        :items-per-page="5"
                        class="elevation-1"
                ></v-data-table>
            </div>

            <div class="col-lg-8" style="border-left: solid 1px black ">
                {{selected.text}}
            </div>
        </div>

    </div>
</template>

<script lang='ts'>
    import {Component, Vue} from 'vue-property-decorator';

    @Component({})
    export default class Home extends Vue {

        public headers = [
            {text: 'message', value: 'msg', sortable: false, align: 'left',},
            {text: 'From', value: 'from', sortable: false,},
            {text: 'Date', value: 'date', sortable: false,},
        ];
        public notifications = [
            {
                msg: 'Some text....',
                from: "John Smith",
                date: new Date(),
            },
            {
                msg: 'Other message...',
                from: "Somebody other",
                date: new Date(),
            },
            {
                msg: 'La lala lel...',
                text: "afgasfa fas fasfn asjfabn sofka nsfna sfpkan sfpak nfkasnf akpsnf kasfn paks afgasfa fas fasfn asjfabn sofka nsfna sfpkan sfpak nfkasnf akpsnf kasfn paks afgasfa fas fasfn asjfabn sofka nsfna sfpkan sfpak nfkasnf akpsnf kasfn paks afgasfa fas fasfn asjfabn sofka nsfna sfpkan sfpak nfkasnf akpsnf kasfn paks afgasfa fas fasfn asjfabn sofka nsfna sfpkan sfpak nfkasnf akpsnf kasfn paks afgasfa fas fasfn asjfabn sofka nsfna sfpkan sfpak nfkasnf akpsnf kasfn paks",
                from: "Somebody other",
                date: new Date(),
            },
        ];
        public selected = {};
    }

</script>

<style scoped lang="scss">

</style>
