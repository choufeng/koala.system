<template>
  <div class="login">
    <el-row>
      <el-col :span="24">
        <LoginBox />
      </el-col>
    </el-row>
  </div>
</template>

<script>
import LoginBox from '@/components/LoginBox/LoginBox'
export default {
  components: {
    LoginBox
  }
}
</script>
