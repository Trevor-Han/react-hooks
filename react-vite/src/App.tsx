import { Suspense } from 'react'
import { useRoutes } from 'react-router-dom'
import routes from '@/router'
import { ConfigProvider, theme } from 'antd'
import { useSelector } from 'react-redux'
import type { RootState } from '@/store'
import Main from '@/components/layout/Main.tsx'
import 'antd/dist/reset.css'
import '@/assets/styles/main.css'
import '@/assets/styles/responsive.css'

function App() {
  const { defaultAlgorithm, darkAlgorithm } = theme
  const { algorithm } = useSelector((state:RootState) => state.theme)

  return <div className='App'>
    <ConfigProvider theme={{ algorithm: algorithm === 'light' ? defaultAlgorithm : darkAlgorithm }}>
      <Suspense fallback='Loading...'>
        <Main>
          <div className='main'>
            {useRoutes(routes)}
          </div>
        </Main>

      </Suspense>
    </ConfigProvider>
  </div>
}

export default App

