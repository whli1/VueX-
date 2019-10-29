import {ADD_TODO, DEL, SELECT_ALL, DELETE_ALL} from "./mutations-types";

export default {
  [ADD_TODO](state, {todo}) {
    state.todoList.unshift(todo);
  },
  [DEL](state, {index}) {
    state.todoList.splice(index, 1);
  },
  [SELECT_ALL](state, {val}) {
    state.todoList.forEach(todo => todo.complete = val);
  },
  [DELETE_ALL](state) {
    state.todoList = state.todoList.filter(todo => !todo.complete)
  }
}
