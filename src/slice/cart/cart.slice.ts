import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import cartApi from 'src/api/cart/cart.api'
import { payloadCreator } from 'src/utils/helper'

export const addToCart: any = createAsyncThunk(
  'productDetail/addToCart',
  payloadCreator(cartApi.addToCart)
)

export const getCartPurchases: any = createAsyncThunk(
  'cart/getCartPurchases',
  payloadCreator(cartApi.getCartPurchases)
)

export const deletePurchases: any = createAsyncThunk(
  'cart/deletePurchases',
  payloadCreator(cartApi.deletePurchases)
)

const cart = createSlice({
  name: 'cart',
  initialState: {
    purchases: []
  },
  extraReducers: {
    [getCartPurchases.fulfilled]: (state, action) => {
      state.purchases = action.payload.data
    }
  },
  reducers: {}
})

const cartReducer = cart.reducer
export default cartReducer
