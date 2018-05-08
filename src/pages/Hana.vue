<template>
  <div :class="name">
    <v-radio-group v-model="type" :mandatory="false">
      <v-radio label="はなびら" value="hanabira"></v-radio>
      <v-radio label="ひらがな" value="hiragana"></v-radio>
    </v-radio-group>
    <div class="anime-wrap">
      <div v-if="type === 'hanabira'">
        <Hanabira
          :path="list[(n % 7)]"
          :t="t"
          :w="dimension.w"
          :h="dimension.h"
          v-for="n in cnt" :key="n" />
      </div>
      <div v-else>
        <Hiragana
          :t="t"
          :w="dimension.w"
          :h="dimension.h"
          v-for="n in cnt" :key="n" />
      </div>
    </div>
  </div>
</template>

<script>
import {mapGetters} from 'vuex'
import Hanabira from '@/components/Hanabira'
import Hiragana from '@/components/Hiragana'
import Img1 from '../assets/1.png'
import Img2 from '../assets/2.png'
import Img3 from '../assets/3.png'
import Img4 from '../assets/4.png'
import Img5 from '../assets/5.png'
import Img6 from '../assets/6.png'
import Img7 from '../assets/7.png'
const name = __filename.match(/^src\/[\w|\\/]*\/(\w*).vue$/)[1]

export default {
  name,
  data () {
    return {
      name,
      type: 'hiragana',
      t: 0,
      cnt: 1,
      plus: 1,
      list: [
        Img1,
        Img2,
        Img3,
        Img4,
        Img5,
        Img6,
        Img7
      ]
    }
  },
  computed: {
    ...mapGetters('ua', ['ua']),
    ...mapGetters('common', ['dimension'])
  },
  mounted () {
    const isMobile = this.ua.category !== 'pc'
    console.log(isMobile ? 'モバイル向けの実行' : 'PC向けの実行')
    const fps = 1000 / (isMobile ? 40 : 60)
    const time = (isMobile ? 30 : 150)
    const interval = (isMobile ? 250 : 150)

    console.log('fps', fps)

    setInterval(() => {
      this.t = this.t + 1
    }, fps)

    let count = 0
    const timerFunc = () => {
      this.cnt += this.plus
      count++
      if (count < time) {
        setTimeout(timerFunc, interval)
      }
    }
    timerFunc()
  },
  components: {
    Hanabira,
    Hiragana
  },
  methods: {
    changeType (_type) {
      this.type = _type
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="stylus">
  .Hana
    width 100vw
    height 100vh
    position fixed
    overflow hidden

    h1
      position absolute
      top 50vh
      font-size 20rem
</style>
