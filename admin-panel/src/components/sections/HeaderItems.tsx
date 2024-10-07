import { Button } from '@mui/material'
import { useDispatch } from 'react-redux'
import { RootState } from '../../store/store'
import React from 'react'
import { logout } from '../../store/slices/authSlice'


export function HeaderItems() {
  const dispatch = useDispatch()
  return (
    <>
      <Button onClick={() => dispatch(logout())} variant='contained' color='error'>Logout</Button>
    </>
  )
}