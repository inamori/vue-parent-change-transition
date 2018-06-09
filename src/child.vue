<template>
  <parent-change-transition>
    <div class="child" @click="onClick">
      {{id}}
    </div>
  </parent-change-transition>
</template>

<script>
  import { mapState } from 'vuex'

  export default {
    name: "child",
    components: {},
    props: { id:Number, placeId:Number },
    methods: {
      onClick () {
        const newParentId = this.placeId % this.places.length + 1
        this.$store.commit('changePlace', { childId: this.id, from: this.placeId, to: newParentId })
      }
    },
    computed: {
      ...mapState(['places']),
    }
  }
</script>

<style scoped>
  .child {
    width: 10vh;
    height: 10vh;
    line-height: 10vh;
    font-size: 3vh;
    font-weight: bold;
    margin: 2vh;
    float: left;
    background-color: #666;
    border: 1vh solid #ccc;
    color: white;
  }
</style>
