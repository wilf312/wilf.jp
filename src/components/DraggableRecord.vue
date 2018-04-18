<template>
  <v-list-tile
    :class="name"
    >
    <v-list-tile-content>
      <v-list-tile-title>
        {{ inputName }}
      </v-list-tile-title>
      <v-list-tile-title>
        {{ birth }}
      </v-list-tile-title>
    </v-list-tile-content>
  </v-list-tile>
</template>

<script>
let name = __filename.match(/^src\/[\w|\\/]*\/(\w*).vue$/)[1]

export default {
  name,
  props: [
    'recordName',
    'birth',
    'id',
    'inputChange'
  ],
  data () {
    return {
      name
    }
  },
  computed: {
    inputName: {
      get () {
        return this.recordName
      },
      set (data) {
        this.inputChange({
          name: data
        }, this.id)
        // this.$store.dispatch('draggable/updateRecord')
      }
    }
  }
}
</script>

<style scoped lang="stylus">
.DraggableRecord
  // width 300px
  // float left
</style>
