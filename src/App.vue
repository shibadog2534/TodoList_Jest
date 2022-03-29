<template>
  <div class="main">
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
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
.main {
  margin-left:auto;           /* IE以外用の中央寄せ */
  margin-right:auto;          /* IE以外用の中央寄せ */
  width:50%;                /* 幅 */
}
</style>
