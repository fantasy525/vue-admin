import { asyncRouterMap, constantRouterMap } from '@/router/index'

/**
 * 通过meta.role判断是否与当前用户权限匹配
 * @param roles
 * @param route
 */
function hasPermission(roles, route) {
  if (route.meta && route.meta.role) { // 如果该路由存在meta ，并且存在role字段则说明是需要进行筛选路由的
    return roles.some(role => route.meta.role.indexOf(role) >= 0) // some筛选roles数组中
  } else {// 否则不需要判断是否需要权限
    return true
  }
}

/**
 * 递归过滤异步路由表，返回符合用户角色权限的路由表
 * @param asyncRouterMap
 * @param roles
 */
function filterAsyncRouter(asyncRouterMap, roles) {
  const accessedRouters = asyncRouterMap.filter(route => {
    if (hasPermission(roles, route)) {
      if (route.children && route.children.length) {
        route.children = filterAsyncRouter(route.children, roles)
      }
      return true
    }
    return false
  })
  return accessedRouters
}

const permission = {
  state: {
    routers: constantRouterMap, // 保存常规路由
    addRouters: [] // 保存通过角色筛选出的路由表
  },
  mutations: {
    SET_ROUTERS: (state, routers) => {
      state.addRouters = routers
      state.routers = constantRouterMap.concat(routers) // 增加筛选过后的完整路由到路由表
    }
  },
  actions: {
    GenerateRoutes({ commit }, data) { // 根绝角色筛选出路由
      console.log(data)
      return new Promise(resolve => {
        const { roles } = data
        let accessedRouters
        if (roles.indexOf('admin') >= 0) {
          accessedRouters = asyncRouterMap
        } else {
          console.log(asyncRouterMap)
          accessedRouters = filterAsyncRouter(asyncRouterMap, roles)//拿着从后台获取的角色权限
        }
        commit('SET_ROUTERS', accessedRouters)
        resolve()
      })
    }
  }
}

export default permission
