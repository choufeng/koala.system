<template>
  <div class="login-box">
    <el-row>
      <el-col :span="24" class="item">
        <el-form>
          <el-form-item>
            <el-input placeholder="Username" v-model="modal.username"/>
          </el-form-item>
          <el-form-item>
            <el-input type="password" placeholder="Password" v-model="modal.password"/>
          </el-form-item>
          <el-form-item>
            <el-button>Login</el-button>
          </el-form-item>
        </el-form>
      </el-col>
    </el-row>
  </div>
</template>

<script>
export default {
  data () {
    return {
      modal: {
        username: '',
        password: ''
      }
    }
  }
}
</script>

<style lang="less" scoped>
.login-box {
  width: 20rem;
  margin-left: 10rem;
  text-align: left;
}
</style>
