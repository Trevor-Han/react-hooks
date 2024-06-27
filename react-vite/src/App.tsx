import { Suspense, useState } from 'react'
import { useRoutes } from 'react-router-dom'
import routes from '@/router'
import { MoonOutlined } from '@ant-design/icons'
import { ConfigProvider, theme, Button, Tooltip } from 'antd'
import 'antd/dist/reset.css'
import '@/assets/styles/main.css'
import '@/assets/styles/responsive.css'

function App() {
  const { defaultAlgorithm, darkAlgorithm } = theme
  const [configTheme, setConfigTheme] = useState('light')
  const [isClick, setIsClick] = useState(true)

  const handleCheckTheme = ():void => {
    setIsClick(!isClick)
    document.documentElement.dataset.theme = isClick ? 'dark' : 'light'
    setConfigTheme(document.documentElement.dataset.theme)
  }
  return <div className='App'>
    <ConfigProvider theme={{ algorithm: configTheme === 'light' ? defaultAlgorithm : darkAlgorithm }}>
      <Tooltip title={configTheme === 'light' ? '黑暗主题' : '白昼主题'} placement='left'>
        <Button type='default' icon={<MoonOutlined />} shape='circle' className='fixed-button' onClick={handleCheckTheme}></Button>
      </Tooltip>
      <Suspense fallback='Loading...'>
        <div className='main'>
          {useRoutes(routes)}
        </div>
      </Suspense>
    </ConfigProvider>
  </div>
}

export default App

