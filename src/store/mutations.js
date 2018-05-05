export default {
  queryDocument (state, document) {
    state.document = document
  },
  queryCompany (state, companyList) {
    state.companyList = companyList
  },
  queryExperience (state, experiences) {
    state.experiences = experiences
  },
  querySkill (state, skills) {
    state.skills = skills
  }
}
