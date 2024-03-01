<template>
  <div class="home">
    <h1>Reactive Vs Ref</h1>
    {{ hero }}
    <br>
    {{ otherHero }}
    <br>
    <button @click="changeHero()">hero 1</button>
    <button @click="changeOtherHero()">hero 2</button>
  </div>
</template>

<script>
// @ is an alias to /src
import { ref, reactive } from "vue";
export default {
  name: 'HomeView',
  components: {
    
  },

  setup(){

    const hero = ref({name: 'Iron man', age: 40})
    const otherHero = reactive({name: 'Hulk', age: 50})

    const changeHero = ()=>{
      hero.value.name = 'Iron-man';
      hero.value.age = 45;
    }

    const changeOtherHero = () => {
      otherHero.age = 55;
      otherHero.name = 'Bruce Banner'
    }

    return{
      hero,
      otherHero,
      changeHero,
      changeOtherHero
    }
  }

}
</script>
