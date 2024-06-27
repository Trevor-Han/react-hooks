import { configureStore } from '@reduxjs/toolkit'
import counterSlice from './festures/user.ts'
import ThemeSlice from './festures/theme.ts'

const store = configureStore({
  reducer: {
    user: counterSlice,
    theme: ThemeSlice
  }
})

export type RootState = ReturnType<typeof store.getState>
// export type AppDispatch = typeof store.dispatch;
export default store
