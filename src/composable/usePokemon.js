import axios from 'axios';
import { ref } from 'vue'; 

const usePokemon = (idpokemon = 1) => {


    const pokemon = ref();
    const isLoading = ref(false);
    const errorMessage = ref()

    const getPokemon = async(id) =>{
        if(!id) return
        console.log(id);
        pokemon.value = null
        try{ 
            
            const { data } = await axios.get(`https://pokeapi.co/api/v2/pokemon/${id}`)
            pokemon.value = data;

        } catch (error) {
            errorMessage.value = error
        }


    }

    getPokemon(idpokemon);

    return{
        pokemon,
        isLoading,
        errorMessage,
        getPokemon
    }


}


export default usePokemon