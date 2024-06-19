import{ lazy } from "react";
import { RouteObject } from 'react-router-dom'
const Index = lazy(() => import('../pages/home/index.tsx'))

const Router: RouteObject[] = [
    {
        path: '/',
        element: <Index />
    }
]

export default Router;
