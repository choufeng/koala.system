<template>
  <div class="manager-list">
    <el-table
      :data="list"
      height="78vh"
      :highlight-current-row="true"
      :default-sort="{prop: 'id', order: 'ascending'}"
      style="width: 100%">
      <el-table-column
        prop="id"
        label="ID"
        sortable
        align="center"
        width="80">
      </el-table-column>
      <el-table-column
        prop="username"
        label="用户名"
        >
      </el-table-column>
      <el-table-column
        prop="phone"
        label="电话">
      </el-table-column>
      <el-table-column
        label="权限组"
        width="180"
        >
      </el-table-column>
      <el-table-column label="操作" width="180">
        <template slot-scope="scope">
          <el-row>
            <el-col :span="12">
              <manager-modal
                :value="scope"
                btnType="default"
                btnTitle="编辑"
              ></manager-modal>
            </el-col>
            <el-col :span="12">
              <delete-popover
                :confirmValue="scope.row.username"
                :value="scope"
                msg="警告：删除用户请输入<b>用户名</b>以确认删除"
                @onSubmit="handleDelete"
              ></delete-popover>
            </el-col>
          </el-row>
        </template>
      </el-table-column>
    </el-table>
  </div>
</template>

<script charset="utf-8">
import { mapState, mapActions } from 'vuex'
import ManagerModal from './ManagerModal.vue'
import DeletePopover from '@/components/DeletePopover'
import { DONE } from '@/consts'
export default {
  components: {
    ManagerModal, DeletePopover
  },
  computed: mapState({
    list: state => state.manager.list
  }),
  mounted () {
    this.getManagerList()
  },
  methods: {
    ...mapActions(['getManagerList', 'deleteManagerItem']),
    handleDelete (data) {
      this.$message.info('删除中...')
      this.deleteManagerItem({ id: data.row.id, index: data.$index }).then(() => {
        this.$message.success(DONE)
      }).catch(() => {
        this.$message.error('删除出错了，未成功')
      })
    }
  }
}
</script>
