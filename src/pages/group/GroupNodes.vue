<template>
  <div class="group-nodes">
    <el-popover placement="left" v-model="visible" trigger="click" width="500">
      <el-row>
        <el-col :span="24">
          <el-transfer
            v-model="dataValues"
            :data="dataSource"
            :titles="['未授权', '已授权']"
            @change="handleChange"
          ></el-transfer>
        </el-col>
      </el-row>
      <el-button
        slot="reference"
        size="mini"
        type="primary"
      >权限</el-button>
    </el-popover>
  </div>
</template>

<script charset="utf-8">
import nodes from '@/config/nodes'
import { map, prop, assoc, isNil, isEmpty } from 'ramda'
import { mapActions } from 'vuex'
import { DONE } from '@/consts'
export default {
  data () {
    return {
      dataSource: [],
      dataValues: ['article'],
      visible: false
    }
  },
  mounted () {
    this.setDataSource(this.formatDataSource(nodes))
    console.log(this.value.row)
    this.setDataValues(prop('nodekeys')(this.value.row))
  },
  props: ['value'],
  methods: {
    ...mapActions(['setGroupItem', 'setEditIndex']),
    formatDataSource (data) {
      // 转换数据为需要的格式 {key: label:}
      return map(item => {
        return {
          key: item[0],
          label: item[1]
        }
      })([...data])
    },
    setDataSource (list) {
      this.dataSource = list
    },
    setDataValues (list) {
      const isNotArray = (l) => isNil(l) || isEmpty(l)
      this.dataValues = isNotArray(list) ? [] : list
    },
    handleChange (v) {
      console.log('change v', v)
      // 1. 组织新的row 2. api update 3， setState， 4. 消息提示？
      const row = assoc('nodekeys', v, this.value.row)
      const data = { index: this.value.$index, item: row }
      this.setGroupItem(data).then(() => {
        this.$message.success(DONE)
      }).catch(err => {
        this.$message.error('调整权限失败，请重试')
        console.log('set group item', err)
      })
    }
  }
}
</script>
