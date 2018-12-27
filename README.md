# vuex-study
Vuex学习笔记
# 参考
[vuex](https://vuex.vuejs.org/)
# 安装使用
1.下载通过`scirpt`脚本引入后者直接使用CND
```
<script src="../plugins/vue/vue.js"></script>
<script src="https://unpkg.com/vuex@2.0.0"></script>
```
2.通过`npm`安装
```
npm install vuex --save
```

```
import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)
```

3.使用
```
// 创建实例
const store = new Vuex.Store({
  state: {
    title: 'vuex study'
  },
})
```
4.挂载
```
new Vue({
  el: '#app',
  store,
  components: { App },
  template: '<App/>'
})
```
## state
存放数据（状态）
访问`state`中存放的状态方法：
1.通过`this.$store.state`获取
2.使用`mapState`函数获取

## getters
`vuex`的计算属性

访问`getters`中属性：

1.通过`this.$store.getters`

2.通过`mapGetters`函数

## mutation
修改状态的事件（方法），更改` Vuex` 的 `store` 中的状态的唯一方法是提交 `mutation`

提交`mutations`
1.`this.$store.commit(type, payload)`
`this.$store.commit({
  type: 'event',
  payload: {} | ''
})`
`type`：` mutation`事件名
`payload`: 载荷，即参数

mutation中的事件都是同步的；

2.`mapMutations`
## actions
