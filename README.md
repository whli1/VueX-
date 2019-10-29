# VueX

> vueX练习

## Build Setup

``` bash
# install dependencies
npm install

# serve with hot reload at localhost:8080
npm run dev

# build for production with minification
npm run build

# build for production and view the bundle analyzer report
npm run build --report
```
# VueX是什么
>对Vue中的多个组件的共享状态进行集中式的管理(读写)

>状态自管理
```
- state：驱动应用的数据源
- mutations：直接更新state的方法(回调函数)的对象
- actions：响应在view上用户输入导致的状态变化，cmmit()触发mutations
- view：以声明的方式将state映射导视图
- getter
- 向外暴露的store对象
```
```
1. 单向数据流
2. 初始化显示：view读取state中的数据初始值
3. 更新显示：
   view视图触发Action中的行为函数
   action中的函数改变state中的数据 
```
>下载方式：npm install --save vuex

>结构图
![Image text](https://raw.githubusercontent.com/whli1/VueX-/master/static/vuex.jpg)

>scr:todoList案例

>src-count:计数器案例

For a detailed explanation on how things work, check out the [guide](http://vuejs-templates.github.io/webpack/) and [docs for vue-loader](http://vuejs.github.io/vue-loader).
