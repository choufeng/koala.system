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
            v-model="modal.name"
            class="input"
            placeholder="用户名"
          />
        </el-form-item>
        <el-form-item>
          <el-input
            v-model="modal.description"
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
import { has, clone } from 'ramda'
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
    ...mapActions(['addManagerItem', 'setManagerItem']),
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
    onSave () {
      has('id', this.modal) ? this.doSave(this.setManagerItem, { item: this.modal, index: this.value.$index }) : this.doSave(this.addManagerItem, this.modal)
    },
    doSave (action, data) {
      this.beginLoading()
      action(data).then(() => {
        this.$message.success(DONE)
        this.endLoading()
        this.getGroupList()
        this.closeDialogBox()
      }).catch(() => {
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
