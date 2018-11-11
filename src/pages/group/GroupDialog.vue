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
import { ADD_SUCCESS } from '@/consts'
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
      open: state => state.group.dialogStatus
    })
  },
  methods: {
    ...mapActions(['closeGroupDialog', 'addGroupItem', 'getGroupList']),
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
      this.setLoadingTrue()
      this.addGroupItem(this.modal).then(() => {
        this.$message.success(ADD_SUCCESS)
        this.setLoadingFalse()
        this.getGroupList()
        this.closeGroupDialog()
        this.clearModal()
      }).catch(err => {
        this.$message.error(err)
        this.setLoadingFalse()
      })
      console.log('save')
    },
    onCancel () {
      this.setLoadingFalse()
      this.closeGroupDialog()
      console.log('cancel')
    }
  }
}
</script>
