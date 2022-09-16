import {
  AsyncThunk,
  createAsyncThunk,
  createSlice,
  PayloadAction
} from '@reduxjs/toolkit'
import { number, string } from 'prop-types'
import { getUserApi, GetUserApiType } from 'src/api/profile/profile.api'

type ProfileState = {
  // profile: {
  //   name?: string
  //   age?: number
  // }
  profile: {
    name?: string
    age?: number
  }
  error?: null
}

// type GetUser = AsyncThunk<
//   {
//     name: string
//     age: number
//   },
//   void,
//   {}
// >

// type GetUser = {
//   // data: {
//   //   name: string
//   //   age: number
//   // }
//   // data: {
//   //   name: string
//   //   age: number
//   // }
//   // status: number
//   // params?: {}
//   // thunkAPI: any
//   // error: null
//   // state: {
//   //   profile: {
//   //     data: {
//   //       name: string
//   //       age: number
//   //     }
//   //   }
//   //   error: null | undefined
//   // }
//   // profile: {
//   //   name?: string
//   //   age?: number
//   // }
//   // error: null | any
// }

// interface MyKnownError {
//   errorMessage?: string | undefined
// }

// interface MyData {
//   data: {
//     name: string
//     age: number
//   }
//   // ...
// }
// interface UserAttributes {
//   name: string
//   age: number
// }

export const getUser = createAsyncThunk(
  'profile/getUser',
  async (params, thunkAPI) => {
    try {
      const response = await getUserApi()
      return response
    } catch (error) {
      return thunkAPI.rejectWithValue(error)
    }
  }
) as any

const initialState: ProfileState = {
  profile: {},
  error: null
}

// const profileSlice = createSlice({
//   name: 'profile',
//   initialState: initialState,
//   extraReducers: {
//     // [getUser.fulfilled.toString()]: (
//     //   state,
//     //   action: PayloadAction<string | number | undefined | any>
//     // ) => {
//     //   state.profile = action.payload
//     // }
//     [getUser.fulfilled]: (state, action) => {
//       state.profile = action.payload
//     }
//   },
//   reducers: {}
// })

// Cách 2: dùng builder callback
const profileSlice = createSlice({
  name: 'profile',
  initialState: initialState,
  extraReducers: builder => {
    builder
      .addCase(getUser.fulfilled, (state, action) => {
        state.profile = action.payload.data
      })
      .addCase(getUser.rejected, (state, action) => {
        // console.log(action)
        state.error = action.payload
      })
  },
  reducers: {}
})

const profileReducer = profileSlice.reducer
export default profileReducer
