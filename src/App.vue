<script setup>
import HelloWorld from "./components/HelloWorld.vue";
import FruitList from "./components/FruitList.vue";
</script>

<template>
  <HelloWorld />
  <FruitList />
</template>

<script>
export default {
  components: {
    HelloWorld,
    FruitList,
  },
};
</script>
