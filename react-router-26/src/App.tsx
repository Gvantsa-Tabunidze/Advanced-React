import { createBrowserRouter, createRoutesFromElements, Route, RouterProvider, Routes } from 'react-router-dom'
import './App.css'
import Home from './pages/Home'
import About from './pages/About'
import Contacts from './pages/Contacts'
import  SingleCountry, { SingleCountryLoader } from './pages/SingleCountry'
import Countries, { loader } from './pages/Countries'
import CountriesLayout from './Layouts/CountriesLayout'
import ErrorPage from './pages/ErrorPage'
import  { action } from './components/FormComponent'



const routes = createBrowserRouter(
  createRoutesFromElements(
    <Route element={<CountriesLayout />}>
      <Route path = '/' element={<Home />} action={action}/>
      <Route path = 'about' element={<About />}/>
      <Route path = 'contacts' element={<Contacts />}/>

      <Route path='/countries'>
        <Route index element={<Countries />} loader={loader}/>
        <Route  path=':country' element={<SingleCountry />} loader={SingleCountryLoader} />
      </Route>

      <Route path='*' element={<ErrorPage />}/>
    </Route>
  )
)


function App() {
  return (
    <RouterProvider router={routes} />
  )
}

export default App
