<template>
<div>
  <h1>MyComponent</h1>
  <my-component />

  <h1>hello</h1>
  <HelloWorld msg="Hello Vue 2 + Vite" />
</div>
</template>

<script>
import HelloWorld from './components/HelloWorld.vue'
import MyComponent from '../lib/MyComponent.vue'

export default {
  components: {
    HelloWorld,
    MyComponent,
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>