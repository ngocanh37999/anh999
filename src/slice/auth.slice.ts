import { createSlice } from '@reduxjs/toolkit'
const auth = createSlice({
  name: 'auth',
  initialState: {},
  reducers: {},
  extraReducers: {
    //// Cách 1:
    // [getRegister.fulfilled]: (state, action) => {
    //   // const { getRegister } = action.payload
    //   // state.register = getRegister
    //   //
    //   state.register = action.payload
    // }
    //// Cách 2:
    // [getRegister.fulfilled]: handleAuthFulfilled
    ///////////// chú ý: post chưa làm
    // [postRegister.fulfilled]: handleAuthFulfilled
  }
})

const authReducer = auth.reducer
export default authReducer
