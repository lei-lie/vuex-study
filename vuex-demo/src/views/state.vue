<template>
<div>
  <h1>{{ getTitle }}</h1>
  <hr>
  <h3>{{ msg }}</h3>
  <hr>
  <div class="username">
    username: <input type="text" v-model="user.name">
  </div>
  <br>
  <div class="username">
    password: <input type="password" v-model="user.password">
  </div>

</div>
</template>
<script>
import { mapState } from "vuex";
export default {
  data() {
    return {

    }
  },
  computed: {
    getTitle() {
      return this.$store.state.title;
    },
    ...mapState(['user','msg'])
  }
}
</script>
