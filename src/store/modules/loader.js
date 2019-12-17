const state = {
  isLoading: false
}

const mutations = {
  SHOW_LOADER(state, flag) {
    state.isLoading = flag
  }
}

const actions = {
  showLoader({commit}, flag) {
    commit('SHOW_LOADER', flag)
  }
}

const getters = {
  isLoading: (state) => {
    return state.isLoading
  }
}

export default {
  state,
  mutations,
  actions,
  getters
}
