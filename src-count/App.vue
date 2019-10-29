<template>
  <div id="app">
    <h3>计数器</h3>
    <p>sum: {{count}} times,count is {{evenOrOdd}}</p>
    <button @click="add">+</button>
    <button @click="reduce">-</button>
    <button @click="oddAdd">和为奇数时增加</button>
    <button @click="asyncADD">每隔1s增加</button>
  </div>
</template>

<script>
  import store from './store'
  import {mapState, mapGetters, mapActions} from 'vuex'
  export default {
    name: 'App',
    store,//所有的组件对象都多了一个属性：$store
    computed: {
      ...mapState(['count']),//返回值对象：{count() {return $store.state.count}}
      ...mapGetters(['evenOrOdd']),//返回值对象：{evenOrOdd() {return $store.getters.evenOrOdd()}}
    },
    methods: {
      ...mapActions(['add','reduce','oddAdd','asyncADD'])
    }
  }
</script>

<style>

</style>
