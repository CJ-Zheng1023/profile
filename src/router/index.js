import Vue from 'vue'
import Router from 'vue-router'
import Document from 'components/Document'
import Education from 'components/Education'
import Experience from 'components/Experience'
import Skill from 'components/Skill'

Vue.use(Router)

export default new Router({
  linkExactActiveClass: 'active',
  routes: [
    {
      path: '/',
      name: 'Document',
      component: Document
    },
    {
      path: '/education',
      name: 'Education',
      component: Education
    },
    {
      path: '/experience',
      name: 'Experience',
      component: Experience
    },
    {
      path: '/skill',
      name: 'Skill',
      component: Skill
    }
  ]
})
