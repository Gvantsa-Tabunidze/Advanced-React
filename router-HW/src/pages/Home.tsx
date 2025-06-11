import React, { lazy, Suspense } from 'react'
import { Link } from 'react-router-dom'

const Home = () => {
  return (
    <div>
    <div style= {{display:'flex', flexDirection: 'column'}}>
     <h1> Hello, its' a home page!</h1>
     <button><Link to ={'/landing_page'}>Go to comments page</Link></button>
    </div>
    </div>
  )
}

export default Home
