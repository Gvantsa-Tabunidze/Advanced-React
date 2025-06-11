import React from 'react'
import { Link } from 'react-router-dom'
import FormPage from '../components/FormComponent'

const Home = () => {
  return (
    <div>
      <h1>Hey, its' a home page</h1>
      <button style={{marginBottom:'48px'}}><Link to={'/countries'}>All countries</Link></button>
      <FormPage />
    </div>
  )
}

export default Home
