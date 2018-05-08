<template>
  <span :style="styled">あ</span>
</template>

<script>
import {mapGetters} from 'vuex'
let name = __filename.match(/^src\/[\w|\\/]*\/(\w*).vue$/)[1]

export default {
  name,
  props: [
    'w',
    'h',
    't'
  ],
  data () {
    return {
      deg: 1,
      top: 0,
      left: 0,
      speed: 1,
      scale: 1,
      startTime: 0,
      scaleSpeed: 1,
      rotateSpeed: 1,
      keisuu: 5
    }
  },
  computed: {
    ...mapGetters('ua', ['ua']),
    styled () {
      const h = window.innerHeight
      const time = this.t - this.startTime
      const top = time * this.speed * this.scaleSpeed
      const top2 = parseInt((top - this.top) * 100, 10) * 0.01
      if (top2 > h) this.top = (this.top) + (top2) + (Math.random() * (500))
      const left = top / 10
      return { transform: `scale(${parseInt(this.scale * 100, 10) * 0.01}, ${parseInt(this.scale * 100, 10) * 0.01}) translate3d(${parseInt((this.left + left) * 100, 10) * 0.01}px, ${top2}px, 0) rotate3d(1,1,1,${parseInt((this.t * this.rotateSpeed) * 100, 10) * 0.01}deg)` }
    }
  },
  mounted () {
    const random = (Math.random() * 0.5) + (-0.25)
    this.scale = Math.floor((1 + (Math.random() * 1.5) + (-0.75)) * 100) * 0.01 * (this.ua.category !== 'pc' ? 1.5 : 1)
    this.scaleSpeed = this.scale < 0.9 ? 0.9 : this.scale * (this.ua.category !== 'pc' ? 3 : 1)
    const rotate = (Math.random() * 10) + (-5)

    const left = this.w * (-0.1)

    this.startTime = this.t

    this.rotateSpeed = Math.floor((rotate) * 100) * 0.01
    this.speed = (this.speed + random) * this.keisuu
    this.left = (Math.random() * this.w) + left
    this.top = Math.random() * 5 * this.h
    this.deg = this.deg + random
  }
}
</script>

<style scoped lang="stylus">
  span
    font-size 50px
    position absolute
    left 0
    top 0
    will-change transform

</style>
