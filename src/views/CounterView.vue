
<template>
    
    <h1>Counter Page</h1>
    <h3>{{ counter }}</h3>
    <button @click="increment">+</button>
    <button @click="decrement">-</button>
</template>

<script>

import  useCounter from "../composable/useCounter";

export default {
    name:'Counter',
    props: {},
    emits:[],
    
    setup(){

        const { counter, increment, decrement } = useCounter(25)

        return{
            counter,
            increment,
            decrement
        }
        
    }
}
</script>

<style scoped>
button{
    background: #f85a17;
    padding: 10px 15px;
    color: white;
    border: none;
    border-radius: 16px;
    margin: 2px;
}
</style>