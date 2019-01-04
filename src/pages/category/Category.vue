<template>
  <div class="category">
    <panel-box>
      <div slot="header-left" class="box-title text-left pl1">分类管理</div>
      <div slot="header-right" class="box-title text-right pr1">
        <el-row>
          <el-col :span="12">
            <category-root-select></category-root-select>
          </el-col>
          <el-col :span="6">
            <category-modal></category-modal>
          </el-col>
          <el-col :span="6">
            <category-modal></category-modal>
          </el-col>
        </el-row>
      </div>
      <div class="content">
        <category-list></category-list>
      </div>
      <div class="footer text-left pl1" slot="footer">
        <p>系统内的所有分类管理都在这里</p>
      </div>
    </panel-box>
  </div>
</template>

<script>
import { PanelBox } from '@/components'
import CategoryModal from './CategoryModal.vue'
import CategoryList from './CategoryList.vue'
import CategoryRootSelect from './CtegoryRootSelect.vue'
export default {
  components: {
    PanelBox, CategoryModal, CategoryList, CategoryRootSelect
  }
}
</script>
