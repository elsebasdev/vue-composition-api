import {onUnmounted, ref} from 'vue'
import axios from 'axios'

const useUsers = ()=> {

        const users = ref([]);
        const isLoading = ref(false);
        const errorMessage = ref();

        const getUser = async () => {
            console.log("realizando solicitud")
            isLoading.value = true;
            const {data} = await axios.get('https://jsonplaceholder.typicode.com/users');
             if (data.length > 0) {
                users.value = data
             }else{
                errorMessage.value = 'No hay mas usuarios...'
             }
            isLoading.value = false;

        }

        getUser()

        return {
            users,
            isLoading,
            errorMessage
        }

}

export default useUsers