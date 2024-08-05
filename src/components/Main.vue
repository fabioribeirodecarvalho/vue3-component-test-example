<template>
  <div>{{ hello }} world </div>
  <Child />
</template>

<script>

export default {
  props: {
    hello: {
      default() {
        return this.$hello;
      }
    }
  },
};
</script>
