import Vue from 'vue'
import App from './app.vue'
import Vuex from 'vuex'
import ParentChangeTransition from 'vue-parent-change-transition'

import foo from '../../src/index'
foo.install(Vue)

Vue.use(Vuex)
// Vue.use(ParentChangeTransition)

const childNum = 5
const places = Array.from({length: 4}, (_, k) => k).map(i => {
  const children = Array.from({length: childNum}, (_, k) => k).map(j => {
    return i * childNum + j + 1
  })
  return {id: i + 1, children: children}
})
const store = new Vuex.Store({
  state: { places },
  mutations: {
    changePlace: (state, payload) => {
      let oldParent = state.places.find(p => p.id === payload.from)
      oldParent.children.splice(oldParent.children.indexOf(payload.childId), 1)
      let newParent = state.places.find(p => p.id === payload.to)
      newParent.children.push(payload.childId)
      // newParent.children = [payload.childId].concat(newParent.children)
    }
  }
})
new Vue({
  el: '#app',
  store,
  render: h => h(App)
})
