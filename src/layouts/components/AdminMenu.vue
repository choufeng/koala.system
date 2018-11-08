<template>
  <div class="menu text-left pl1">
    <el-row>
      <el-col :span="24">
      <img :src="logo" />
      </el-col>
      <el-col :span="24">
        <el-menu
          default-active="1"
          class="el-menu-vertical-demo"
          @open="handleOpen"
          @close="handleClose"
          background-color="#661a1a"
          text-color="#fff"
          active-text-color="#f57f17">
          <el-menu-item index="1">
            <i class="el-icon-menu"></i>
            <span slot="title">Dashboard</span>
          </el-menu-item>
          <el-submenu index="2">
            <template slot="title">
              <i class="el-icon-location"></i>
              <span>内部管理</span>
            </template>
            <el-menu-item-group>
              <el-menu-item index="2-1">权限组管理</el-menu-item>
              <el-menu-item index="2-2">人员管理</el-menu-item>
            </el-menu-item-group>
          </el-submenu>
          <el-menu-item index="3">
            <i class="el-icon-document"></i>
            <span slot="title">分类管理</span>
          </el-menu-item>
          <el-menu-item index="4">
            <i class="el-icon-setting"></i>
            <span slot="title">文章管理</span>
          </el-menu-item>
        </el-menu>
      </el-col>
    </el-row>
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
.menu {
  .el-menu {
    border: 0;
    .is-active {
      font-size: 1.2rem;
    }
  }
}
</style>
