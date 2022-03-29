<!-- <template>
  <div>
    ABOUT
    <div>
      <input v-model="state.todo">
      <button @click="saveTodo">保存</button>
    </div>
    <div>
      <ul>
        <li v-for="(todo,index) in state.todos" :key="index">{{ todo }}
        <button @click="removeTodo(index)">delete</button>
        </li>
      </ul>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref, reactive, computed } from 'vue'

export default defineComponent({
  setup () {
    const state = reactive({
      todo: '',
      todos: []
    })

    const saveTodo = () => {
      state.todos.push(state.todo)
      state.todo = ''
    }

    const removeTodo = (index) => {
      state.todos.splice(index, 1)
    }

    return {
      state,
      saveTodo,
      removeTodo
    }
  }
})
</script>

<style>
ul {
  list-style: none;
}
</style> -->
