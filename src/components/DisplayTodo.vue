// eslint-disable-next-line import/no-duplicates
<template>
  <div>
    ToDoリスト
    <InputTodo @inpDATA='inpDATA'/>
    <div class="parent-box flex-box-between">
      <table >
          <tr v-for="(todo,index) in todos" :key="index" class="list-group-item">
            <td class="td1">{{ todo }}</td>
            <td><button @click="removeTodo(index,todo)" type="button" class="btn btn-primary">完了</button></td>
          </tr>
      </table>
      <!-- <ul class="list-group">
        <li v-for="(todo,index) in todos" :key="index" class="list-group-item">{{ todo }}
          <button @click="removeTodo(index,todo)" type="button" class="btn btn-primary">完了</button>
        </li>
      </ul> -->
      <!-- <ul>
        <li v-for="(todo,index) in todos" :key="index">{{ todo }}
        <button type="button" class="btn btn-primary" @click="removeTodo(index,todo)">完了</button>
        </li>
      </ul> -->
    </div>
    <!-- Propの実験 -->
    <PropTest :saveData="todos"/>
  </div>
</template>

<script lang="ts">
import { defineComponent, onMounted, ref } from 'vue'
import InputTodo from './InputTodo.vue'
import PropTest from './PropTest.vue'

export default defineComponent({
  name: 'DisplayTodo',
  components: { InputTodo, PropTest },

  setup () {
    const STORAGE_KEY = 'todos'
    const todos = ref<string[]>([])

    // マウント時にローカルストレージを見にいって、該当するキーで保存されていればtodosに入れ込む
    // JSON形式にパースして取り出す必要があるらしい
    const getStorage = onMounted(() => {
      if (localStorage.getItem(STORAGE_KEY)) {
        try {
          todos.value = JSON.parse(localStorage.getItem(STORAGE_KEY) || '{}')
        } catch (e) {
          // エラーなら丸ごと削除
          localStorage.removeItem(STORAGE_KEY)
        }
      }
    })

    // emit 空白なら追加しない
    // todosに追加したのち、saveStorage()を呼び出しローカルストレージに格納
    const inpDATA = (data: string) => {
      if (!data) {
        return
      }
      todos.value.push(data)
      // console.log(todos.value)
      saveStorage()
    }

    // ローカルストレージへ保存する関数
    // 削除処理も兼任
    const saveStorage = () => {
      const parsed = JSON.stringify(todos.value)
      localStorage.setItem(STORAGE_KEY, parsed)
    }

    // 削除ボタンが押下されたらtodosからspliceで削除
    // spliceされたtodosでローカルストレージに上書きすることで削除を実現
    const removeTodo = (index: number, todo: string) => {
      if (confirm((todo) + 'を削除しますか？')) {
        todos.value.splice(index, 1)
        saveStorage()
      }
    }

    return {
      todos,
      inpDATA,
      saveStorage,
      removeTodo,
      getStorage
    }
  }
})
</script>

<style scoped>
ul {
  list-style: none;
}

table{
  width:100%;
  table-layout: fixed;
}
.td1{
  width:90%;
}
</style>
