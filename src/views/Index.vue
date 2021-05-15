<template>
  <div class="layui-container">
    <div class="layui-row layui-col-space15">
      <div class="layui-col-md8">
        <List />
      </div>
      <div class="layui-col-md4">
        md4
      </div>
    </div>
  </div>
</template>

<script>
import List from '@/components/contents/List'
export default {
  name: 'index',
  components: {
    List
  }
}
</script>

<style lang="scss" scoped>
</style>
