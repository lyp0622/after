import axios from 'axios'
import { MessageBox, Message } from 'element-ui'
import store from '@/store'
import { getToken } from '@/utils/auth'

// create an axios instance
const service = axios.create({

<<<<<<< HEAD
  baseURL: 'http://169.254.126.222:7002', // url = base url + request url


=======

  baseURL: 'http://169.254.0.62:7002', // url = base url + request url
<<<<<<< HEAD
=======
  baseURL: 'http://169.254.126.222:7002', // url = base url + request url
>>>>>>> cd6470e68cca8fdc7592922dff8732b385d2901f
>>>>>>> 4e9585fc1aee57c9ac8dbd8714efc94e7f8cbba0
=======

>>>>>>> 7c65065fa6e4b89615c4667227d847709407a973
  // withCredentials: true, // send cookies when cross-domain requests
  timeout: 5000 // request timeout
})

// request interceptor
service.interceptors.request.use(
  config => {
    // do something before request is sent
    if (getToken) {
      // let each request carry token
      // ['X-Token'] is a custom headers key
      // please modify it according to the actual situation
      config.headers['authorization'] = getToken()
    }
    return config
  },
  error => {
    // do something with request error
    console.log(error) // for debug
    return Promise.reject(error)
  }
)

// response interceptor
service.interceptors.response.use(
  /**
   * If you want to get http information such as headers or status
   * Please return  response => response
  */
  /**
   * Determine the request status by custom code
   * Here is just an example
   * You can also judge the status by HTTP Status Code
   */
  response => {
    const res = response.data
    // if the custom code is not 20000, it is judged as an error.
    if (res.code !== 1) {
      Message({
        message: res.msg || 'Error',
        type: 'error',
        duration: 5 * 1000
      })

      // 50008: Illegal token; 50012: Other clients logged in; 50014: Token expired;

<<<<<<< HEAD
    


=======
<<<<<<< HEAD

=======
>>>>>>> cd6470e68cca8fdc7592922dff8732b385d2901f
>>>>>>> 4e9585fc1aee57c9ac8dbd8714efc94e7f8cbba0
=======
>>>>>>> 7c65065fa6e4b89615c4667227d847709407a973
      // if (res.code === 50008 || res.code === 50012 || res.code === 50014) {
      //   // to re-login
      //   MessageBox.confirm('You have been logged out, you can cancel to stay on this page, or log in again', 'Confirm logout', {
      //     confirmButtonText: 'Re-Login',
      //     cancelButtonText: 'Cancel',
      //     type: 'warning'
      //   }).then(() => {
      //     store.dispatch('user/resetToken').then(() => {
      //       location.reload()
      //     })
      //   })
      // }

<<<<<<< HEAD

=======
<<<<<<< HEAD

=======
>>>>>>> cd6470e68cca8fdc7592922dff8732b385d2901f
>>>>>>> 4e9585fc1aee57c9ac8dbd8714efc94e7f8cbba0
=======
>>>>>>> 7c65065fa6e4b89615c4667227d847709407a973
      // return Promise.reject(new Error(res.message || 'Error'))

      // return Promise.reject(new Error(res.message || 'Error'))

      //容错处理

      // return Promise.reject(new Error(res.message || 'Error'))

      //容错处理

<<<<<<< HEAD
      // return Promise.reject(new Error(res.message || 'Error'))

=======
>>>>>>> 4e9585fc1aee57c9ac8dbd8714efc94e7f8cbba0
      try{
        if (res.code === 50008 || res.code === 50012 || res.code === 50014) {
          // to re-login
          MessageBox.confirm('You have been logged out, you can cancel to stay on this page, or log in again', 'Confirm logout', {
            confirmButtonText: 'Re-Login',
            cancelButtonText: 'Cancel',
            type: 'warning'
          }).then(() => {
            store.dispatch('user/resetToken').then(() => {
              location.reload()
            })
          })
        }
      }catch{
        return Promise.reject(new Error(res.message || 'Error'))
      }
<<<<<<< HEAD

=======
>>>>>>> 4e9585fc1aee57c9ac8dbd8714efc94e7f8cbba0
    } else {
      return res
    }
  },
  error => {
    console.log('err' + error) // for debug
    Message({
      message: error.message,
      type: 'error',
      duration: 5 * 1000
    })
    return Promise.reject(error)
  }
)

export default service