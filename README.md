# vue-parent-change-transition

Enable a child components to animate when it changes the parent.

It'll be useful when you create a card game.

(e.g. show transition of a card which move from deck to your hand)

## Live Demo
[Live Demo](https://inamori.github.io/vue-parent-change-transition/)

when you click a rect, the rect moves to another parent and show transit animation.

## Installation

``` bash
npm i vue-parent-change-transition --save
```

## Usage

parent
```
<template>
  <div class="place">
    <child v-for="childId in model.children" :id="childId" :placeId="model.id" :key="childId" />
  </div>
</template>
```
child
```
<template>
  <parent-change-transition :idPropertyName="'childId'" :duration="300">
    <div class="child" @click="changeParent"></div>
  </parent-change-transition>
</template>

<script>
...
methods: {
  changeParent () {
    // move to under another parent
  }
}

computed: {
  childId () {
    // return the property which identify this data model
    // you can change this key via "idPropertyName" props
  }
}
</script>
```
