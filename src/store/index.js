import { createStore } from 'vuex'

export default createStore({
  state: {
    user: {
      id: 'abc-1',
      name: 'pauly m',
      email: 'paulinelym@gmail.com',
      avatar: ''
    },
    sessionAuth: false
  },
  getters: {
  },
  mutations: {
    setUser(state, data) {
      state.user = data;
    },
    setSessionAuth(state, data) {
      state.sessionAuth = data;
    }
  },
  actions: {
  },
  modules: {
  }
})
