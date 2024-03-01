import { ref } from 'vue';


const useCounter = ( initialValue = 5) => {

        const counter = ref(initialValue);
        const increment = ()=> {
            counter.value++;
        }
        const decrement = ()=> {
            counter.value--;
        }
        return{
            counter,
            increment,
            decrement
        }


}

export default useCounter