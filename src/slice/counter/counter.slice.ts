import { createSlice, PayloadAction } from '@reduxjs/toolkit'

export type CounterState = {
  count: number
}

const initialState: CounterState = {
  count: 0
}
const counterSlice = createSlice({
  name: 'counter',
  initialState: initialState,
  reducers: {
    increase: (state, action: PayloadAction<number | undefined>) => {
      state.count = state.count + 1
    },
    decrease: (state, action: PayloadAction<number | undefined>) => {
      state.count = state.count - 1
    }
  }
})

const counterReducer = counterSlice.reducer
export default counterReducer

export const increase = counterSlice.actions.increase
export const decrease = counterSlice.actions.decrease
