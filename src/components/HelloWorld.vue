<template>
<div>
  <h1>{{ msg }}</h1>

  <button @click="state.count++">count is: {{ state.count }}</button>
  <p>
    Edit
    <code>components/HelloWorld.vue</code> to test hot module replacement.
  </p>
</div>
</template>

<script>
export default {
  props: {
    msg: String
  },
  data() {
    return {
      state: {
        count: 0
      }
    }
  }
}
</script>

<style lang="scss" scoped>
a {
  color: #42b983;
}
</style>