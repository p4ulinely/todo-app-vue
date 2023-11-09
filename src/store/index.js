import { createStore } from 'vuex'

import userModule from './modules/userModule.js';

export default createStore({
  state: {
    appInfo: {
      version: '1.0'
    },
    sesssionInfo: {
      id: '',
      
    }
  },
  getters: {
  },
  mutations: {
  },
  actions: {
  },
  modules: {
    userModule,

  }
})
