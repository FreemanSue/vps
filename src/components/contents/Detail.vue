<template>
  <div class="layui-container">
    <div class="layui-row layui-col-space15">
      <div class="layui-col-md8 content detail">
        <div class="fly-panel detail-box">
          <!-- 详情页标题文字 -->
          <h1 >{{page.title}}</h1>
          <h1>{{page.content}}</h1>
          <span>{{page.created}}</span>
         
          <div class="detail-body photos" v-html="content"></div>
        </div>

        <!-- 回帖相关的内容 -->
        
      </div>
    </div>
  </div>
</template>

<script>
import { getDetail } from '@/api/content'
import { escapeHtml } from '@/utils/escapeHtml'
import { scrollToElem } from '@/utils/common'

export default {
  name: 'Detail',
  props: ['tid'],
  components: {
  },
  data () {
    return {
      page: {},
      content: ''
    }
  },
  mounted () {
    this.getPostDetail()
  },
  watch: {
    tid (newval, oldval) {
      this.getPostDetail()
    }
  },
  methods: {
    getPostDetail () {
      getDetail (this.options).then((res) => {
        this.page = res.data
      })
        
    }, 
    
    //
    addContent (val) {
      this.content = val
    },
    async submit () {

      
        // 判断用户是否修改了内容
        if (this.content === this.item.content) {
          
          return
        }
        
        return
      }
  },
  // 控制详情显示
  computed: {
    content () {
      if (typeof this.page.content === 'undefined') {
        return ''
      }
      if (this.page.content.trim() === '') {
        return ''
      }
      return escapeHtml(this.page.content)
    },
    
  }
}
</script>

<style lang="scss" scoped>
.fly-detail-admin {
  text-align: right;
  border-top: 1px dotted #eaeaea;
  background: #f8f8f8;
}

.fly-detail-info {
  span {
    margin-right: 5px;
  }
}

.fly-admin-box {
  margin-left: 0;
  margin-top: 15px;
}

.jieda-body {
  margin: 25px 0 20px !important;
}
</style>
