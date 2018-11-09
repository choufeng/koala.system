<template>
  <div class="dialog-box">
    <el-dialog title="" :visible.sync="dialogVisible">
      good
      <div slot="footer" class="dialog-footer">
        <el-button @click="cancel">取 消</el-button>
        <el-button type="primary" @click="save">确 定</el-button>
      </div>
    </el-dialog>
  </div>
</template>

<script charset="utf-8">
export default {
  data () {
    return {
    }
  },
  props: {
    dialogVisible: Boolean
  },
  mehotds: {
    cancel () {
      this.dialogVisible = false
    },
    save () {
      this.dialogVisible = false
    }
  }
}
</script>
