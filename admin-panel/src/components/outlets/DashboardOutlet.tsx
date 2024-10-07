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
import { useNavigate, Outlet } from 'react-router-dom';
import { lightTheme } from '../../utils/theme';
import { Button } from '@mui/material';
import { HeaderItems } from '../sections/HeaderItems';

const NAVIGATION: Navigation = [
  {
    kind: 'header',
    title: 'Main items',
  },
  {
    segment: 'dashboard',
    title: 'Dashboard',
    icon: <DashboardIcon />,
    pattern: '/dashboard',
  },
  {
    segment: 'projects',
    title: 'Project',
    icon: <LayersIcon />,
    children: [
      {
        segment: 'view',
        title: 'View Projects',
        icon: <DescriptionIcon />,
        pattern: '/projects/view',
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
    segment: 'estimations',
    title: 'Estimation',
    icon: <BarChartIcon />,
    children: [
      {
        segment: 'view',
        title: 'View Estimations',
        icon: <DescriptionIcon />,
        pattern: '/estimation/view', 
      },
    ],
  },
];





export const DashboardOutlet = () => {
  const [pathname, setPathname] = React.useState('/dashboard');
  const navigate = useNavigate();

  const router = React.useMemo<Router>(() => {
    return {
      pathname,
      searchParams: new URLSearchParams(),
      navigate: (path) => {
        setPathname(String(path));
        navigate(path);
      },
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
      <DashboardLayout slots={{
        toolbarActions: HeaderItems
      }}>
        <Outlet />
      </DashboardLayout>
    </AppProvider>
  );
}
