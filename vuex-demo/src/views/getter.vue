<template>
<div>
  <h1>{{getTitl1}}</h1>
  <hr>
  <ul>
    <li v-for="item in todoList" :key="item.id">{{item.text}}</li>
  </ul>
  <br>
  <ul>
    <li v-for="(item,index) in getLetters" :key="index"> {{item}}</li>
  </ul>
</div>
</template>
<script>
import { mapGetters } from "vuex";
export default {
data() {
  return {}
},
computed: {
  getTitl1() {
    console.log(this.$store)
    return this.$store.getters.getTitle1
  },
  todoList() {
    return this.$store.getters.doneTodos
  },
  ...mapGetters([
    'getLetters'
  ])
},
mounted(){
  console.log(this.getLetters)
},
}
</script>

