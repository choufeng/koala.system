<template>
  <div class="group-list">
    <el-table
      :data="list"
      height="80vh"
      border
      :default-sort="{prop: 'id', order: 'ascending'}"
      style="width: 100%">
      <el-table-column
        prop="id"
        label="ID"
        sortable
        width="80">
      </el-table-column>
      <el-table-column
        prop="name"
        label="组名称"
        width="180">
      </el-table-column>
      <el-table-column
        prop="description"
        label="简介">
      </el-table-column>
      <el-table-column
        label="权限集"
        width="150"
        >
        <template slot-scope="scope">
          <el-button
            size="mini"
            type="primary"
            @click="handleNodes(scope.$index, scope.row)">调整</el-button>
        </template>
      </el-table-column>
      <el-table-column label="操作"
        width="150"
        >
        <template slot-scope="scope">
          <el-row>
            <el-col :span="12">
              <el-button
                size="mini"
                @click="handleEdit(scope.$index, scope.row)">编辑</el-button>
            </el-col>
            <el-col :span="12">
              <delete-popover
                :confirmValue="scope.row.name"
                :value="scope"
                msg="警告：删除权限组将导致该组成员失去对应权限，请慎重操作，输入<b>组名称</b>以确认删除"
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
import { mapActions, mapState } from 'vuex'
import { assoc } from 'ramda'
import DeletePopover from '@/components/DeletePopover'
import { DONE } from '@/consts'

export default {
  components: {
    DeletePopover
  },
  data () {
    return {
    }
  },
  mounted () {
    this.loadList()
  },
  computed: mapState({
    list: state => state.group.list
  }),
  methods: {
    ...mapActions(['getGroupList', 'setGroupItem', 'deleteGroupItem', 'openGroupDialog', 'setGroupModal']),
    async loadList () {
      try {
        await this.getGroupList()
      } catch (err) {
        this.$message.error('载入列表出现错误')
        console.log('Load list Error:', err)
      }
    },
    handleNodes (i, item) {
      this.setGroupItem({ index: i, item: assoc('name', `${item.name}1`, item) })
    },
    handleEdit (i, item) {
      this.setGroupModal(item)
      this.openGroupDialog()
    },
    handleDelete (data) {
      this.$message.info('删除中...')
      this.deleteGroupItem({ id: data.row.id, index: data.$index }).then(() => {
        this.$message.success(DONE)
      }).catch(() => {
        this.$message.error('删除出错了，未成功')
      })
    }
  }
}
</script>
