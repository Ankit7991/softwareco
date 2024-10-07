// import React from 'react'
// import { Header } from '../sections/Header'
// import { Sidebar } from '../sections/Sidebar'
// import { Outlet } from 'react-router-dom'
// import { Box } from '@mui/material'
// import Toolbar from '@mui/material/Toolbar'
// import abc from '@toolpad'


// const drawer_width = 250
// export const DashboardOutlet = () => {
//   return (
//     <>
//       {/* <div className="">
//         <Sidebar />
//         <div className="">
//           <Header />
//           <Outlet />
//         </div>
//       </div> */}
//       <Box sx={{display: 'flex'}}>
//         <Sidebar />
//         <div>
//           <h1>HI</h1>
//           <Header />
//           <Box>
//             <Toolbar />
//             <Outlet />
//           </Box>
//         </div>
//       </Box>
//     </>
//   )
// }



import * as React from 'react';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import { createTheme } from '@mui/material/styles';
import DashboardIcon from '@mui/icons-material/Dashboard';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import BarChartIcon from '@mui/icons-material/BarChart';
import DescriptionIcon from '@mui/icons-material/Description';
import LayersIcon from '@mui/icons-material/Layers';
import { AppProvider } from '@toolpad/core/AppProvider';
import { DashboardLayout } from '@toolpad/core/DashboardLayout';
import type { Router, Navigation } from '@toolpad/core';
import { Navigate, Outlet } from 'react-router-dom';
import { lightTheme } from '../../utils/theme';

const NAVIGATION: Navigation = [
  {
    kind: 'header',
    title: 'Main items',
  },
  {
    segment: 'dashboard',
    title: 'Dashboard',
    icon: <DashboardIcon />,
  },
  {
    segment: 'projects',
    title: 'Project',
    icon: <LayersIcon />,
    children: [
      {
        segment: 'project/create',
        title: 'Create Project',
        icon: <DescriptionIcon />,
      },
      {
        segment: 'project/view',
        title: 'View Projects',
        icon: <DescriptionIcon />,
      },
      {
        segment: 'project/filter',
        title: 'Filter Projects',
        icon: <DescriptionIcon />,
      },
    ],
  },
  {
    kind: 'divider',
  },
  {
    kind: 'header',
    title: 'Estimation',
  },
  {
    segment: 'estimation',
    title: 'Estimation',
    icon: <BarChartIcon />,
    children: [
      {
        segment: 'estimation/create',
        title: 'Create Estimation',
        icon: <DescriptionIcon />,
      },
      {
        segment: 'estimation/view',
        title: 'View Estimations',
        icon: <DescriptionIcon />,
      },
      {
        segment: 'estimation/filter',
        title: 'Filter Estimations',
        icon: <DescriptionIcon />,
      },
    ],
  },
];


export const DashboardOutlet = () => {
  const [pathname, setPathname] = React.useState('/dashboard');

  const router = React.useMemo<Router>(() => {
    return {
      pathname,
      searchParams: new URLSearchParams(),
      navigate: (path) => setPathname(String(path)),
    };
  }, [pathname]);


  return (
    <AppProvider
      navigation={NAVIGATION}
      router={router}
      theme={lightTheme}
      branding={{
        title: 'UKT PMS'
      }}
    >
      <DashboardLayout>
        <Outlet />
      </DashboardLayout>
    </AppProvider>
  );
}
