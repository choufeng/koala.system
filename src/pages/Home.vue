<template>
  <div class="home">
    <router-link to="/system/login"><img :src="logo"></router-link>
  </div>
</template>

<script>
// @ is an alias to /src
import Logo from '../assets/img/logo-2.png'

export default {
  name: 'home',
  components: {
  },
  data () {
    return {
      logo: Logo
    }
  }
}
</script>

<style lang="less" scoped>
.home {
  height: 100vh;
  line-height: 100vh;
  text-align: center;
  background: #661a1a;
}
</style>
