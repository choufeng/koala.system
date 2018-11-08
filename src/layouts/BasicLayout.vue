<template>
  <div class="basic-layout">
    <el-container>
      <el-aside class="left">
        <AdminMenu />
      </el-aside>
      <el-container>
        <el-header height="6vh" class="header">
          <AdminHeader />
        </el-header>
        <el-main class="main">
          <router-view />
        </el-main>
      </el-container>
    </el-container>
  </div>
</template>
<script>
import AdminHeader from './components/AdminHeader.vue'
import AdminMenu from './components/AdminMenu.vue'
export default {
  components: {
    AdminHeader, AdminMenu
  }
}
</script>
<style lang="less" scoped>
.basic-layout {
  .left {
    background: #661a1a;
    height: 100vh;
    color: #fff;
    width: 3rem;
    border: 1px solid #000;
  }
  .left::-webkit-scrollbar {
    width: 0;
  }
  .header {
    background: #FFF;
    padding: 0;
    border-bottom: 1px solid #DCDFE6;
  }
}
</style>
