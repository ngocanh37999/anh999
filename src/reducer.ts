import appReducer from './app.slice'
import authReducer from './slice/auth/auth.slice'
import cartReducer from './slice/cart/cart.slice'
import categoryReducer from './slice/category/category.slice'
import productReducer from './slice/product/product.slice'

const rootReducer = {
  auth: authReducer,
  app: appReducer,
  product: productReducer,
  category: categoryReducer,
  cart: cartReducer
}
export default rootReducer
