import ParentChangeTransition from './parent-change-transition.vue'

const Plugin = {
  install (Vue, options) {
    if (this.installed) {
      return
    }
    this.installed = true
    Vue.component('parent-change-transition', ParentChangeTransition)
  }
}

export default Plugin
