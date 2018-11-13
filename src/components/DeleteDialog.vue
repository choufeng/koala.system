<template>
  <div class="delete-dialog">
    <el-dialog
      title="删除警告"
      :visible.sync="open"
      :before-close="cancel"
    >
    <div class="body">
      <el-row>
      </el-row>
    </div>
    <div slot="footer" class="dialog-footer">

    </div>
  </div>
</template>

<script>

</script>

<style lang="less" scoped>
.delete-dialog {

}
</style>
