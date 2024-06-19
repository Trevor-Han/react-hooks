import { lazy } from 'react'
import { RouteObject } from 'react-router-dom'
const Index = lazy(() => import('../pages/home/index.tsx'))
const Text = lazy(() => import('../pages/text/index.tsx'))

const Router: RouteObject[] = [
  { path: '/', element: <Index /> },
  { path: '/text', element: <Text /> }
]

export default Router
