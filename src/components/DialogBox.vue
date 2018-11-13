<template>
  <div class="dialog-box">
    <el-dialog :title="title" :visible.sync="open" :before-close="cancel">
      <slot></slot>
      <div slot="footer" class="dialog-footer">
        <el-button @click="cancel">取 消</el-button>
        <el-button type="primary" @click="save" :loading="loading">确 定</el-button>
      </div>
    </el-dialog>
  </div>
</template>

<script charset="utf-8">
export default {
  props: {
    title: String,
    open: Boolean,
    loading: Boolean
  },
  methods: {
    cancel () {
      this.$emit('update:open', false)
      this.$emit('cancel')
    },
    save () {
      this.$emit('save')
    }
  }
}
</script>

<style lang="less" scoped>
  .dialog-box {
    text-align: left;
  }
</style>
