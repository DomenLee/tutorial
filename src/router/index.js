import Vue from 'vue'
import Router from 'vue-router'
// import Home from '@/pages/Home'
import Login from '@/pages/Login'
import Exercise from '@/pages/Exercise'
import ExerciseIndex from '@/pages/exercise/Index'
import Company from '@/pages/company/CompanyView'
import CompanyHome from '@/pages/company/Home'

Vue.use(Router)

export default new Router({
  routes: [
    // {
    //   path: '/',
    //   name: 'Home',
    //   component: Home
    // },
    {
      path: '/login',
      name: 'login',
      component: Login
    },
    {
      path: '/exercise',
      name: 'exercise',
      component: Exercise,
      children: [
        {
          path: 'index',
          name: 'index',
          component: ExerciseIndex
        }
      ]
    },
    {
      path: '/company',
      component: Company,
      children: [
        {
          path: 'home',
          component: CompanyHome,
          name: 'company-home'
        }
      ]
    }
  ]
})
