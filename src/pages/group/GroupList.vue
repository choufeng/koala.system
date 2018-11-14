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
          <group-nodes :value="scope"></group-nodes>
        </template>
      </el-table-column>
      <el-table-column label="操作"
        width="150"
        >
        <template slot-scope="scope">
          <el-row>
            <el-col :span="12">
              <group-modal
                :value="scope"
                btnType="default"
                btnTitle="编辑"
              ></group-modal>
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
import GroupNodes from './GroupNodes.vue'
import GroupModal from './GroupModal'
import { DONE } from '@/consts'
import utils from '@/utils'

export default {
  components: {
    DeletePopover, GroupNodes, GroupModal
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
    ...mapActions(['getGroupList', 'setGroupItem', 'setEditIndex', 'deleteGroupItem', 'openGroupDialog', 'setGroupModal']),
    async loadList () {
      try {
        utils.loading.open()
        await this.getGroupList()
        utils.loading.close()
      } catch (err) {
        this.$message.error('载入列表出现错误')
        console.log('Load list Error:', err)
        utils.loading.close()
      }
    },
    handleNodes (i, item) {
      this.setGroupItem({ index: i, item: assoc('name', `${item.name}1`, item) })
    },
    handleUpdate (item) {
      this.$emit('onEdit', item)
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
