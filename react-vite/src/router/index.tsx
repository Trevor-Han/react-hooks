import { lazy, ReactNode } from 'react'
// import { RouteObject } from 'react-router-dom'
const Index = lazy(() => import('../pages/home/index.tsx'))
const Tables = lazy(() => import('../pages/tables/index.tsx'))
const Billing = lazy(() => import('../pages/billing/index.tsx'))
const Rtl = lazy(() => import('../pages/rtl/index.tsx'))
const Text = lazy(() => import('../pages/text/index.tsx'))
import ErrorBoundary from '@/components/ErrorBoundary'
import NotFound from '@/components/NotFound'

interface Route {
  path: string,
  name?: string,
  element: ReactNode | null,
  children?: Route[],
  errorElement?: ReactNode | null;
  auth?: boolean
}
const Router: Array<Route> = [
  /* {
      path: '/',
      element: <Index />,
      loader:'' // 路由守卫
      errorElement: '' // 错误处理
  },*/
  { path: '/', element: <Index />, auth: true, name: 'dashboard' },
  { path: '/dashboard', element: <Index />, auth: true, name: 'dashboard' },
  { path: '/tables', element: <Tables />, auth: true, name: 'tables' },
  { path: '/billing', element: <Billing />, auth: true, name: 'billing' },
  { path: '/rtl', element: <Rtl />, auth: true, name: 'rtl' },
  { path: '/text', element: <Text />, errorElement: <ErrorBoundary />, auth: true, name: 'text' },
  { path: '*', element: <NotFound />, auth: true, name: '' }
]
export default Router
