import React from 'react'
import { Route, Routes} from 'react-router-dom'
import Home from '../pages/Home'
import About from '../pages/About'
import Contact from '../pages/Contact'
import { routes } from './routes'
import MUINavbar from '../components/navbar/MUINavbar'
import Login from '../pages/Login'
import Register from '../pages/Register'
import Users from '../pages/Users'
import ProtectedRoutes from './ProtectedRoutes'
import Products from '../pages/Products'

const Router:React.FC = () => {
  return (
   <Routes>
      <Route path='/' element={<MUINavbar routes={routes} isVertical={false}/>}>
        <Route index element={<Home />} />
        <Route path='/about' element={<About />} />
        <Route path='/contacts' element={<Contact />} />
        <Route path='/users' element={<Users />} />
      </Route>

      <Route>
         <Route path='login' element={<Login />} />
         <Route path='register' element={<Register />}></Route>
      </Route>

      <Route element ={<ProtectedRoutes/>}>
          <Route path='/products' element={<Products/>} />
      </Route>
     
   </Routes>
  )
}

export default Router
