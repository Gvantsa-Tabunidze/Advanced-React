import React from 'react'
import { Link } from 'react-router-dom'

const Navbar:React.FC = () => {
  return (
    <nav>
        <li style={{listStyle:'none'}}><Link to={'/breeds'}>Dogs</Link></li>
        <li style={{listStyle:'none'}}><Link to={'/'}>Home</Link></li>
    </nav>
  )
}

export default Navbar
