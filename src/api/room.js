import request from '@/utils/request'

export function getRoom() {
  return request({
    url:"/manger/room", // 获取教室接口
    method: 'get'
  })
}