import { shallowMount, createLocalVue } from '@vue/test-utils'
import LoginPage from '@/pages/Login.vue'
import ElementUI from 'element-ui'
const localVue = createLocalVue()
localVue.use(ElementUI)

describe('Login', () => {
  it('has username and password', () => {
    const wp = shallowMount(LoginPage, {
      localVue
    })
    expect(wp.vm.$data.modal.username).toBe('')
    expect(wp.vm.$data.modal.password).toBe('')
  })
})
