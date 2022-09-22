class Path {
  home: string
  notFound: string
  product: string
  productDetail: string
  login: string
  register: string
  user: string
  cart: string
  constructor() {
    this.home = '/'
    this.login = '/login'
    this.register = '/register'
    this.user = '/user'
    this.product = '/product'
    this.productDetail = '/product/:idProduct'
    this.cart = '/cart'

    this.notFound = '*'
  }
}
export const path = new Path()
