import axios from 'axios'

export const state = () => ({
  events: []
})

export const getters = {
  events: state => state.events
}

export const actions = {
  async postEvent (ctx, payload) {
    await axios.post('/')
  }
}
