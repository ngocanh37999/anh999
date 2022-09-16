import { AxiosResponse } from 'axios'
import http from 'src/utils/http'

const URL = 'categories'

const categoryApi = {
  getCategories(): Promise<AxiosResponse<any, any>> {
    return http.get(URL)
  }
}

export default categoryApi
