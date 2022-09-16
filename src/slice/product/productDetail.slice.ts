import { createAsyncThunk } from '@reduxjs/toolkit'
import productApi from 'src/api/product/product.api'
import { payloadCreator } from 'src/utils/helper'

export const getProductDetail: any = createAsyncThunk(
  'productDetail/getProductDetail',
  payloadCreator(productApi.getProductDetail)
)
