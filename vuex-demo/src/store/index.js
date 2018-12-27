import Vue from 'vue'
import Vuex from 'vuex'
import {
  INCREASE,
  SHOWTXT
} from '../store/mutationstypes'
Vue.use(Vuex)
const store = new Vuex.Store({
  state: {
    title: 'Vuex study!',
    user: {
      name: 'admin',
      password: '1245647688'
    },
    msg: 'studying state ',
    title1: 'studying getter',
    todos: [{
        id: 1,
        text: 'item1',
        done: true
      },
      {
        id: 2,
        text: 'item2',
        done: false
      }
    ],
    arr: ['a','b','c','d','e','f','g','h'],
    count: 0,
    showText: false,
  },
  getters: {
    getTitle1: state =>  state.title1,
    doneTodos: (state, getters) => {
      console.log(state);
      console.log(getters);
      return state.todos.filter(todo => todo.done)
    },
    getLetters: state => state.arr
  },
  mutations: {
    INCREASE(state, payload) {
      state.count += payload.num
    },
    SHOWTXT(state) {
      state.showText = !state.showText
    },
  }
})
export default store