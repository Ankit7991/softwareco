import React from 'react'
import { Navigate, useNavigate } from 'react-router-dom'
import { useSelector } from 'react-redux'
import { RootState } from '../../store/store'

export const Login = () => {
  const navigate = useNavigate();
  const token = useSelector((s: RootState) => s.auth.token)


  if (token) {
    // return <Navigate to='/dashboard' />
  }
  return (
    <div>Login : {`${token}`}</div>
  )
}
