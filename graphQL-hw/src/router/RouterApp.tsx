import React from 'react'
import { Route, Routes } from 'react-router-dom'
import GamesPage from '../pages/GamesPage'
import SingleGamePage from '../pages/SingleGamePage'
import AuthorsPage from '../pages/AuthorsPage'
import Navbar from '../components/Navbar'
import SingleAuthorPage from '../pages/SingleAuthorPage'

const RouterApp:React.FC = () => {
  return (
    <Routes>
        <Route element={<Navbar />}>
            <Route path='/authors'>
                <Route index element={<AuthorsPage />}/>
                <Route path='/authors/:id' element={<SingleAuthorPage/>}/>
            </Route>


            <Route path='/games'>
                <Route index element={<GamesPage />}/>
                <Route path='/games/:id' element={<SingleGamePage />}/>
            </Route>
        </Route>
    </Routes>
  )
}

export default RouterApp
