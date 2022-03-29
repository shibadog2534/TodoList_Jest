<template>
  <div>
    <DisplayTodo/>
  </div>
</template>

<script lang="ts">
import DisplayTodo from './components/DisplayTodo.vue'

export default {
  name: 'App',
  components: { DisplayTodo }
}
</script>

<style>
</style>

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
