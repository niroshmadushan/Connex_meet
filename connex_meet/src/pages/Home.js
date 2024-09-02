// src/pages/Home.js
import React from 'react';
import {
  AppBar,
  Box,
  BottomNavigation,
  BottomNavigationAction,
  Toolbar,
  Typography,
  Container,
} from '@mui/material';
import ChatIcon from '@mui/icons-material/Chat';
import CallIcon from '@mui/icons-material/Call';
import SettingsIcon from '@mui/icons-material/Settings';
import UpdateIcon from '@mui/icons-material/Update';
import { styled } from '@mui/system';

const FooterNavigation = styled(BottomNavigation)({
  borderRadius: '16px 16px 0 0',
  boxShadow: '0 -2px 10px rgba(0,0,0,0.1)',
  paddingBottom: '8px',
  backgroundColor: '#ffffff',
});

const Home = () => {
  const [value, setValue] = React.useState(0);

  return (
    <Box sx={{ display: 'flex', flexDirection: 'column', height: '100vh', bgcolor: '#f5f5f5' }}>
      {/* Header Section */}
      <AppBar position="static" sx={{ background: 'linear-gradient(45deg, #3f51b5 30%, #1a237e 90%)' }}>
        <Toolbar>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1, color: '#fff', fontWeight: 'bold' }}>
            Visitor Management
          </Typography>
        </Toolbar>
      </AppBar>

      {/* Content Section */}
      <Container sx={{ flexGrow: 1, padding: 2, overflowY: 'auto' }}>
        {/* Placeholder content, replace with actual components */}
        <Typography variant="body1" sx={{ mt: 2, color: '#333', fontSize: '1.1rem' }}>
          Welcome to the Visitor Management System! Here you can manage your visitors efficiently.
        </Typography>
      </Container>

      {/* Footer Section */}
      <FooterNavigation
        value={value}
        onChange={(event, newValue) => {
          setValue(newValue);
        }}
        showLabels
      >
        <BottomNavigationAction
          label="Chats"
          icon={<ChatIcon sx={{ color: value === 0 ? '#3f51b5' : '#757575' }} />}
        />
        <BottomNavigationAction
          label="Calls"
          icon={<CallIcon sx={{ color: value === 1 ? '#3f51b5' : '#757575' }} />}
        />
        <BottomNavigationAction
          label="Updates"
          icon={<UpdateIcon sx={{ color: value === 2 ? '#3f51b5' : '#757575' }} />}
        />
        <BottomNavigationAction
          label="Settings"
          icon={<SettingsIcon sx={{ color: value === 3 ? '#3f51b5' : '#757575' }} />}
        />
      </FooterNavigation>
    </Box>
  );
};

export default Home;
