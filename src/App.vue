<template>
  <div id="root">
    <div class="todo-container">
      <div class="todo-wrap">
        <TodoHeader></TodoHeader>
        <TodoList></TodoList>
        <TodoFoot></TodoFoot>
      </div>
    </div>
  </div>
</template>

<script>
import TodoHeader from './components/TodoHeader'
import TodoList from './components/TodoList'
import TodoFoot from './components/Todofoot'

export default {
  name: 'root',
  components: {
    TodoHeader,
    TodoList,
    TodoFoot
  },
  // data () {
  //   return {
  //     // 从localStorage读取
  //     todoList: JSON.parse(window.localStorage.getItem('todo_key') || '[]')
  //   }
  // },
  // watch: {
  //   todoList: {
  //     deep: true, // 深度监视
  //     handler: function (val) {
  //       window.localStorage.setItem('todo_key', JSON.stringify(val))
  //     }
  //   }
  // }
}
</script>

<style>
  body {
    background: #fff;
  }
  .todo-container{
    margin: 30px auto;
    width: 575px;
    border: 1px solid #b8b8b8;
    padding: 20px;
  }
</style>
