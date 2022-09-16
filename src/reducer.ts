import appReducer from './app.slice'
import authReducer from './slice/auth.slice'
import categoryReducer from './slice/category/category.slice'
import counterReducer from './slice/counter/counter.slice'
import productReducer from './slice/product/product.slice'
import profileReducer from './slice/profile/profile.slice'
import cartReducer from './slice/purchase/purchase.slice'
const rootReducer = {
  auth: authReducer,
  app: appReducer,
  product: productReducer,
  category: categoryReducer,
  cart: cartReducer,

  // hôm nay ngày 12 tháng 9 năm 2022
  counter: counterReducer,
  profile: profileReducer
}
export default rootReducer
