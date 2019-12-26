import request from '@/utils/request'

export function getStudent() {
  return request({
    url: '/exam/student', // 获取学生试卷列表接口
    method: 'get'
  })
}

export function deleteStudent(student_id) {
  return request({
    url: `/manger/student/${student_id}`,//更新学生信息接口
    method: 'delete'
  })
}