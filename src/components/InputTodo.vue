<template>
  <div>
    <!-- <input v-model="todoValue" input-todo>
    <button @click="sendTodo">送信</button> -->
    <div class="input-group mb-3 mt-3">
    <input type="text" class="form-control" v-model="todoValue" input-todo placeholder="予定を入力" aria-label="Recipient's username" aria-describedby="button-addon2">
    <button type="button" class="btn btn-success" @click="sendTodo">保存</button>
</div>
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
