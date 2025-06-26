import React from 'react'
import { Route, Routes} from 'react-router-dom'
import Home from '../pages/Home'
import About from '../pages/About'
import Contact from '../pages/Contact'
import { routes } from './routes'
import MUINavbar from '../components/navbar/MUINavbar'
import Login from '../pages/Login'
import Register from '../pages/Register'

const Router:React.FC = () => {
  return (
   <Routes>
      <Route path='/' element={<MUINavbar routes={routes} isVertical={false}/>}>
        <Route index element={<Home />} />
        <Route path='/about' element={<About />} />
        <Route path='/contacts' element={<Contact />} />
      </Route>

      <Route>
         <Route path='login' element={<Login />} />
         <Route path='register' element={<Register />}></Route>
      </Route>
   </Routes>
  )
}

export default Router
