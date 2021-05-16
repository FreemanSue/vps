<template>
  <div class="layui-container fly-marginTop">
    <div class="fly-panel" pad20 style="padding-top: 5px;">
      <div class="layui-form layui-form-pane">
        <div class="layui-tab layui-tab-brief">
          <ul class="layui-tab-title">
            <li class="layui-this">
              发表新帖:
            </li>
          </ul>
          <div class="layui-form layui-tab-content" id="LAY_ucm" style="padding: 20px 0;">
            <div class="layui-tab-item layui-show">
              <form>
                <!-- layui-row:before{content:'';display:block;clear:both} -->
                <div class="layui-row layui-col-space15 layui-form-item">
                  <div class="layui-col-md9">
                    <div class="layui-row">
                      <label for="L_title" class="layui-form-label">标题</label>
                      <div class="layui-input-block">
                        <input type="text" class="layui-input" v-model="title" />
                      </div>
                    </div>
                  </div>
                </div>
                <!-- 接收输入框发生变化的事件 -->
                <editor @changeContent="add" :initContent="content"></editor>
                <div class="layui-form-item">
                    <button type="button" class="layui-btn" @click="submit">立即发布</button>
                  </div>
              </form> 
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { addPost } from '@/api/content'
import Editor from '../modules/editor/Index'

export default {
  name: 'add',
  components: {
    Editor
  },
  data () {
    return {
      content: '',
      title: ''
    }
  },
  mounted () {
    const saveData = localStorage.getItem('addData')
    if (saveData && saveData !== '') {
      this.$confirm('是否加载未编辑完的内容？', () => {
        const obj = JSON.parse(saveData)
        this.content = obj.content
        this.title = obj.title
      }, () => {
        localStorage.setItem('addData', '')
      })
    }
  },
  methods: {
    add (val) {
      this.content = val
      const saveData = {
        title: this.title,
        content: this.content
      }
      if (this.title.trim() !== '' && this.content.trim() !== '') {
        localStorage.setItem('addData', JSON.stringify(saveData))
      }
    },
    async submit () {
      // 文章内容是否为空的判断
      if (this.content.trim() === '') {
        this.$alert('文章内容不得为空！')
        return
      }
      // 添加新的文章
      addPost({
        title: this.title,
        content: this.content
      }).then((res) => {
        if (res.code === 200) {
          // 清空已经发布的内容
          localStorage.setItem('addData', '')
          setTimeout(() => {
            this.$router.push({ name: 'index' })
          }, 100)
        } 
      })
    }
  }
}
</script>

<style>

</style>