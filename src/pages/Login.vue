<template>
  <div class="login">
    <el-row>
      <el-col :span="24">
        <el-form>
          <el-form-item>
            <el-input placeholder="Username" v-model="modal.username" ref="inputUsername"/>
          </el-form-item>
          <el-form-item>
            <el-input type="password" placeholder="Password" v-model="modal.password"/>
          </el-form-item>
          <el-form-item>
            <el-button type="primary" plain @click="onSave" :loading='loading' :disabled="disLoginBtn">登录</el-button>
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
import { isEmpty } from 'ramda'

export default {
  data () {
    return {
      modal: {
        username: 'choufeng',
        password: '123123'
      },
      loading: false
    }
  },
  computed: {
    disLoginBtn () {
      return isEmpty(this.modal.username) || isEmpty(this.modal.password)
    }
  },
  mounted () {
    this.$refs.inputUsername.focus()
  },
  methods: {
    setLoadingTrue () {
      this.loading = true
    },
    setLoadingFalse () {
      this.loading = false
    },
    async onSave () {
      try {
        this.setLoadingTrue()
        const res = await system.login(this.modal)
        localforage.setItem('token', res.token)
        this.$message.success(LOGIN_SUCCESS)
        this.$router.push('/admin/dashboard')
        this.setLoadingFalse()
      } catch (err) {
        this.$message.error(err.message)
      }
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
