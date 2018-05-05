import axios from 'axios'
const BACKEND_URL = 'https://afterwin.cn/api/v1/'
export default {
  showDocument ({ commit }) {
    axios.get(BACKEND_URL + 'document').then(resonpse => {
      commit('queryDocument', resonpse.data)
    }).catch(e => {
      console.log(e)
    })
  },
  showCompany ({ commit }) {
    axios.get(BACKEND_URL + 'company').then(resonpse => {
      commit('queryCompany', resonpse.data.companyList)
    }).catch(e => {
      console.log(e)
    })
  },
  showExperience ({ commit }) {
    axios.get(BACKEND_URL + 'experience').then(resonpse => {
      commit('queryExperience', resonpse.data.experiences)
    }).catch(e => {
      console.log(e)
    })
  },
  showSkill ({ commit }) {
    axios.get(BACKEND_URL + 'skill').then(resonpse => {
      commit('querySkill', resonpse.data.skills)
    }).catch(e => {
      console.log(e)
    })
  }
}
