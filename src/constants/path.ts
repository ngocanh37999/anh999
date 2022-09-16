class Path {
  public home: string
  readonly notFound: string
  product: string
  productDetail: string
  constructor() {
    this.home = '/'
    this.product = '/product'
    this.productDetail = '/product/:idProduct'
    // this.product = '/product'
    // this.productSearch = '/productSearch'
    // this.productDetail = '/product/:idProduct'
    // this.test = '/test'
    // this.register = '/register'
    // this.login = '/login'
    // this.cart = '/cart'

    // this.category = '/category'
    // this.purchases = '/purchases'
    // this.putPurchases = '/putPurchases'

    // // UserController
    // this.user = '/user'
    // this.profile = '/profile'
    // this.password = '/password'
    // this.purchase = '/purchase'

    // // Test Menu
    // this.about = '/about'
    // this.analytics = '/analytics'
    // this.comment = '/comment'
    // this.productList = '/productList'

    // // Test Responsive
    // this.responsive = '/responsive'

    // this.testOne = '/testOne'

    this.notFound = '*'
  }
}
export const path = new Path()
