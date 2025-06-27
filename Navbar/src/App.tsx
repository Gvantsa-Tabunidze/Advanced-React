import './App.css'
import Navbar from './components/navbar/Navbar'
import { AuthProvider } from './context/auth.context'
import Router from './router/Router'



function App() {


  return (
    <>
    <AuthProvider>
      <Router />
    </AuthProvider>
    </>
  )
}

export default App
