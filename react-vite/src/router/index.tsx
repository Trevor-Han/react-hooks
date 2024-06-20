import { lazy } from 'react'
import { RouteObject } from 'react-router-dom'
const Index = lazy(() => import('../pages/home/index.tsx'))
const Text = lazy(() => import('../pages/text/index.tsx'))
import ErrorBoundary from '@/components/ErrorBoundary'
import NotFound from '@/components/NotFound'

const Router: RouteObject[] = [
  /* {
      path: '/',
      element: <Index />,
      loader:'' // 路由守卫
      errorElement: '' // 错误处理
  },*/
  { path: '/', element: <Index /> },
  { path: '/text', element: <Text />, errorElement: <ErrorBoundary /> },
  { path: '*', element: <NotFound /> }
]

export default Router
