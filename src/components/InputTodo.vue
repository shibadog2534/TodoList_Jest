<template>
  <div>
    <input v-model="todoValue" input-todo>
    <button @click="sendTodo">送信</button>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref } from 'vue'

export default defineComponent({
  name: 'InputTodo',
  // emitでイベントを発火させたいから用意する必要がある
  setup (_, context) {
    const todoValue = ref<string>()
    const sendTodo = () => {
      // context.emit('イベント名',渡したい値)
      context.emit('inpDATA', todoValue.value)
      todoValue.value = ''
    }

    return {
      todoValue,
      sendTodo
    }
  }
})
</script>

<style>
ul {
  list-style: none;
}
</style>
