import { mount } from '@vue/test-utils'
// import DisplayTodo from '@/components/DisplayTodo.vue'
import InputTodo from '@/components/InputTodo.vue'
import PropTest from '@/components/PropTest.vue'

describe('InputTodo.vue', () => {
  // コンポーネントマウント、ラッパを作成
  const wrapper = mount(InputTodo)
  it('inputタグとbuttonタグの存在チェック', () => {
    const inputValue = wrapper.find('input')
    const clickButton = wrapper.find('button')
    // flushPromises()
    expect(inputValue.exists()).toBe(true)
    expect(clickButton.exists()).toBe(true)
  })

  it('emitの発火チェック', () => {
    // コンポーネントのmethodをvmから呼び出す
    wrapper.vm.sendTodo()
    // イベントがemitされた場合はtrueになる
    expect(wrapper.emitted().inpDATA).toBeTruthy()
  })
})

describe('PropTest.vue', () => {
  test('prop動作チェック', function () {
    const wrapper = mount(PropTest, {
      props: {
        saveData: 'TestData'
      }
    })
    // expect(wrapper.text()).toBe('props:World')
    console.log('入力結果：' + wrapper.props())
  })
})
