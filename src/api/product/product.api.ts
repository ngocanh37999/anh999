import { AxiosResponse } from 'axios'
import http from 'src/utils/http'
// import paramsProduct from './paramsProduct'
// import { paramsProduct } from 'src/api/paramsProduct'
const URL = 'products'

// const productApi: {
//   getProducts(config: any): Promise<AxiosResponse<any, any>>;
//   getProductsSearch(config: any): Promise<AxiosResponse<any, any>>;
//   postProducts(data: any): Promise<...>;
//   deleteProducts(id: any): Promise<...>;
//   getProductDetail(id: any): Promise<...>;
//   getProductsParams(): Promise<...>;
// }

// interface productAp {
//   getProducts(config: any): Promise<AxiosResponse<any, any>>
// }

export const productApi = {
  getProducts(config: any): Promise<AxiosResponse<any, any>> {
    return http.get(URL, config)
  },
  getProductsSearch(config: any): Promise<AxiosResponse<any, any>> {
    return http.get(URL, config)
  },
  getProductDetail(id: any) {
    return http.get(`${URL}/${id}`)
  }
}
export default productApi
