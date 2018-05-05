import Vue from 'vue'
import Router from 'vue-router'
import Document from 'components/Document'
import Company from 'components/Company'
import Experience from 'components/Experience'
import Skill from 'components/Skill'

Vue.use(Router)
let router = new Router({
  linkExactActiveClass: 'active',
  routes: [
    {
      path: '/',
      name: 'Document',
      component: Document,
      meta: {
        title: '个人档案'
      }
    },
    {
      path: '/company',
      name: 'Company',
      component: Company,
      meta: {
        title: '工作经历'
      }
    },
    {
      path: '/experience',
      name: 'Experience',
      component: Experience,
      meta: {
        title: '项目经验'
      }
    },
    {
      path: '/skill',
      name: 'Skill',
      component: Skill,
      meta: {
        title: '技能评分'
      }
    }
  ]
})
router.beforeEach((to, from, next) => {
  window.document.title = to.meta.title
  next()
})
export default router
