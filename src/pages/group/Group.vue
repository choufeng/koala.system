<template>
  <div class="group">
    <panel-box>
      <div slot="header-left" class="box-title text-left pl1">权限组列表</div>
      <div slot="header-right" class="box-title text-right pr1">
        <el-button type="primary" icon="el-icon-plus" size="small" @click="open">添加新权限组</el-button>
      </div>
      <div class="body">
        <group-list></group-list>
      </div>
    </panel-box>
    <group-dialog></group-dialog>
  </div>
</template>

<script>
import { PanelBox } from '@/components'
import GroupList from './GroupList.vue'
import GroupDialog from './GroupDialog.vue'
import { mapActions } from 'vuex'
export default {
  components: {
    PanelBox, GroupDialog, GroupList
  },
  methods: {
    ...mapActions(['openGroupDialog', 'clearGroupModal']),
    open () {
      this.clearGroupModal()
      this.openGroupDialog()
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
