<template>
  <h3>{{ name }}</h3>
</template>

<script>
export default {
  data() {
    return {
      name: 'My Component'
    }
  }
}
</script>

<style lang="scss" scoped>
h3 {
  color: red;
}
</style>