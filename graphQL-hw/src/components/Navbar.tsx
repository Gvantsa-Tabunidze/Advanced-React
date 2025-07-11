import React from 'react'
import { Link, Outlet } from 'react-router-dom'
import '@fontsource/roboto/500.css';

const Navbar:React.FC = () => {
  return (
    <div>
      <ul className='navdiv' >
        <li style={{listStyle:'none'}}><Link to={'/games'}>Games</Link></li>
        <li style={{listStyle:'none'}}><Link to={'/authors'}>Authors</Link></li>
      </ul>

      <Outlet />
    </div>
  )
}

export default Navbar
