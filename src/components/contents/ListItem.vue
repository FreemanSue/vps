<template>
  <div>
    <ul class="fly-list">
      <li v-for="(item,index) in items" :key="'listitem'">
        <router-link :to="{name: 'detail', params: {tid: item._id}}">
          
            {{item.title}}
          
          

        </router-link>

       
      </li>
    </ul>
    
  </div>
</template>

<script>
export default {
  name: 'listitem',
  props: {
    lists: {
      default: () => [],
      type: Array
    },
  },
  // props: ["lists"],
    
  // 实时监听 lists 的变化
  computed: {
    items () {
      return this.lists
    }
  },
}
</script>

<style lang="scss" scoped>
</style>
