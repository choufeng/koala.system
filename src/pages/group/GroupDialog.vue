<template>
  <div class="dialog">
    <DialogBox :open="open" title="权限组管理" @save="onSave" @cancel="onCancel" :loading="loading">
    <div class="body">
      <el-form>
        <el-form-item>
          <el-input v-model="modal.name" class="input" placeholder="组名称" />
        </el-form-item>
        <el-form-item>
          <el-input v-model="modal.description" class="input" placeholder="简介" />
        </el-form-item>
      </el-form>
    </div>
    </DialogBox>
  </div>
</template>

<script>
import { mapState, mapActions } from 'vuex'
import DialogBox from '@/components/DialogBox'
import { DONE } from '@/consts'
import { clone, has } from 'ramda'
export default {
  components: {
    DialogBox
  },
  data () {
    return {
      loading: false,
      modal: {
        name: '',
        description: ''
      }
    }
  },
  computed: {
    ...mapState({
      open: state => state.group.dialogStatus,
      stateModal: state => state.group.modal
    })
  },
  watch: {
    stateModal (val) {
      console.log('new state modal', val)
      this.modal = clone(val)
    }
  },
  methods: {
    ...mapActions(['closeGroupDialog', 'addGroupItem', 'getGroupList', 'setGroupItem']),
    setLoadingTrue () {
      this.loading = true
    },
    setLoadingFalse () {
      this.loading = false
    },
    clearModal () {
      this.modal = {
        name: '',
        description: ''
      }
    },
    onSave () {
      has('id', this.modal) ? this.doSave(this.setGroupItem, this.modal) : this.doSave(this.addGroupItem, this.modal)
    },
    doSave (action, data) {
      this.setLoadingTrue()
      console.log('test', data)
      action(data).then(() => {
        this.$message.success(DONE)
        this.setLoadingFalse()
        this.getGroupList()
        this.closeGroupDialog()
        this.clearModal()
      }).catch(err => {
        console.log(err)
        // this.$message.error(err)
        this.setLoadingFalse()
      })
    },
    onCancel () {
      this.setLoadingFalse()
      this.closeGroupDialog()
      console.log('cancel')
    }
  }
}
</script>
