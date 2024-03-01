<template>
  <h1>Pokemon #{{ route.params.id }}</h1>

  <span v-if="!errorMessage && !pokemon">Buscando</span>
  <span v-else-if="errorMessage"> {{ errorMessage }}</span>
  <template v-else>
    <h3>{{ pokemon.name }}</h3>
    <img :src="pokemon.sprites.front_default" :alt="pokemon.name">
    <br>
    <router-link :to="{name:'search-pokemon'}">Regresar</router-link>
  </template>

</template>

<script>
import { watch } from 'vue';
import { useRoute,onBeforeRouteLeave } from 'vue-router';
import usePokemon from "@/composable/usePokemon";

export default {

    setup(){

        const route = useRoute();

        const { isLoading,getPokemon,pokemon,errorMessage } = usePokemon(route.params['id'])


        onBeforeRouteLeave(() => 
        {
            const message = window.confirm('¿Esta seguro que desea salir?')
            if (!message) {
                return false
            }
        })

        watch(
            () => route.params['id'],
            () => getPokemon(route.params['id'])
        )

        return{
            route,
            isLoading,
            getPokemon,
            pokemon,
            errorMessage
        }

    }

}
</script>

<style scoped>

    h1{
        font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
        font-weight: 600;
        color: darkslategray;
    }
    h3{
        font-family: Verdana, Geneva, Tahoma, sans-serif;
        text-transform: uppercase;
        user-select: none;
    }

</style>