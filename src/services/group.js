import api from '@/api'
const group = {
  list: () => {
    return api.get('group')
  },
  add: (data) => {
    return api.post('group', data)
  },
  edit: (id, data) => {
    return api.put(`group/${id}`, data)
  },
  delete: (id) => {
    return api.delete(`group/${id}`)
  }
}
export default group
