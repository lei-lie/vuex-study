<template>
  <div>
    <h1>mutation studying</h1>
    <hr>
    <button @click="add">++</button>
    <input type="text" v-model="count">

    <hr>
    <button @click="showTxt">showTxt</button>
    <div v-if="showText">mapMutations study</div>
  </div>
</template>
<script>
import { mapState , mapMutations } from "vuex";
export default {
  data() {
    return {

    }
  },
  computed: {
    ...mapState(['count','showText']),
    // ...mapMutations({
    //   showTxt: ''
    // })
  },
  methods: {
    showTxt() {
      this.$store.commit('SHOWTXT')
    },
    add() {
      this.$store.commit('INCREASE', {
        num: 10
      })
    },
  }
}
</script>

