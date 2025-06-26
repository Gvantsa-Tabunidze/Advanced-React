import React from 'react'
import type { IRoute } from '../../router/routes'
import { NavLink, Outlet} from 'react-router-dom'


interface NavbarProps {
    routes: IRoute[],
    isVertical:boolean
}


const Navbar:React.FC<NavbarProps> = ({routes, isVertical}) => {
  return (
   <>
    <nav className={`navbar ${isVertical ? 'vertical' : 'horizontal'}`}>
      {routes.map(({path,label})=>(
        <NavLink to={path}>{label}</NavLink>
      ))}
    </nav>

    <Outlet />
   </>
  )
}

export default Navbar
