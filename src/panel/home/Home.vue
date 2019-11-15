<template>
    <div class="w-100 h-100 d-flex flex-wrap">

        <div class="content-div col-lg-6">
            <div class="w-100">
                <h4 class="d-flex">W NAPRAWIE</h4>
                <div style="width: 100%;min-height: 1px;max-height: 1px; background-color: lightgray; margin-bottom: 1rem;margin-top: 0.5rem"></div>
            </div>
            <v-data-table class="elevation-1 w-100"
                          :headers="inRepairHeaders"
                          :items="inRepair"
                          :items-per-page="5"
                          hide-default-footer
            ></v-data-table>
        </div>

        <div class="content-div col-lg-6">
            <div class="w-100">
                <h4 class="d-flex">OSTATNIE NAPRAWY</h4>
                <div style="width: 100%;min-height: 1px;max-height: 1px; background-color: lightgray; margin-bottom: 1rem;margin-top: 0.5rem"></div>
            </div>
            <v-data-table class="elevation-1 w-100"
                          :headers="afterRepairHeaders"
                          :items="afterRepair"
                          :items-per-page="5"
                          hide-default-footer
            ></v-data-table>
        </div>

<!--        <div class="content-div col-lg-4">-->
<!--            <div class="w-100">-->
<!--                <h4 class="d-flex justify-center">AKTUALNE PROMOCJE</h4>-->
<!--                <hr/>-->
<!--            </div>-->
<!--            <v-data-table class="elevation-1 w-100"-->
<!--                          :headers="headers"-->
<!--                          :items="notifications"-->
<!--                          :items-per-page="5"-->
<!--                          hide-default-header-->
<!--                          hide-default-footer-->
<!--            ></v-data-table>-->
<!--        </div>-->

<!--        <div class="content-div col-lg-12" style="min-height: 400px">-->
<!--            <div class="col-lg-4">-->
<!--                <div class="w-100">-->
<!--                    <h4 class="d-flex justify-center">NOTIFICATIONS</h4>-->
<!--                    <hr/>-->
<!--                </div>-->
<!--                <v-data-table-->
<!--                        :headers="headers"-->
<!--                        :items="notifications"-->
<!--                        :items-per-page="5"-->
<!--                        class="elevation-1"-->
<!--                ></v-data-table>-->
<!--            </div>-->

<!--            <div class="col-lg-8" style="border-left: solid 1px black ">-->
<!--                {{selected.text}}-->
<!--            </div>-->
<!--        </div>-->

    </div>
</template>

<script lang='ts'>
    import {Component, Vue} from 'vue-property-decorator';

    @Component({})
    export default class Home extends Vue {

        public inRepairHeaders = [
            {text: 'Pojazd', value: 'msg', sortable: false, align: 'left',},
            {text: 'Pracownik', value: 'from', sortable: false,},
            {text: 'Data rozpoczęcia', value: 'date', sortable: false,},
            {text: 'Inne', value: 'others', sortable: false,},
        ];
        public inRepair = [
            {
                msg: 'Some text....',
                from: "John Smith",
                date: new Date().toDateString(),
                others: "pytanie o części",
            },
            {
                msg: 'Other message...',
                from: "Somebody other",
                date: new Date().toDateString(),
                others: "brak powiadomień",
            },
            {
                msg: 'La lala lel...',
                from: "Somebody other",
                date: new Date().toDateString(),
                others: "brak powiadomień",
            },
        ];
        public afterRepairHeaders = [
            {text: 'Pojazd', value: 'msg', sortable: false, align: 'left',},
            {text: 'Pracownik', value: 'from', sortable: false,},
            {text: 'Data zakończenia', value: 'date', sortable: false,},
            {text: 'Inne', value: 'others', sortable: false,},
        ];
        public afterRepair = [
            {
                msg: 'Some text....',
                from: "John Smith",
                date: new Date().toDateString(),
                others: "nierozliczone",
            },
            {
                msg: 'Other message...',
                from: "Somebody other",
                date: new Date().toDateString(),
                others: "oczekiwanie na części",
            },
            {
                msg: 'La lala lel...',
                from: "Somebody other",
                date: new Date().toDateString(),
                others: "zakończone, rozliczone",
            },
        ];
        public selected = {};
    }

</script>

<style scoped lang="scss">

</style>
