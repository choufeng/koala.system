<template>
  <div class="group-modal">
    <el-button :type="btnType" size="mini" @click="openDialogBox">{{btnTitle}}</el-button>
    <DialogBox
      :open="open"
      title="内部人员管理"
      @save="onSave"
      @cancel="onCancel"
      :loading="loading"
    >
    <div class="body">
      <el-form>
        <el-form-item>
          <el-input
            v-model="modal.username"
            class="input"
            placeholder="用户名"
          />
        </el-form-item>
        <el-form-item>
          <el-input
            v-model="modal.phone"
            class="input"
            placeholder="手机号"
          />
        </el-form-item>
      </el-form>
    </div>
    </DialogBox>
  </div>
</template>

<script>
import { has, clone, assoc } from 'ramda'
import DialogBox from '@/components/DialogBox'
import { DONE } from '@/consts'
import { mapActions } from 'vuex'
export default {
  components: {
    DialogBox
  },
  props: ['btnType', 'value', 'btnTitle', 'apiType'],
  data () {
    return {
      loading: false,
      open: false,
      modal: {
        username: '',
        phone: ''
      }
    }
  },
  mounted () {
    has('row', this.value) && this.setModal(this.value.row)
  },
  methods: {
    ...mapActions(['addManagerItem', 'setManagerItem', 'getManagerList']),
    openDialogBox () {
      this.open = true
    },
    closeDialogBox () {
      this.open = false
    },
    setModal (m) {
      this.modal = clone(m)
    },
    beginLoading () {
      this.loading = true
    },
    endLoading () {
      this.loading = false
    },
    setDefaultPassword (d) {
      return assoc('password', '123456', d)
    },
    onSave () {
      has('id', this.modal) ? this.doSave(this.setManagerItem, { item: this.modal, index: this.value.$index }) : this.doSave(this.addManagerItem, this.setDefaultPassword(this.modal))
    },
    doSave (action, data) {
      this.beginLoading()
      action(data).then(() => {
        this.$message.success(`${DONE}, 初始密码是: 123456`)
        this.endLoading()
        this.getManagerList()
        this.closeDialogBox()
      }).catch((err) => {
        console.log('err', err)
        this.$message.error('保存失败')
        this.endLoading()
        this.closeDialogBox()
      })
    },
    onCancel () {
      this.endLoading()
      this.closeDialogBox()
    }
  }
}
</script>
