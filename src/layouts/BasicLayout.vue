<template>
  <div class="basic-layout">
    <el-container>
      <el-aside class="left">

      </el-aside>
      <el-container>
        <el-header>
          header
        </el-header>
        <el-main class="main">
          <router-view />
        </el-main>
      </el-container>
    </el-container>
  </div>
</template>

<style lang="less" scoped>
.basic-layout {
  .left {
    background: #661a1a;
    height: 100vh;
    color: #fff;
  }
  .left::-webkit-scrollbar {
    width: 0;
  }
}
</style>
