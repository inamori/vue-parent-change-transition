<template>
  <div class="place">
    <child v-for="childId in model.children" :id="childId" :placeId="model.id" :key="childId" />
  </div>
</template>

<script>
  import Child from "./child"

  export default {
    name: "parent",
    components: {Child},
    props: { model:Object }
  }
</script>

<style scoped>
  .place {
    width: 50vw;
    height: 50vh;
    float: left;
    padding: 2vh;
    box-sizing: border-box;
  }
</style>
