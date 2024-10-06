import React from 'react'
import { Header } from '../sections/Header'
import { Sidebar } from '../sections/Sidebar'
import { Outlet } from 'react-router-dom'
import { Box } from '@mui/material'

export const DashboardOutlet = () => {
  return (
    <>
      {/* <div className="">
        <Sidebar />
        <div className="">
          <Header />
          <Outlet />
        </div>
      </div> */}
      <Box sx={{display: 'flex'}}>
        <Sidebar />
        <Header />
      </Box>
    </>
  )
}
