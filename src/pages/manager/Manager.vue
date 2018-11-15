<template>
  <div class="manager">
    <panel-box>
      <div class="box-title text-left pl1" slot="header-left">
        内部人员管理
      </div>
      <div class="box-title text-right pr1" slot="header-right">
        Add Btn
      </div>
      <div class="body">
        <manager-list></manager-list>
      </div>
    </panel-box>
  </div>
</template>

<script>
import { PanelBox } from '@/components'
import ManagerList from './ManagerList.vue'
export default {
  components: {
    PanelBox, ManagerList
  }
}
</script>
