<template>
  <div class="hello-world">Hello World!</div>
</template>

<script>
export default {
  name: 'TestComponent',
  expose: [],
  data: () => ({
    color: 'f00',
  }),
}
</script>

<style lang="scss" scoped>
.hello-world {
  background-color: v-bind(color);

  .a :deep(.b) {
    color: #fff;
  }

  ::v-deep * {
    box-sizing: border-box;
  }
}
</style>
