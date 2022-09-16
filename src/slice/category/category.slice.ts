import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import categoryApi from 'src/api/category/category.api'
// import categoryApi from 'src/api/category.api'
import LocalStorage from 'src/constants/localStorage'
import { payloadCreator } from 'src/utils/helper'

export const getCategories: any = createAsyncThunk(
  'category/getCategories',
  payloadCreator(categoryApi.getCategories)
)

// xử lý khi dùng useSelector
const category = createSlice({
  name: 'category',
  initialState: {
    categories: []
    // //
    // profile: JSON.parse(localStorage.getItem(LocalStorage.product)) || {}
  },
  extraReducers: {
    [getCategories.fulfilled]: (
      state: { categories: any },
      action: { payload: { data: any } }
    ) => {
      state.categories = action.payload.data

      // // Lưu vào trong LocalStorage
      // localStorage.setItem(LocalStorage.product, JSON.stringify(state.products))
      // // xóa
      // localStorage.removeItem(LocalStorage.product)
    }
  },
  reducers: {}
})
const categoryReducer = category.reducer
export default categoryReducer
