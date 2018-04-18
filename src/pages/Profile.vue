<template>
  <div
    :class="name"
    >

    <ul>
      <li>---</li>
      <li v-for="(i, key) in dataList" :key="key">
        <div v-if="!i.link">{{i.key}}: {{i.value}}</div>

        <a v-else :href="i.link" target="_blank">
          <div v-if="i.key !== i.value">{{i.key}}: {{i.value}}</div>
          <div v-else>{{i.value}}</div>
        </a>

      </li>
    </ul>
  </div>
</template>

<script>
const name = __filename.match(/^src\/[\w|\\/]*\/(\w*).vue$/)[1]

export default {
  name,
  data () {
    return {
      name,
      color: '#fcc',
      colorList: [
        '#fcc',
        '#dff',
        '#ffd'
      ],
      dataList: [
        {key: 'Name', value: 'GENYA (WiLF)'},
        {key: 'Twitter', value: '@wilf_genya', link: 'https://twitter.com/wilf_genya'},
        {key: 'Github', value: '@wilf312', link: 'https://github.com/wilf312'},
        {key: 'Blog', value: 'Blog', link: 'http://log.wilf.jp'}
      ]
    }
  },
  mounted () {
    this.color = this.colorList[parseInt(Math.random() * 3, 10)]
  },
  computed: {
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="stylus">
.Profile
  width 100vw
  height 100vh
  box-sizing border-box
  padding-top 3rem
  @media all and (orientation: portrait)
    padding-left 5vw


  ul
    list-style none
    text-align left
    font-size 15rem
    line-height 2.8rem
    @media all and (orientation: portrait)
      line-height 4.8rem
      font-size 8rem


  div
    display inline-block


  color = #444
  a
    text-decoration none
    color color
    &:hover
      border-bottom 1px solid color + #333
</style>
