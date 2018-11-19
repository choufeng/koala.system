<template>
  <div class="manager">
    <panel-box>
      <div class="box-title text-left pl1" slot="header-left">
        内部人员管理
      </div>
      <div class="box-title text-right pr1" slot="header-right">
        <manager-modal
          :value="{}"
          btnType="primary"
          btnTitle="添加新权限组"
        ></manager-modal>
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
import ManagerModal from './ManagerModal.vue'
export default {
  components: {
    PanelBox, ManagerList, ManagerModal
  }
}
</script>
