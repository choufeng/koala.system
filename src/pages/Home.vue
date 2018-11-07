<template>
  <div class="home">
    <HelloWorld msg="Welcome to Your Vue.js App Jon"/>
  </div>
</template>

<script>
// @ is an alias to /src
import HelloWorld from '@/components/HelloWorld.vue'
import Logo from '../assets/img/logo-1.png'

export default {
  name: 'home',
  components: {
    HelloWorld
  },
  data () {
    return {
      logo: Logo
    }
  }
}
</script>
