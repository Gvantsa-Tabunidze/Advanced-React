import React from 'react'
import { Route, Routes} from 'react-router-dom'
import Home from '../pages/Home'
import About from '../pages/About'
import Contact from '../pages/Contact'
import Navbar from '../components/Navbar'
import { routes } from './routes'
import MUINavbar from '../components/MUINavbar'

const Router:React.FC = () => {
  return (
   <Routes>
      <Route path='/' element={<MUINavbar routes={routes} isVertical={false}/>}>
        <Route index element={<Home />} />
        <Route path='/about' element={<About />} />
        <Route path='/contacts' element={<Contact />} />
      </Route>


   </Routes>
  )
}

export default Router
