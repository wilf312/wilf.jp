export default {
  namespaced: true,
  state: {
    dimension: {w: 0, h: 0}
  },
  getters: {
    dimension (state) {
      return state.dimension
    }
  }
}
