import { lazy } from 'react'
const Three = lazy(() => import('../pages/three/ThreeContainer.tsx'))
const SignIn = lazy(() => import('../pages/SignIn/index.tsx'))

const fullSceneRouter = [

  { path: '/three', element: <Three/>, key: 'three' },
  { path: '/sign-in', element: <SignIn />, auth: true, name: 'signIn' }

]
export default fullSceneRouter
