// src/App.js
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { ThemeProvider } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
import theme from './theme/theme';
import Home from './pages/Home';
import HomeDashboard from './pages/Dashboard';
import MeetingRooms from './pages/MeetingRooms';
import Layout from './pages/Layout'; // Import Layout
import AddMeetingSession  from './pages/AddMeetingSession';

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const App = () => {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Router>
        <Routes>
          {/* Wrap each route with Layout */}
          <Route path="/" element={<Layout><HomeDashboard /></Layout>} />
          <Route path="/dashboard" element={<Layout><HomeDashboard /></Layout>} />
          <Route path="/eventspage" element={<Layout><Home /></Layout>} />
          <Route path="/meeting-rooms" element={<Layout><MeetingRooms /></Layout>} />
          <Route path="/addmeeting" element={<Layout><AddMeetingSession /></Layout>} />
          
        </Routes>
      </Router>
    </ThemeProvider>
  );
};

export default App;
