<template>
  <ul class="todo-main">
    <Item v-for="(todo, index) in todoList " :key="index" :todo="todo" :index="index"></Item>
  </ul>
</template>
<script>
import Item from './TodoItem'
import {mapState} from 'vuex'
export default {
  components: {
    Item
  },
  computed: {
    ...mapState(['todoList'])
  }
}
</script>
<style scoped>
  .todo-main {
    margin-left: 0px;
    border: 1px solid #ddd;
    border-radius: 2px;
    padding: 0px;
  }

  .todo-empty {
    height: 40px;
    line-height: 40px;
    border: 1px solid #ddd;
    border-radius: 2px;
    padding-left: 5px;
    margin-top: 10px;
  }
  ul{
    margin-top: 15px;
  }
</style>
