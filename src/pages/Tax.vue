<template>
<v-container fluid :class="[name, 'scroll-y']">
  <div class="wrap">
    <h1>税計算</h1>
    <v-text-field
      v-model="income"
      mask="nnnnnnnnnnn"
      label="売上"
      class="input-group--focused"
    ></v-text-field>
    <v-text-field
      v-model="cost"
      mask="nnnnnnnnnnn"
      label="経費"
      class="input-group--focused"
    ></v-text-field>
    <v-text-field
      label="所得税"
      :value="所得税"
      disabled
      class="input-group--focused"
    ></v-text-field>
    <v-text-field
      label="復興特別所得税"
      :value="復興特別所得税"
      disabled
      class="input-group--focused"
    ></v-text-field>
    <v-text-field
      label="所得税_復興特別所得税"
      :value="所得税_復興特別所得税"
      disabled
      class="input-group--focused"
    ></v-text-field>
    <v-text-field
      label="住民税"
      :value="住民税"
      disabled
      class="input-group--focused"
    ></v-text-field>
    <v-text-field
      label="住民税_所得税_合計"
      :value="住民税_所得税_合計"
      disabled
      class="input-group--focused"
    ></v-text-field>
  </div>
</v-container>
</template>

<script>
import tax from 'japanese-income-tax'
const name = __filename.match(/^src\/[\w|\\/]*\/(\w*).vue$/)[1]

export default {
  name,
  computed: {
    '課税所得' () {
      if (!this.income || (!this.cost && this.cost !== 0)) {
        return 0
      }
      return parseInt(this.income, 10) - parseInt(this.cost, 10)
    },
    '所得税' () {
      return this.tax.incomeTax(this['課税所得'])
    },
    '復興特別所得税' () {
      return this.tax.specialIncomeTax(this['課税所得'])
    },
    '所得税_復興特別所得税' () {
      return this.tax.actualIncomeTax(this['課税所得'])
    },
    '住民税' () {
      return this.tax.residentTax(this['課税所得'])
    },
    '住民税_所得税_合計' () {
      return this['所得税_復興特別所得税'] + this['住民税']
    }
  },
  data () {
    return {
      name,
      cost: 0,
      income: 0,
      tax
    }
  },
  methods: {
  },
  async mounted () {
  },
  components: {
  }
}
</script>

<style scoped lang="stylus">
.Tax
  height 100vh
  overflow auto

.wrap
  padding-top 40px


</style>
