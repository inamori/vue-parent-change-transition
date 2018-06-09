<template>
  <div id="app">
    <parent v-for="p in places" :key="p.id" :model="p"
           :style="{ 'background-color': Math.floor(p.id / 2) % 2 === 0 ? '#333' : '#eee'}"/>
  </div>
</template>

<script>
import Parent from "./parent"
import { mapState } from 'vuex'

export default {
  name: 'app',
  components: {Parent},
  computed: {
    ...mapState(['places']),
  }
}
</script>

<style lang="scss">
body {
  margin: 0;
  padding: 0;
}
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  height: 100vh;
  margin: 0;
  padding: 0;
}
</style>
