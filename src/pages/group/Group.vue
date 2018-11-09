<template>
  <div class="group">
    <panel-box>
      <div slot="header-left" class="box-title text-left pl1">权限组列表</div>
      <div slot="header-right" class="box-title text-right pr1">
        <el-button type="primary" icon="el-icon-plus" size="small">添加新权限组</el-button>
      </div>
      <div class="body">
        <GroupList />
      </div>
    </panel-box>
  </div>
</template>

<script>
import { PanelBox, DialogBox } from '@/components'
import GroupList from './GroupList.vue'
export default {
  components: {
    PanelBox, DialogBox, GroupList
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
