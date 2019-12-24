import request from '@/utils/request'
<<<<<<< HEAD
<<<<<<< HEAD

=======
<<<<<<< HEAD

=======
>>>>>>> cd6470e68cca8fdc7592922dff8732b385d2901f
>>>>>>> 4e9585fc1aee57c9ac8dbd8714efc94e7f8cbba0
=======
>>>>>>> 7c65065fa6e4b89615c4667227d847709407a973
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
  
<<<<<<< HEAD

=======
<<<<<<< HEAD
<<<<<<< HEAD
  
=======
<<<<<<< HEAD
=======
>>>>>>> 7c65065fa6e4b89615c4667227d847709407a973
  export function gaiType() {
    return request({
      url: '/exam/questions/condition',
      method: 'get',
    })
  }
 
  //添加类型
  export function addType(data) {
    console.log(data)
<<<<<<< HEAD
=======
>>>>>>> 4e9585fc1aee57c9ac8dbd8714efc94e7f8cbba0
>>>>>>> 30c58b974940dbb3d043a4e18140194fd0e60d0e
//   //添加类型
//   export function addType() {
//     return request({
//       url: '/exam/insertQuestionsType',
//       method: 'get',
//     })
//   }
<<<<<<< HEAD
=======

//获取所有用户信息
export function examStudent() {
  return request({
    url: '/user/user',
    method: 'get'
  })
}

//获取身份信息
export function examIDentity() {
>>>>>>> cd6470e68cca8fdc7592922dff8732b385d2901f
=======
>>>>>>> 7c65065fa6e4b89615c4667227d847709407a973
    return request({
      url: '/exam/questions',
      method: 'post',
      data
    })
  }

    //添加试题类型
    export function stType(data) {
      console.log(data)
      return request({
        url: '/exam/insertQuestionsType',
        method: 'get',
        params:data
      }).then(res=>{
        console.log(res)
      })
    }
    //获取所有的试题类型
    export function getType() {
      return request({
        url: '/exam/getQuestionsType',
        method: 'get',
      })
    }

    //删除指定的试题类型
    export function remType(id) {
      return request({
        url: `/exam/delQuestionsType/${id}`,
        method: 'post',
      })
    }
    
    //按条件获取试题
    export function includesType(data) {
      return request({
        url: '/exam/questions/condition',
        method: 'get',
        params:data
      })
    }
    
<<<<<<< HEAD
=======
}
>>>>>>> cd6470e68cca8fdc7592922dff8732b385d2901f
>>>>>>> 4e9585fc1aee57c9ac8dbd8714efc94e7f8cbba0
=======
>>>>>>> 7c65065fa6e4b89615c4667227d847709407a973
