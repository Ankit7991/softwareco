import React from 'react';
import { Drawer, List, ListItem, ListItemIcon, ListItemText } from '@mui/material';
import { Link } from 'react-router-dom';
import DashboardIcon from '@mui/icons-material/Dashboard';
import AssessmentIcon from '@mui/icons-material/Assessment';
import FolderIcon from '@mui/icons-material/Folder';


export const Sidebar = () => {
  return (
    <Drawer variant='permanent'>
      <List>
        <ListItem
          component={Link}
          to='/dashboard'
          style={{ textDecoration: 'none', color: 'inherit' }} // To ensure link styling is consistent
        >
          <ListItemIcon><DashboardIcon /></ListItemIcon>
          <ListItemText primary='Dashboard' />
        </ListItem>
        <ListItem
          component={Link}
          to='/estimations'
          style={{ textDecoration: 'none', color: 'inherit' }} // To ensure link styling is consistent
        >
          <ListItemIcon><AssessmentIcon /></ListItemIcon>
          <ListItemText primary='Estimations' />
        </ListItem>
        <ListItem
          component={Link}
          to='/projects'
          style={{ textDecoration: 'none', color: 'inherit' }} // To ensure link styling is consistent
        >
          <ListItemIcon><FolderIcon /></ListItemIcon>
          <ListItemText primary='Projects' />
        </ListItem>
      </List>
    </Drawer>
  );
};
