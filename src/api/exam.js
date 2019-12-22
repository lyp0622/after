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
  
  export function gaiType() {
    return request({
      url: '/exam/questions/condition',
      method: 'get',
    })
  }
 
  //添加类型
  export function addType(data) {
    console.log(data)
    return request({
      url: '/exam/questions',
      method: 'post',
      data
    })
  }

    //添加试题类型
    export function stType(data) {
      return request({
        url: '/exam/insertQuestionsType',
        method: 'get',
        data
      })
    }
