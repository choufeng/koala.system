<template>
  <div class="category-root-select">
    <el-select v-model="value" placeholder="顶级分类" size="small">
      <el-option
        v-for="item in list"
        :key="item.value"
        :label="item.name"
        :value="item.id">
      </el-option>
    </el-select>
  </div>
</template>

<script charset="utf-8">
import { mapActions, mapState } from 'vuex'
export default {
  data () {
    return {
      value: 1
    }
  },
  computed: {
    ...mapState({
      list: state => state.category.topList
    })
  },
  mounted () {
    this.getRootCategoryList()
  },
  methods: {
    ...mapActions(['getRootCategoryList'])
  }
}
</script>
