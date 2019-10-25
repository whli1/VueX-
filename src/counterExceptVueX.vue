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
  export default {
    name: 'App',
    data() {
      return {
        count: 0
      }
    },
    computed: {
      evenOrOdd() {
        return this.count % 2 === 0 ? '偶数' : '奇数'
      }
    },
    methods: {
      add() {
        this.count = this.count + 1;
        return this.count;
      },
      reduce() {
        this.count = this.count - 1;
        return this.count;
      },
      oddAdd() {
        if ( this.count % 2 !== 0) {
          this.count = this.count + 1;
          return this.count;
        }
      },
      asyncADD() {
        setInterval((count) => {
          count = this.count++;
          return count;
        }, 1000)
      }
    }
  }
</script>

<style>

</style>
