<template>
  <div class="home">
    <img alt="Vue logo" src="../assets/logo.png">
    <HelloWorld msg="123"/>
    <router-view></router-view>
    <el-button @click="$router.push({name: 'About'})">{{test}}</el-button>
  </div>
</template>

<script>
import {mapGetters, mapActions} from 'vuex';
import HelloWorld from '@/components/HelloWorld.vue'

export default {
  name: 'Home',
  components: {
    HelloWorld
  },
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
