<template>
  <v-container fluid :class="[name, 'scroll-y']">
    <p><AutoKana :onChange="test" /></p>
    <p v-if="testValue">
      {{testValue}}
    </p>
    <p v-else>
      ここに入力されたひらがなが表示される
    </p>
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
  .AutoKanaTest
    >>> input
      border solid 1px gray


</style>
