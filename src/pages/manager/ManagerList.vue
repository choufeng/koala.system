<template>
  <div class="manager-list">
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
import { mapState } from 'vuex'
export default {
  computed: mapState({
    list: state => state.manager.list
  })
}
</script>
