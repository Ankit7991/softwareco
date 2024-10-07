import { Box, Grid, Paper, Typography } from '@mui/material'
import React from 'react'
import DoughnutChart from '../../components/charts/DoughnutChart'
// import ProfitChart from '../../components/charts/ProfitChart'

export const Dashboard = () => {
  return (
    <Box sx={{ flexGrow: 1, p: 3 }}>
      <Grid container spacing={2}>
        <Grid item xs={12} container spacing={2} sx={{ mb: 2 }}>
          <Grid item xs={4}>
            <Paper sx={{ p: 2, height: '100%' }}>
              <Typography variant='h5'>Summary</Typography>
              <DoughnutChart />
            </Paper>
          </Grid>

          <Grid item xs={8} container>
            <Paper sx={{ p: 2, height: '100%', width: '100%' }}>
              <Typography variant='h5'>Transactions</Typography>
              {/* <Grid item xs={12}>
                <Grid xs={4}>
                  <Typography>Profit</Typography>
                </Grid>
                <Grid xs={4}>
                  <Typography>Profit</Typography>
                </Grid>
                <Grid xs={4}>
                  <Typography>Profit</Typography>
                </Grid>
              </Grid> */}
            </Paper>
          </Grid>
        </Grid>
      </Grid>
      <Grid container spacing={2}>
        <Grid item xs={12} container spacing={2} sx={{ mb: 2, height: '300px' }}>
          <Grid item xs={4}>
            <Paper sx={{ p: 2, height: '100%' }}>
              <Typography variant='h5'>Activity Log</Typography>
            </Paper>
          </Grid>
          <Grid item xs={4}>
            <Paper sx={{ p: 2, height: '100%' }}>
              <Typography variant='h5'>Weekly Activities</Typography>
            </Paper>
          </Grid>
          <Grid item xs={4}>
            <Paper sx={{ p: 2, height: '100%' }}>
              <Typography variant='h5'>Upgrade Plan</Typography>
            </Paper>
          </Grid>
        </Grid>
      </Grid>
    </Box>
  )
}
