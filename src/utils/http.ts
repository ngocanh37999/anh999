// import axios from 'axios'
// import { toast } from 'react-toastify'
// import LocalStorage from 'src/constants/localStorage'

// class Http {
//   public instance: any
//   constructor() {
//     this.instance = axios.create({
//       baseURL: 'https://api-ecom.duthanhduoc.com/',
//       timeout: 10000,
//       headers: {
//         'Content-Type': 'application/json'
//       }
//     })
//     this.instance.interceptors.response.use(
//       (response: { data: any; status: any }) => {
//         const result = { ...response.data, status: response.status }
//         return result
//       },
//       (response: { data: any; status: any }) => {
//         if (response.status === 401) {
//           toast.error(response.data.message, {
//             position: 'top-center',
//             autoClose: 3000
//           })
//         }
//         const result = { ...response.data, status: response.status }
//         return Promise.reject(result)
//       }
//     )
//     this.instance.interceptors.request.use(
//       (config: { headers: { authorization: string } }) => {
//         const accessToken = localStorage.getItem(LocalStorage.accessToken)
//         if (accessToken) {
//           config.headers.authorization = accessToken
//         }
//         return config
//       },
//       (error: { response: any }) => {
//         return Promise.reject(error.response)
//       }
//     )
//   }
//   get(url: any, config = null) {
//     return this.instance.get(url, config)
//   }
//   post(url: any, data: any, config = null) {
//     return this.instance.post(url, data, config)
//   }
//   put(url: any, data: any, config = null) {
//     return this.instance.put(url, data, config)
//   }
//   delete(url: any, data: any, config: any) {
//     return this.instance.delete(url, {
//       data,
//       ...config
//     })
//   }
// }

// const http = new Http()
// export default http

//
//
//
//
import axios, { AxiosInstance } from 'axios'
import { toast } from 'react-toastify'
import LocalStorage from 'src/constants/localStorage'

class Http {
  private instance: AxiosInstance

  constructor() {
    this.instance = axios.create({
      baseURL: process.env.REACT_APP_API,
      timeout: 10000,
      headers: {
        'Content-Type': 'application/json'
      }
    })
    this.instance.interceptors.response.use(
      response => {
        const result = { ...response.data, status: response.status }
        return result
      },
      ({ response }) => {
        if (response.status === 401) {
          toast.error(response.data.message, {
            position: 'top-center',
            autoClose: 3000
          })
        }
        const result = { ...response.data, status: response.status }
        return Promise.reject(result)
      }
    )
    this.instance.interceptors.request.use(
      (config: any) => {
        const accessToken = localStorage.getItem(LocalStorage.accessToken)
        if (accessToken) {
          config.headers.authorization = accessToken
        }
        return config
      },
      error => {
        return Promise.reject(error.response)
      }
    )
  }

  get<ResponseType>(url: string, config?: any) {
    return this.instance.get<ResponseType>(url, config)
  }

  post<ResponseType, DataType>(url: string, data?: DataType, config?: any) {
    return this.instance.post<ResponseType, DataType>(url, data, config)
  }

  put<ResponseType, DataType>(url: string, data?: DataType, config?: any) {
    return this.instance.put<ResponseType, DataType>(url, data, config)
  }

  delete<ResponseType, DataType>(url: string, data?: DataType, config?: any) {
    return this.instance.delete<ResponseType, DataType>(url, {
      data,
      ...config
    })
  }
}

const http = new Http()
export default http
