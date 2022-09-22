import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import productApi from 'src/api/product/product.api'

import { payloadCreator } from 'src/utils/helper'

export const getProducts: any = createAsyncThunk(
  'product/getProducts',
  payloadCreator(productApi.getProducts)
)

export const getProductsSearch: any = createAsyncThunk(
  'productSearch/getProductsSearch',
  payloadCreator(productApi.getProductsSearch)
)

const product = createSlice({
  name: 'product',
  initialState: {
    products: [] as any
  },
  extraReducers: {
    [getProducts.fulfilled]: (state: any, action: any) => {
      state.products = action.payload.data.products
    }
  },
  reducers: {}
})
const productReducer = product.reducer
export default productReducer
