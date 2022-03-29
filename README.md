# vue3_todo
Todoリストをコンポーネント化
親
./src/components/DisplayTodo.vue
子
./src/components/InputTodo.vue
./src/components/PropTest.vue
PropTestはPropsの動作確認用で作成

テストコード作成
./tests/unit/todo.spec.ts
使用したもの
Jest
vue/test-utils

課題
テストコードに対する理解
現状各要素の存在の確認方法しか理解できていない
DisplayTodo.vue内でテストデータを使用した動作確認方法が不明

## Project setup
```
npm install
```

### Compiles and hot-reloads for development
```
npm run serve
```
### Code Test
```
npm run test:unit
```

### Compiles and minifies for production
```
npm run build
```

### Lints and fixes files
```
npm run lint
```

### Customize configuration
See [Configuration Reference](https://cli.vuejs.org/config/).
