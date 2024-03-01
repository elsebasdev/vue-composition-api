<template>
  <h1>User Page</h1>
  <span v-if="isLoading">espere por favor....</span>
  <span v-else>Usuarios</span>
  <h2 v-if="errorMessage">{{ errorMessage }}</h2>
  

  <ul v-if="users.length > 0">
    <li v-for="user in users" :key="user.id">{{ user.name }} - {{ user.username }}</li>
  </ul>
</template>

<script>
import useUsers from '@/composable/useUsers'
export default {

    setup(){

        const {users,isLoading,errorMessage} = useUsers();

        return {
          users,
          isLoading,
          errorMessage
        }

    }
}
</script>

<style>

</style>