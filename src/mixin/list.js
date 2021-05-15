import { getList } from '@/api/content'

export default {
  data () {
    return {
      sort: 'created',
      // catalog: '',
      current: '',
      limit: 20,
      lists: []
    }
  },
  mounted () {
    this._getLists()
  },
  methods: {
    init () {
      this.page = 0
      this.lists = []
      this._getLists()
    },
    _getLists () {
      let options = {
        // catalog: this.catalog,
        page: this.page,
        sort: this.sort,
        limit: this.limit,
        status: this.status
      }
      getList(options).then((res) => {this.lists = res.data})
    },
  }
}
