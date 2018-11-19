import { shallowMount, createLocalVue } from '@vue/test-utils'
import ManagerList from '@/pages/manager/ManagerList.vue'
import ElementUI from 'element-ui'
import Vuex from 'vuex'

const lv = createLocalVue()
lv.use(ElementUI)
lv.use(Vuex)

describe('ManagerList', () => {
  let actions
  let store
  beforeEach(() => {
    actions = {
      getManagerList: jest.fn(),
      deleteManagerItem: jest.fn()
    }
    store = new Vuex.Store({
      state: {},
      actions
    })
  })
  it('tof', () => {
    const wp = shallowMount(ManagerList, {
      lv, store
    })
    expect(wp.vm.handleDelete()).toBe(false)
  })
})
