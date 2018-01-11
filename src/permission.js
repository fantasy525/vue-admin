import router from './router'
import store from './store'
import NProgress from 'nprogress' // Progress 进度条
import 'nprogress/nprogress.css'// Progress 进度条样式
import { getToken } from '@/utils/auth' // 验权

const whiteList = ['/login'] //保存不需要登录的路由地址
router.beforeEach((to, from, next) => {
  NProgress.start()
  if (getToken()) { // 如果已经登录即getToken返回了从后台拿到的token,
    if (to.path === '/login') {
      next({ path: '/' })
    } //如果登录了，但是是去login页面，则禁止去登录页，跳到首页
    else {
      if (store.getters.roles.length === 0) { // 如果登录了，但是获取用户的角色，则需要重新获取用户角色
        store.dispatch('GetInfo').then(res => { // 获取用户的角色
          const roles = res.data.role
          // 这里是数组的结构赋值，参见http://es6.ruanyifeng.com/#docs/destructuring
          store.dispatch('GenerateRoutes', { roles }).then(() => { // 获取角色后根绝角色去筛选路由，最后产生新的路由挂在为完整的路由表
            router.addRoutes(store.getters.addRouters)
            next({ ...to })
          })
        })
      }
      else {
        next()
      }
    }
  }
  else {// 如果没有登录
    if (whiteList.indexOf(to.path) !== -1) { // 如果未登录并且，该路由不需要登录，
      next()
    } else {// 如果未登录，并且该路由需要登录
      next('/login')
      NProgress.done()
    }
  }
})

router.afterEach(() => {
  NProgress.done() // 结束Progress
})
