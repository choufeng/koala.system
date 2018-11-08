<template>
  <div class="userlayout">
    <el-container>
      <el-aside class="left" width="30vw">
        <img :src='logo' />
      </el-aside>
      <el-container>
        <el-main class="main">
          <router-view />
        </el-main>
      </el-container>
    </el-container>
  </div>
</template>

<script>
import Logo from '@/assets/img/logo-3.png'
export default {
  data () {
    return {
      logo: Logo
    }
  }
}
</script>

<style lang="less" scoped>
.userlayout {
  .left {
    height: 100vh;
    background: #661a1a;
    line-height: 100vh;
    img {
      vertical-align: middle;
      width: 200px;
    }
  }
  .main {
    padding-top: 40vh;
  }
}
</style>
