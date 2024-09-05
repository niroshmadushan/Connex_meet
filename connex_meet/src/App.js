// src/App.js
import React from 'react';
import { BrowserRouter as Router, Routes, Route, useNavigate } from 'react-router-dom';
import { ThemeProvider } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
import theme from './theme/theme';
import Home from './pages/Home';
import HomeDashboard from './pages/Dashboard';
import MeetingRooms from './pages/MeetingRooms';
import AddMeeting from './pages/AddMeetingSession';
import Layout from './pages/Layout'; // Import Layout
import AddMeetingSession from './pages/AddMeetingSession';
import Profile from './pages/Profile';
import Login from './pages/Login';
import Register from './pages/RegistrationPage'
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const App = () => {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Router>
        <Routes>
          {/* Wrap each route with Layout */}
          <Route path="/" element={<Login />} />
          <Route path="/dash" element={<Layout><HomeDashboard /></Layout>} />
          <Route path="/eventspage" element={<Layout><Home /></Layout>} />
          <Route path="/meeting-rooms" element={<Layout><MeetingRooms /></Layout>} />
          <Route path="/addmeeting" element={<Layout><AddMeetingSession /></Layout>} />
          <Route path="/profile" element={<Layout><Profile /></Layout>} />
          <Route path="/register" element={<Register />} />
         
        </Routes>
      </Router>
    </ThemeProvider>
  );
};

export default App;
