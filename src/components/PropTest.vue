<template>
<!-- プロップの実験用ページ -->
<div>
props:{{ saveData }}
</div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'

export default defineComponent({
  name: 'PropTest',
  // props内に任意の変数を作成して、型付けするだけで値を取得できる
  props: {
    saveData: {
      type: String
    }
  }
  // setup関数内で使用するには、（）内にpropsを書き込む。型は上述
  // emitは（）のpropsの後に記載→（setup,context）もしくは(_,context)
  // setup (props) {
  //   console.log(props.saveData)
  // }
})
</script>

<style>
</style>
