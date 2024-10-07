import { Box, Grid, Paper, Typography } from '@mui/material'
import React from 'react'

export const Dashboard = () => {
  return (
    <Box sx={{flexGrow: 1, p: 3}}>
      <Grid container spacing={2}>
        <Grid item xs={12} container spacing={2} sx={{mb: 2}}>
          <Grid item xs={8}>
            <Paper sx={{p: 2, height: '100%'}}>
              <Typography>Section 1</Typography>
            </Paper>
          </Grid>
        </Grid>
      </Grid>
    </Box>
  )
}
