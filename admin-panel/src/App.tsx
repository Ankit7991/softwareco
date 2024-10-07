import React from "react"
import { AppRoutes } from './components/routes/AppRoutes'
import { ThemeProvider } from '@mui/material/styles'
import { darkTheme, lightTheme } from './utils/theme'
import DashboardLayoutBasic from "./components/Test"

function App() {
  return (
    <>
      <ThemeProvider theme={true ? lightTheme : darkTheme}>
        <AppRoutes />
        {/* <DashboardLayoutBasic /> */}
      </ThemeProvider>
    </>
  )
}

export default App
