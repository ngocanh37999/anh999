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
