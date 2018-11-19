<template>
  <div class="global-header">
    <el-row>
      <el-col :span="20" class="text-left pl1">
        <div class="title">Koala.System</div>
      </el-col>
      <el-col :span="4" class="text-right pr1">
        <el-dropdown size="medium" @command="handleCommand">
          <el-button plain type="primary">
            ChouFeng <i class="el-icon-arrow-down el-icon--right"></i>
          </el-button>
          <el-dropdown-menu slot="dropdown">
            <el-dropdown-item command="setting">
              个人设定
            </el-dropdown-item>

            <el-dropdown-item divided command="/system/logout">
              退出系统
            </el-dropdown-item>
          </el-dropdown-menu>
        </el-dropdown>
      </el-col>
    </el-row>
  </div>
</template>

<script>
import { equals } from 'ramda'
import localforage from 'localforage'
export default {
  methods: {
    handleCommand (command) {
      equals('setting', command) && this.$router.push('/admin/setting')
      equals('logout') && this.logout()
    },
    logout () {
      localforage.clear().then(() => {
        this.$message.success('已退出系统')
        this.$router.replace('/system/login')
      }).catch(() => {
        console.error('清除数据失败')
      })
    }
  }
}
</script>

<style lang="less" scoped>
  .global-header {
    line-height: 6vh;
    .title {
      font-size: 1.3rem;
    }
  }
</style>
