import request from '@/utils/request'

export function getGrand() {
  return request({
    url:"/manger/grade", // 获取已经分配教室的班级的接口
    method: 'get', 
  })
}
export function createGrand(data) {
  return request({
    url:"/manger/grade", // 添加
    method: 'post', 
    data
  })
}
export function deleteGrade(data) {
  return request({
    url:"/manger/grade/delete", // 删除
    method: 'delete', 
    data
  })
}
export function updateGrade(data) {
  return request({
    url:"/manger/grade/update", // 修改
    method: 'put', 
    data
  })
}

