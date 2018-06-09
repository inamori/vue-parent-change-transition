<template>
  <transition v-on:before-enter="beforeEnter" v-on:after-enter="afterEnter" v-on:before-leave="beforeLeave">
    <slot/>
  </transition>
</template>

<script>
  import {TweenMax} from "gsap/TweenMax";

  let previousPosition = {}

  export default {
    name: "parent-change-transition",
    props: {
      idPropertyName: { type:String, default: 'id' },
      duration: { type:Number, default: 300 }
    },
    data () {
      return { intervalIndex: null }
    },
    mounted () {
      this.startPositionInspection()
    },
    computed: {
      childId () {
        return this[[this.idPropertyName]]
      }
    },
    methods: {
      startPositionInspection () {
        let p = this.$el.getBoundingClientRect()
        this.intervalIndex = setInterval(() => {
          let current = this.$el.getBoundingClientRect()
          if (current.x === p.x && current.y === p.y) return
          this.move(p, current)
        }, 10)
      },
      move (previous, current) {
        clearInterval(this.intervalIndex)
        TweenMax.fromTo(this.$el, this.duration * 0.001, {
          transform: `translate(${previous.x - current.x}px, ${previous.y - current.y}px)`
        }, {
          transform: 'translate(0, 0)',
          onComplete: this.startPositionInspection.bind(this)
        })
      },
      beforeLeave (el) {
        previousPosition[this.childId] = el.getBoundingClientRect()
      },
      beforeEnter (el) {
        el.hidden = true
      },
      afterEnter (el) {
        el.hidden = false
        if (!previousPosition[this.childId]) return
        this.move(previousPosition[this.childId], el.getBoundingClientRect())
      }
    }
  }
</script>

<style scoped>

</style>
