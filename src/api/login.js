import fetch from '@/utils/fetch'

export function login(username, password) {
  return fetch.post({
    url: '/user/login',
    data: {
      username,
      password
    }
  })
}

export function getInfo(token) {
  return fetch.get({
    url: '/user/info',
    params: { token }
  })
}

export function logout() {
  return fetch.post({
    url: '/user/logout',
    data:{}
  })
}
