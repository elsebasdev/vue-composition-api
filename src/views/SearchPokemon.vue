
<template>
    <h1>Search Pokemon {{ pokemonId }}</h1>

    <form @submit.prevent="searchPokemon()">

        <label for="search">Buscar Pokemon:</label>
        <br>
        <input type="number" v-model="pokemonId" ref="txtPokemon">

    </form>
</template>

<script>
import { ref, onActivated } from 'vue'
import { useRouter } from 'vue-router';

export default {


    setup() {

        const router = useRouter();

        const pokemonId = ref();
        const txtPokemon = ref();

        onActivated(() => {
            txtPokemon.value.select();
        })

        
        return {
            pokemonId,
            txtPokemon,
            searchPokemon: () => {
                // console.log(pokemonId.value);
                router.push({ name: 'pokemon-id', params: { id: pokemonId.value } });
            }

        }

    }



}

</script>

<style scoped>
input {
    border: none;
    padding: 15px 10px;
    outline: 0;
    border: 1px solid rgba(128, 128, 128, 0.623);
    border-radius: 15px;
    margin-top: 10px;
    text-align: center;
    font-size: larger;
    font-weight: 900;
}
</style>
