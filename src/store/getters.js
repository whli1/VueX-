export default {
  totalCount(state) {
    return state.todoList.length;
  },
  completeItems(state) {
    return state.todoList.reduce((total, todoList) => total + (todoList.complete ? 1 : 0), 0)
  },
  //判断是否全部选中
  isAllSelected(state, getters) {
    return getters.completeItems === getters.totalCount && getters.completeItems > 0;
  }
}
