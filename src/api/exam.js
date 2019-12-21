import request from '@/utils/request'

//获取所有用户信息
export function examStudent() {
  return request({
    url: '/user/user',
    method: 'get'
  })
}

//获取身份信息
export function examIDentity() {
    return request({
        url: '/user/identity',
        method: 'get'
    })
}