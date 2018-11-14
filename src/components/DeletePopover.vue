<template>
  <div>
    <el-popover placement="left" v-model="visible">
      <el-row class="form mb1">
        <el-col :span="24" class="pl1">
          <h3>警告</h3>
        </el-col>
        <el-col :span="24">
          <div class="msg" v-html="msg"></div>
        </el-col>
        <el-col :span="24" class="pl1 pr1">
          <el-input size="mini" v-model="input" class="input">
            <div slot="append">
              <el-button slot="append" icon="el-icon-delete" @click="submit" :loading="loading">确定删除</el-button>
            </div>
          </el-input>
        </el-col>
      </el-row>
      <el-button
        slot="reference"
        size="mini"
        type="danger"
      >删除</el-button>
    </el-popover>
  </div>
</template>

<script>
import { equals } from 'ramda'
export default {
  data () {
    return {
      input: '',
      error: true,
      visible: false
    }
  },
  props: ['msg', 'loading', 'value', 'confirmValue'],
  methods: {
    submit () {
      this.isRightKey() ? this.doSubmit() : this.showError()
    },
    isRightKey () {
      return equals(this.input, this.confirmValue)
    },
    showError () {
      this.$message.error('校验未通过')
    },
    doSubmit () {
      this.hidePopover()
      this.clearInput()
      this.$emit('onSubmit', this.value)
    },
    hidePopover () {
      this.visible = false
    },
    clearInput () {
      this.input = ''
    }
  }
}
</script>

<style lang="less" scoped>
.delete-popover {
}
.form {
  width: 20rem;
}
.msg {
  width: 18rem;
  margin: 1rem;
}
.input {
}
.inputError {
  border: 1px solid red;
}
.show-err {
  color: red;
}
</style>
