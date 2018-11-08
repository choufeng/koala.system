<template>
  <div class="login">
    <el-row>
      <el-col :span="24">
        <el-form>
          <el-form-item>
            <el-input placeholder="Username" v-model="modal.username"/>
          </el-form-item>
          <el-form-item>
            <el-input type="password" placeholder="Password" v-model="modal.password"/>
          </el-form-item>
          <el-form-item>
            <el-button @click="onSave">Login</el-button>
            <el-button @click="onClear">Logout</el-button>
          </el-form-item>
        </el-form>
      </el-col>
    </el-row>
  </div>
</template>

<script>
import { system } from '../services/'
import { LOGIN_SUCCESS } from '@/consts'
import localforage from 'localforage'

export default {
  data () {
    return {
      modal: {
        username: '',
        password: ''
      }
    }
  },
  methods: {
    async onSave () {
      try {
        const res = await system.login(this.modal)
        localforage.setItem('token', res.token)
        this.$message.success(LOGIN_SUCCESS)
      } catch (err) {
        this.$message.error(err.message)
      }
    },
    onClear () {
      localforage.clear('token')
    }
  }
}
</script>

<style lang="less">
.login {
  width: 20rem;
  margin-left: 10rem;
  text-align: left;
}
</style>
