import { createSlice } from '@reduxjs/toolkit'
import { theme } from 'antd'

interface ThemeState { // 定义初始化状态的类型
    algorithm: typeof theme.defaultAlgorithm
}
const initialState: ThemeState = { // 初始化状态
  algorithm: theme.defaultAlgorithm
}
export const ThemeSlice = createSlice({
  name: 'theme',
  initialState,
  reducers: {}
})

export default ThemeSlice.reducer

