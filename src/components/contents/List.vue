<template>
  <div class="ff" style="">
    <list-item :lists="lists" ></list-item>
  </div>
</template>

<script>
import ListItem from './ListItem'
import listMix from '@/mixin/list'
import { getList } from '@/api/content'

export default {
  name: 'list',
  mixins: [listMix],
  data () {
    return {
      status: '',

      sort: 'created',

      // 每页取 20 条数据
      limit: 20,

      // page 是页码
      // page: 0,
      
      // catalog 是分类
      catalog: '',

      // lists 存储当前页面缓存的数据
      lists: []
    }
  },
  components: {
    ListItem
  },
}
</script>

<style lang="scss" scoped>
.ff {
  margin-bottom: 10px;
  margin-left:100px
}
</style>
