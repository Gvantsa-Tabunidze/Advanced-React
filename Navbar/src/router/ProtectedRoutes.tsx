import React from 'react'
import { Navigate, Outlet } from 'react-router-dom'

const ProtectedRoutes = () => {
  const auth = {token:false}
  return auth.token ? <Outlet /> : <Navigate to={'/'} />
}

export default ProtectedRoutes
