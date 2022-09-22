import http from 'src/utils/http'

const URL = 'purchases'

const cartStatus = {
  inCart: -1,
  all: 0,
  waitForConfirmation: 1,
  waitForGetting: 2,
  inProgress: 3,
  delivered: 4,
  cancelled: 5
}

const cartApi = {
  addToCart(data) {
    return http.post(`${URL}/add-to-cart`, data)
  },
  getCartPurchases() {
    return http.get(URL, {
      params: {
        status: cartStatus.inCart
      }
    })
  },
  deletePurchases(data) {
    return http.delete(`${URL}`, data)
  }
}

export default cartApi
