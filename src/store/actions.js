import {ADD_TODO, DEL, SELECT_ALL, DELETE_ALL} from './mutations-types'

export default {
  addTodo({commit}, todo) {
    commit(ADD_TODO, {todo});
  },
  del({commit}, index) {
    commit(DEL, {index});
  },
  selectAll({commit}, val) {
    commit(SELECT_ALL, {val});
  },
  deleteAll({commit}) {
    commit(DELETE_ALL);
  }
}
