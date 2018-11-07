import { shallowMount, createLocalVue } from '@vue/test-utils'
import LoginBox from '@/components/LoginBox/LoginBox.vue'
import ElementUI from 'element-ui'
const localVue = createLocalVue()
localVue.use(ElementUI)

describe('LoginBox', () => {
  it('has username and password', () => {
    const wp = shallowMount(LoginBox, {
      localVue
    })
    expect(wp.vm.$data.modal.username).toBe('')
    expect(wp.vm.$data.modal.password).toBe('')
  })
})
