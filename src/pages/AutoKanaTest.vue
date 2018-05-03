<template>
<v-container fluid :class="[name, 'scroll-y']">
  <AutoKana :onChange="test" />
  {{testValue}}
</v-container>
</template>

<script>
import AutoKana from '@/components/AutoKana'
const name = __filename.match(/^src\/[\w|\\/]*\/(\w*).vue$/)[1]

export default {
  name,
  computed: {
  },
  data () {
    return {
      name,
      testValue: ''
    }
  },
  methods: {
    test: function (value) {
      console.log(value)
      this.testValue = value
    }
  },
  components: {
    AutoKana
  }
}
</script>

<style scoped lang="stylus">
.Blog
  height 100vh
  overflow auto


</style>
