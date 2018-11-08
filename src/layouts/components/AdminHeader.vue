<template>
  <div class="global-header">
    <el-row>
      <el-col :span="20" class="text-left pl1">
        <div class="title">Title</div>
      </el-col>
      <el-col :span="4" class="text-right pr1">
        <el-dropdown size="medium">
          <el-button plain type="primary">
            ChouFeng <i class="el-icon-arrow-down el-icon--right"></i>
          </el-button>
          <el-dropdown-menu slot="dropdown">
            <el-dropdown-item>
              个人设定
            </el-dropdown-item>

            <el-dropdown-item divided>
              退出系统
            </el-dropdown-item>
          </el-dropdown-menu>
        </el-dropdown>
      </el-col>
    </el-row>
  </div>
</template>

<style lang="less" scoped>
  .global-header {
    line-height: 6vh;
    .title {
      font-size: 1.3rem;
    }
  }
</style>
