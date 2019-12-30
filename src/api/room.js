import request from '@/utils/request'

export function getRoom() {
  return request({
    url:"/manger/room", // 获取教室接口
    method: 'get'
  })
}


export function getDetail(data) {
  return request({
    url:"/manger/room/delete", // 删除教室接口
    method: 'DELETE',
    data 
  })
}
export function createRoom(data) {
  return request({
    url:"/manger/room", // 增教室接口
    method: 'POST',
    data 
  })
}