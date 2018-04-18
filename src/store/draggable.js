const initialState = {
  list: [
    {id: 1, name: 'Genya', birth: '2000-1-1 00:00:00'},
    {id: 2, name: 'Fuu', birth: '2001-1-2 00:00:01'},
    {id: 3, name: 'Cal', birth: '2002-1-3 00:00:02'},
    {id: 4, name: 'いぬ', birth: '2003-1-4 00:00:03'},
    {id: 5, name: 'ねこ', birth: '2004-1-5 00:00:04'},
    {id: 7, name: 'あんどろいｄ', birth: '2006-1-7 00:00:06'},
    {id: 7, name: 'あいふぉん', birth: '2006-1-7 00:00:06'},
    {id: 7, name: 'どっぐ', birth: '2006-1-7 00:00:06'},
    {id: 8, name: 'きゃっと', birth: '2007-1-8 00:00:07'}
  ]
}
export default {
  namespaced: true,
  state: JSON.parse(JSON.stringify(initialState)),
  actions: {
    updateList ({commit}, list) {
      commit('updateList', list)
    },
    updateRecord ({commit}, record = {}) {
      console.log('action updateRecord', record)
      commit('updateRecord', record)
    },
    reset ({commit}) {
      commit('reset')
    },
    save ({commit}, input) {
      commit('save', input)
    }
  },
  getters: {
    list (state) {
      return state.list
    }
  },
  mutations: {
    updateList (state, list) {
      state.list = list
    },
    updateRecord (state, record) {
      console.log('mutation updateRecord')
      state.list = state.list.map((d) => {
        if (d.id === record.id) {
          return Object.assign({}, d, record)
        } else {
          return d
        }
      })
    },
    reset (state, list) {
      state.list = initialState.list
    },
    save (state, input) {
      state.list.push({id: 8, name: input, birth: '2007-1-8 00:00:07'})
    }
  }
}
