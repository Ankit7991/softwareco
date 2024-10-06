import React from 'react'
import { Route, Routes } from 'react-router-dom'
import { Login } from '../../pages/auth/Login'
import { Dashboard } from '../../pages/dashboard/Dashboard'
import { Estimations } from '../../pages/dashboard/Estimations'
import { Projects } from '../../pages/dashboard/Projects'
import { DashboardOutlet } from '../outlets/DashboardOutlet'
import ProtectedRoute from './ProtectedRoutes'

export const AppRoutes = () => {
  return (
    <Routes>
      <Route path='/' element={<ProtectedRoute isAuthenticated={true}>
        <DashboardOutlet />
      </ProtectedRoute>}>
        <Route path='dashboard' element={<Dashboard />} />
        <Route path='estimations' element={<Estimations />} />
        <Route path='projects' element={<Projects />} />
      </Route>
      <Route path='/login' element={<Login />} />
    </Routes>
  )
}
