<template>
  <div :class="name">
    <v-btn light @click="reset">Reset</v-btn>

    <div>
      <v-text-field
        v-model="input"
        name="input-2"
        label="Label Text"
        class="input-group--focused"
      ></v-text-field>
      <v-btn light @click="save">Save</v-btn>

    </div>
    <draggable
      v-model="listData"
      @start="drag=true"
      @end="drag=false"
      :options="{handle:'.item'}"
      element="v-list"
      >
        <DraggableRecord
          class="item"
          v-for="(i, key) in listData" :key="key"
          :recordName="i.name"
          :birth="i.birth"
          :id="i.id"
          :inputChange="inputChange"
          />
    </draggable>
  </div>
</template>

<script>
import {mapGetters} from 'vuex'
import draggable from 'vuedraggable'
import {debounce} from 'lodash'

import DraggableRecord from '@/components/DraggableRecord'
const name = __filename.match(/^src\/[\w|\\/]*\/(\w*).vue$/)[1]

export default {
  name,
  computed: {
    ...mapGetters('draggable', ['list']),
    listData: {
      get () {
        return this.list
      },
      set (list) {
        console.log(list)
        this.$store.dispatch('draggable/updateList', list)
      }
    }

  },
  data () {
    return {
      name,
      input: ''
    }
  },
  methods: {
    reset () {
      this.$store.dispatch('draggable/reset')
    },
    save () {
      this.$store.dispatch('draggable/save', this.input.trim())
    },

    inputChange: debounce(function (data, id) {
      const sendData = {
        ...data,
        id: id
      }
      console.log('inputChange', sendData)
      this.$store.dispatch('draggable/updateRecord', sendData)
      // this.$nextTick(() => {
      //   this.$forceUpdate()
      // })
    }, 200)
  },
  components: {
    draggable,
    DraggableRecord
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="stylus">
.Draggable
  width 100vw
  height 100vh
  overflow hidden


</style>
