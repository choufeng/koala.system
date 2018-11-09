<template>
  <div class="panel-box">
    <el-row class="header">
      <el-col :span="20">
        <slot name="title" />
      </el-col>
      <el-col :span="4">
        <slot name="title-right" />
      </el-col>
    </el-row>
    <el-row>
      <el-col :span="24" class="content">
        <slot />
      </el-col>
      <el-col :span="24" class="footer">
        <slot name="footer" />
      </el-col>
    </el-row>
  </div>
</template>

<style lang="less" scoped>
.panel-box {
  border-radius: 5px;
  background: #FFF;
  border: 1px solid #fafafa;
  .header {
    border-bottom: 3px solid #f0f2f5;
  }
  .content {
  }
  .footer {
  }
}
</style>
