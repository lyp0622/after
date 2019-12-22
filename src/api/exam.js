import request from '@/utils/request'
  //考试类型
  export function examType() {
    return request({
      url: '/exam/examType',
      method: 'get',
    })
  }
  //课程类型
  export function keType() {
    return request({
      url: '/exam/subject',
      method: 'get',
    })
  }

  //题目类型
  export function tiType() {
    return request({
      url: '/exam/getQuestionsType',
      method: 'get',
    })
  }
  
  
//   //添加类型
//   export function addType() {
//     return request({
//       url: '/exam/insertQuestionsType',
//       method: 'get',
//     })
//   }

