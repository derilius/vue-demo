<template>

    <div class="data-content-text">
        <p>
            Lorem Ipsum jest tekstem stosowanym jako przykładowy wypełniacz w przemyśle poligraficznym.
            Został po raz pierwszy użyty w XV w. przez nieznanego drukarza do wypełnienia tekstem
            próbnej książki. Pięć wieków później zaczął być używany przemyśle elektronicznym, pozostając
            praktycznie niezmienionym. Spopularyzował się w latach 60. XX w. wraz z publikacją arkuszy
            Letrasetu, zawierających fragmenty Lorem Ipsum, a ostatnio z zawierającym różne wersje Lorem
            Ipsum oprogramowaniem przeznaczonym do realizacji druków na komputerach osobistych, jak
            Aldus PageMaker
        </p>
    </div>

</template>

<script lang="ts">
import {Component, Vue} from 'vue-property-decorator';

@Component
export default class TextContent extends Vue {

}
</script>

<style scoped>

    .data-content-text {
        display: flex;
        align-content: stretch;
        align-items: stretch;
        background-color: white;
        padding: 30px 30px 30px 30px;
        border-radius: 20px 20px 20px 20px;
    }

</style>
