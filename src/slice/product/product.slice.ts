import { AsyncThunk, createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import productApi from 'src/api/product/product.api'
// import productApi from 'src/api/product.api'
import LocalStorage from 'src/constants/localStorage'
import { payloadCreator } from 'src/utils/helper'

// export const getProducts = createAsyncThunk(
//   'product/getProducts',
//   payloadCreator(productApi.getProducts)
// )

// const getProducts: (arg: any) => AsyncThunkAction<any, any, {}>
// Expected 1 arguments, but got 0.ts(2554)
// createAsyncThunk.d.ts(107, 118): An argument for 'arg' was not provided.

// export const getProducts: any = createAsyncThunk(
//   'product/getProducts',
//   async (data: any, thunkAPI: any) => {
//     try {
//       const res = await productApi.getProducts(data)
//       return res
//     } catch (error) {
//       return thunkAPI.rejectWithValue(error)
//     }
//   }
// )

type getProductsType = AsyncThunk<any, any, {}>

// interface FulfilledAction<ThunkArg, PromiseResult> {
//   type: string
//   payload: PromiseResult
//   meta: {
//     requestId: string
//     arg: ThunkArg
//   }
// }
// type Fulfilled = <ThunkArg, PromiseResult>(
//   payload: PromiseResult,
//   requestId: string,
//   arg: ThunkArg
// ) => FulfilledAction<ThunkArg, PromiseResult>

export const getProducts: any = createAsyncThunk(
  'product/getProducts',
  payloadCreator(productApi.getProducts)
)

export const getProductsSearch: any = createAsyncThunk(
  'productSearch/getProductsSearch',
  payloadCreator(productApi.getProductsSearch)
)

// xử lý khi dùng useSelector
const product = createSlice({
  name: 'product',
  initialState: {
    products: [] as any

    // //
    // profile: JSON.parse(localStorage.getItem(LocalStorage.product)) || {}
  },
  extraReducers: {
    [getProducts.fulfilled]: (state: any, action: any) => {
      state.products = action.payload.data.products

      // // Lưu vào trong LocalStorage
      // localStorage.setItem(LocalStorage.product, JSON.stringify(state.products))
      // // xóa
      // localStorage.removeItem(LocalStorage.product)
    }
  },
  reducers: {}
})
const productReducer = product.reducer
export default productReducer
