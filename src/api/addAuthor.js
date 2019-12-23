import request from '@/utils/request'

//添加身份
export function addAuthor(identity_text) {
    return request({
      url: '/user/identity/edit',
      method: 'get',
      params: {identity_text}
    })
}

//添加用户
export function addYongHu(user_name,user_pwd,identity_id){
    return request({
        url: '/user',
        method: 'post',
        params:{ user_name,user_pwd,identity_id }
    })
}