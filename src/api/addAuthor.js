import request from '@/utils/request'

//添加身份
export function addAuthor(params) {
    return request({
      url: '/user/identity/edit',
      method: 'get',
      params
    })
}

//添加用户
export function addYongHu(data){
    return request({
        url: '/user',
        method: 'post',
        data
    })
}

//添加api接口权限
export function authorityApi(params){
    return request({
        url: '/user/authorityApi/edit',
        method: 'get',
        params
    })
}

//添加视图权限
export function authorityView(params){
    return request({
        url: '/user/authorityView/edit',
        method: 'get',
        params
    })
}

//给身份设定api接口权限
export function setIdentityApi(data){
    return request({
        url: '/user/setIdentityApi',
        method: 'post',
        data
    })
}

//给身份设定视图权限
export function setIdentityView(data){
    return request({
        url: '/user/setIdentityView',
        method: 'post',
        data
    })
}

//更新用户/user/user
export function userNew(params){
    return request({
        url: '/user/user',
        method: 'put',
        params
    })
}