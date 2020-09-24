<template>
  <div class="home">
    <img alt="Vue logo" src="../assets/logo.png">
    <el-button @click="$router.push({name: 'About'})">{{test}}</el-button>
    <hello-world msg="123"></hello-world>
    <router-view></router-view>
  </div>
</template>

<script>
import {mapGetters, mapActions} from 'vuex';
export default {
  name: 'Home',
  computed: {
    ...mapGetters(['test'])
  },
  created() {
    if (this.$route.name === 'Home') {
      this.$router.replace({name: 'Home.index'});
    }
    this.textFunc();
  },
  methods: {
    ...mapActions('user', [
      'textFunc'
    ])
  }
}
</script>
