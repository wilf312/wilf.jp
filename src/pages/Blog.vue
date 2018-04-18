<template>
<v-container fluid :class="[name, 'scroll-y']">
  <div v-html="compiled"></div>
  <div v-text="text"></div>
</v-container>
</template>

<script>
import marked from 'marked'
import axios from 'axios'
// import {mapGetters} from 'vuex'
const name = __filename.match(/^src\/[\w|\\/]*\/(\w*).vue$/)[1]

export default {
  name,
  computed: {
    compiled () {
      return marked(this.text)
    }
  },
  data () {
    return {
      name,
      text: '# 1 \n## 2'
    }
  },
  methods: {
    getBlog: async (num) => {
      return axios.get(`/static/blog/${num}.json`)
    }
  },
  async mounted () {
    const {data: {data}} = await this.getBlog(1)
    this.text = data
  },
  components: {
  }
}
</script>

<style scoped lang="stylus">
.Blog
  height 100vh
  overflow auto


</style>
