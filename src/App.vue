<template>
  <div id="app">
    <h3>计数器</h3>
    <p>sum: {{$store.state.count}} times,count is {{$store.getters.evenOrOdd}}</p>
    <button @click="add">+</button>
    <button @click="reduce">-</button>
    <button @click="oddAdd">和为奇数时增加</button>
    <button @click="asyncADD">每隔1s增加</button>
  </div>
</template>

<script>
  import store from './store'
  export default {
    name: 'App',
    store,//所有的组件对象都多了一个属性：$store
    computed: {
      evenOrOdd() {
        return $store.getters.evenOrOdd()
      }
    },
    methods: {
      add() {
      // 通知vuex去增加
        this.$store.dispatch('add');
      },
      reduce() {
        this.$store.dispatch('reduce');
      },
      oddAdd() {
        if ( this.$store.state.count % 2 !== 0) {
          this.$store.dispatch('add');
        }
      },
      asyncADD() {
        setInterval(() => {
          this.$store.dispatch('add');
        }, 1000)
      }
    }
  }
</script>

<style>

</style>
