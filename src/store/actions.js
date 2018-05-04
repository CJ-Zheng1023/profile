import axios from 'axios'
const BACKEND_URL = 'http://localhost:3000/api/v1/'
export default {
  showDocument ({ commit }) {
    axios.get(BACKEND_URL + 'document').then(resonpse => {
      commit('queryDocument', resonpse.data)
    }).catch(e => {
      console.log(e)
    })
  }
}
