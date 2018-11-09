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
      <el-table-column label="权限集"
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
          <el-button
            size="mini"
            @click="handleEdit(scope.$index, scope.row)">编辑</el-button>
          <el-button
            size="mini"
            type="danger"
            @click="handleDelete(scope.$index, scope.row)">删除</el-button>
        </template>
      </el-table-column>
    </el-table>
  </div>
</template>
<script charset="utf-8">
import { mapActions, mapState } from 'vuex'
export default {
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
    ...mapActions(['getGroupList']),
    async loadList () {
      try {
        await this.getGroupList()
      } catch (err) {
        this.$message.error('载入列表出现错误')
        console.log('Load list Error:', err)
      }
    },
    handleNodes (i, item) {
      console.log(i, item)
    },
    handleEdit (i, item) {
      console.log(i, item)
    },
    handleDelete (i, item) {
      console.log(i, item)
    }
  }
}
</script>
