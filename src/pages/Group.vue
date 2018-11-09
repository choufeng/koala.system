<template>
  <div class="group">
    <panel-box>
      <div slot="title" class="box-title text-left pl1">权限组列表</div>
      <div class="body">
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
    </panel-box>
  </div>
</template>

<script>
import { PanelBox } from '@/components'
import { group } from '@/services'
export default {
  components: {
    PanelBox
  },
  data() {
    return {
      list: []
    }
  },
  mounted () {
    this.loadList()
  },
  methods: {
    async loadList () {
      try {
        this.list = await group.list()
      } catch (err) {
        this.$message.error('载入列表出现错误')
        console.log('Load list Error:', err)
      }
    },
    handleEdit(a, b) {
      console.log(a, b)
    }
  }
}
</script>

<style lang="less">
.group {
  .body {
    padding: 1rem;
  }
}
</style>
