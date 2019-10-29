import {ADD_TODO, DEL, SELECT_ALL, DELETE_ALL, RECEIVE_TODOS} from './mutations-types'
import storageUtil from '../utils/storageUtil'

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
  },
  reqTodoList({commit}) {
    setTimeout(() => {
      //读取数据
      const todos = storageUtil.getTodoItems('todo_key')
      console.log(todos);
      //提交commit
      commit(RECEIVE_TODOS, todos);
    }, 1000);
  }
}
