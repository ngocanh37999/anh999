import { configureStore } from '@reduxjs/toolkit'
import rootReducer from './reducer'
const store = configureStore({
  reducer: rootReducer,
  devTools: process.env.NODE_ENV === 'development',
  middleware: getDefaultMiddleware => [
    ...getDefaultMiddleware({ serializableCheck: false })
  ]
})

// useSelector vaf useDispatch
export type AppDispatch = typeof store.dispatch
export type RootState = ReturnType<typeof store.getState>
export default store
