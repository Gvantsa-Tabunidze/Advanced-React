import React from 'react'
import { Route, Routes } from 'react-router-dom'
import DogsPage from '../pages/DogsPage'
import DogPage from '../pages/DogPage'
import Home from '../pages/Home'

const AppRouter:React.FC = () => {
  return (
   <Routes>
      <Route path='/breeds'>
          <Route index element={<DogsPage/>}/>
          <Route path=':id' element={<DogPage/>}/>
      </Route>
      <Route path='/' element={<Home />}/>
   </Routes>
  )
}

export default AppRouter
