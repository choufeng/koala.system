<template>
  <div class="menu text-left pl1">
    <el-row>
      <el-col :span="24">
      <img :src="logo" />
      </el-col>
      <el-col :span="24">
        <el-menu
          :router="true"
          default-active="1"
          class="el-menu"
          background-color="#7b2a21"
          text-color="#fff"
          active-text-color="#f57f17">
          <el-menu-item index="1" route="/admin/dashboard">
            <i class="el-icon-menu"></i>
            <span slot="title"> 控制面板</span>
          </el-menu-item>
          <el-submenu index="2" v-if="isShow('insider')">
            <template slot="title">
              <i class="el-icon-location"></i>
              <span>{{nodes.get('insider')}}</span>
            </template>
            <el-menu-item-group>
              <el-menu-item index="2-1" route="/admin/group" v-if="isShow('insider.group')">{{nodes.get('insider.group')}}</el-menu-item>
              <el-menu-item index="2-2" route="/admin/manager" v-if="isShow('insider.manager')">{{nodes.get('insider.manager')}}</el-menu-item>
            </el-menu-item-group>
          </el-submenu>
          <el-menu-item index="3" v-if="isShow('category')" route="/admin/category">
            <i class="el-icon-document"></i>
            <span slot="title">{{nodes.get('category')}}</span>
          </el-menu-item>
          <el-menu-item index="4" v-if="isShow('article')" route="/admin/article">
            <i class="el-icon-setting"></i>
            <span slot="title">{{nodes.get('article')}}</span>
          </el-menu-item>
        </el-menu>
      </el-col>
    </el-row>
  </div>
</template>
<script>
import Logo from '@/assets/img/logo-3.png'
import config from '@/config/config'
import nodes from '@/config/nodes'
import { indexOf, gte, intersection } from 'ramda'
export default {
  data () {
    return {
      logo: Logo,
      menu: config.permission,
      nodes: nodes
    }
  },
  mounted () {
  },
  methods: {
    isShow (item) {
      const nodes = ['insider', 'insider.group', 'category', 'article', 'insider.manager'] // 这里模拟的是改用户所具有的权限集，登录时获取
      return gte(indexOf(item, intersection(nodes, this.menu)), 0)
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
