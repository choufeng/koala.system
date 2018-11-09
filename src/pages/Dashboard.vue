<template>
  <div class="dashboard">
    <panel-box>
      <div slot="title" class="box-title text-left pl1">Dashboard</div>
      <div class="body">

      </div>
    </panel-box>
  </div>
</template>

<script>
import { PanelBox } from '@/components'
export default {
  components: {
    PanelBox
  }
}
</script>
<style lang="less">
.dashboard {
  .body {
    height: 83.5vh;
  }
}
</style>
