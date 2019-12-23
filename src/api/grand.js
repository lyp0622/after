import request from '@/utils/request'

export function getGrand() {
  return request({
    url:"/manger/grade", // 获取已经分配教室的班级的接口
    method: 'post', 
  })
}
