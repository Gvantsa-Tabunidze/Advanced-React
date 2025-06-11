import {NavLink, Outlet } from 'react-router-dom'

const CountriesLayout = () => {
  return (
    <>
    <div style={{display:'flex', flexDirection:'column'}}>
    <nav style={{display:'flex', flexDirection:'row', listStyle:'none', gap:'24px'}}>
        <li><NavLink to={'/'}>Home</NavLink></li>
        <li><NavLink to={'about'}>About</NavLink></li>
        <li><NavLink to={'contacts'}>Contacts</NavLink></li>
    </nav>

    </div>
    <Outlet />
    </>
  )
}

export default CountriesLayout
