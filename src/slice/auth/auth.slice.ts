import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import authApi from 'src/api/auth/auth.api'
import LocalStorage from 'src/constants/localStorage'
import { payloadCreator } from 'src/utils/helper'

export const register: any = createAsyncThunk(
  'auth/register',
  payloadCreator(authApi.register)
)
export const login: any = createAsyncThunk(
  'auth/login',
  payloadCreator(authApi.login)
)
export const logout: any = createAsyncThunk(
  'auth/logout',
  payloadCreator(authApi.logout)
)

const handleAuthFulfilled = (state, action) => {
  const { user, access_token } = action.payload.data
  state.profile = user
  localStorage.setItem(LocalStorage.user, JSON.stringify(state.profile))
  localStorage.setItem(LocalStorage.accessToken, access_token)
}

const handleUnauth = state => {
  state.profile = {}
  localStorage.removeItem(LocalStorage.user)
  localStorage.removeItem(LocalStorage.accessToken)
}

const auth = createSlice({
  name: 'auth',
  initialState: {
    // @ts-ignore
    profile: JSON.parse(localStorage.getItem(LocalStorage.user)) || {}
  },
  reducers: {
    unauthorize: handleUnauth
  },
  extraReducers: {
    [register.fulfilled]: handleAuthFulfilled,
    [login.fulfilled]: handleAuthFulfilled,
    [logout.fulfilled]: handleUnauth
  }
})

const authReducer = auth.reducer
export const unauthorize = auth.actions.unauthorize
export default authReducer
