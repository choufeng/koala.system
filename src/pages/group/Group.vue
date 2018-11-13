<template>
  <div class="group">
    <panel-box>
      <div slot="header-left" class="box-title text-left pl1">权限组列表</div>
      <div slot="header-right" class="box-title text-right pr1">
        <el-button type="primary" icon="el-icon-plus" size="small" @click="open">添加新权限组</el-button>
      </div>
      <div class="body">
        <GroupList />
      </div>
    </panel-box>
    <GroupDialog />
  </div>
</template>

<script>
import { PanelBox, DialogBox } from '@/components'
import GroupList from './GroupList.vue'
import GroupDialog from './GroupDialog.vue'
import { mapActions } from 'vuex'
export default {
  components: {
    PanelBox, GroupDialog, GroupList
  },
  methods: {
    ...mapActions(['openGroupDialog']),
    open () {
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
