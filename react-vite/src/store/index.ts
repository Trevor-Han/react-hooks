import { configureStore } from '@reduxjs/toolkit'
import counterSlice from './festures/user.ts'

const store = configureStore({
  reducer: {
    user: counterSlice
  }
})

export type RootState = ReturnType<typeof store.getState>
// export type AppDispatch = typeof store.dispatch;
export default store
