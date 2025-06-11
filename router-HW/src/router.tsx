import type { RouteObject } from "react-router-dom";
import Home from "./pages/Home";
import { lazy, Suspense } from "react";
import spinner from './assets/spinner.svg'




const LandingPage = lazy(()=> import('./pages/LandingPage'))

const routes:RouteObject[]= [
    {
    element: <Home />,
    path:'/'
    },
    {
    element: 
    <Suspense fallback ={<img src = {spinner} alt='laoding...' />}>
     <LandingPage />
    </Suspense>,
    path: 'landing_page'
    }
    
]

export default routes