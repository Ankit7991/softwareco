import React from "react"
import { AppRoutes } from './components/routes/AppRoutes'
import { ThemeProvider } from '@mui/material/styles'
import { darkTheme, lightTheme } from './utils/theme'

function App() {
  return (
    <>
      <ThemeProvider theme={true ? lightTheme : darkTheme}>
        <AppRoutes />
      </ThemeProvider>
    </>
  )
}

export default App
