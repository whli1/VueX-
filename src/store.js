/*
vuex的核心管理对象模块
 */
import Vuex from 'vuex'
import Vue from 'vue'


Vue.use(Vuex)

//状态对象
const state = {
  count: 0
}

//包含多个更新state函数的对象
const mutations = {
  ADD(state) {
    state.count++;
  },
  REDUCE(state) {
    state.count--;
  }
}

//对应事件回调函数
const actions = {
  add({commit}) {
    //提交一个mutation
    commit('ADD')
  },
  reduce({commit}) {
    commit('REDUCE')
  }
}

//计算属性，包含多个getter函数的对象
const getters = {
  evenOrOdd(state) {
    return state.count % 2 === 0 ? '偶数' : '奇数'
  }
}

export default new Vuex.Store({
  state,//状态
  mutations,//包含多个更新state函数的对象
  actions,//对应事件回调函数
  getters//计算属性，包含多个getter函数的对象
})
