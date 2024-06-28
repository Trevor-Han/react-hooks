import { createSlice, PayloadAction } from '@reduxjs/toolkit'

interface ThemeState { // 定义初始化状态的类型
    algorithm: string
    color: string
    keyPath: Array<string>
}
const initialState: ThemeState = { // 初始化状态
  algorithm: 'light',
  color: '#1890ff',
  keyPath: ['dashboard']
}
export const ThemeSlice = createSlice({
  name: 'theme',
  initialState,
  reducers: {
    checkTheme: (state, action: PayloadAction<string>) => {
      state.algorithm = action.payload
    },
    checkKeyPath: (state, action: PayloadAction<Array<string>>) => {
      state.keyPath = action.payload
    },
    checkColor: (state, action: PayloadAction<string>) => {
      state.color = action.payload
    }
  }
})

export const { checkTheme, checkKeyPath, checkColor } = ThemeSlice.actions
export default ThemeSlice.reducer

