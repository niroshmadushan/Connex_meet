// src/pages/Home.js
import React, { useState } from 'react';
import {
  AppBar,
  Box,
  BottomNavigation,
  BottomNavigationAction,
  Toolbar,
  Typography,
  Container,
  Paper,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Modal,
  Fade,
  Backdrop,
} from '@mui/material';
import EventNoteIcon from '@mui/icons-material/EventNote';
import DashboardCustomizeIcon from '@mui/icons-material/DashboardCustomize';
import MapIcon from '@mui/icons-material/Map';
import PersonOutlineIcon from '@mui/icons-material/PersonOutline';
import { styled } from '@mui/system';
import Slider from 'react-slick';
import logo from '../img/logo.png'; // Replace with your logo path

// Custom styled BottomNavigation for iOS-inspired look
const FooterNavigation = styled(BottomNavigation)(({ theme }) => ({
  borderRadius: '16px 16px 16px 16px',
  paddingBottom: '8px',
  paddingTop: '5px',
  backgroundColor: 'rgba(255, 255, 255, 0.85)',
  boxShadow: '0 -4px 12px rgba(0,0,0,0.1)',
  width: 'calc(100% - 20px)',
  margin: '0 10px',
  position: 'fixed',
  bottom: 10,
  left: 0,
  right: 0,
  backdropFilter: 'blur(10px)',
  zIndex: 2,
  transition: 'all 0.3s ease',
}));

// Slider settings
const sliderSettings = {
  dots: true,
  infinite: true,
  speed: 500,
  slidesToShow: 1,
  slidesToScroll: 1,
  autoplay: true,
  autoplaySpeed: 3000,
  arrows: true,
};

// Sample meeting data
const meetingData = [
  { title: "Project Kickoff", date: "2024-09-10", time: "10:00 AM", location: "Conference Room A", details: "Discussion on project scope, timelines, and responsibilities." },
  { title: "Team Sync", date: "2024-09-11", time: "02:00 PM", location: "Zoom", details: "Weekly sync-up meeting to discuss ongoing tasks and blockers." },
  { title: "Client Presentation", date: "2024-09-12", time: "01:00 PM", location: "Main Hall", details: "Presentation of the project progress and next steps with the client." },
  { title: "Design Review", date: "2024-09-13", time: "11:00 AM", location: "Conference Room B", details: "Review of the design drafts and discussion on improvements." },
];

// Modal style
const modalStyle = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 400,
  bgcolor: 'background.paper',
  border: '2px solid #000',
  boxShadow: 24,
  p: 4,
  borderRadius: '8px',
};

const Home = () => {
  const [value, setValue] = useState(0);
  const [open, setOpen] = useState(false);
  const [selectedMeeting, setSelectedMeeting] = useState(null);

  const handleNavigationChange = (event, newValue) => {
    setValue(newValue);
  };

  const handleRowClick = (meeting) => {
    setSelectedMeeting(meeting);
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <Box sx={{ display: 'flex', flexDirection: 'column', height: '100vh', overflow: 'hidden', bgcolor: '#ffffff' }}>
      {/* Header Section */}
      <AppBar position="static" sx={{ background: '#ffffff', boxShadow: 'none', color: '#000000' }}>
        <Toolbar>
          <img src={logo} alt="Logo" style={{ height: '40px' }} />
        </Toolbar>
      </AppBar>

      {/* Content Section with Image Carousel */}
      <Container sx={{ flexGrow: 1, padding: 0, mt: 1, bgcolor: 'background.paper', display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
        {/* Carousel */}
        <Box sx={{ width: '90%', maxWidth: '600px', mb: 2 }}>
          <Slider {...sliderSettings}>
            <div>
              <img src="https://via.placeholder.com/600x300?text=New+Event+1" alt="New Event 1" style={{ width: '100%', borderRadius: '8px' }} />
            </div>
            <div>
              <img src="https://via.placeholder.com/600x300?text=New+Event+2" alt="New Event 2" style={{ width: '100%', borderRadius: '8px' }} />
            </div>
            <div>
              <img src="https://via.placeholder.com/600x300?text=News+Update+1" alt="News Update 1" style={{ width: '100%', borderRadius: '8px' }} />
            </div>
            <div>
              <img src="https://via.placeholder.com/600x300?text=News+Update+2" alt="News Update 2" style={{ width: '100%', borderRadius: '8px' }} />
            </div>
          </Slider>
        </Box>

        {/* Meeting Information Table */}
        <Box sx={{ width: '90%', maxWidth: '600px' }}>
          <Typography variant="h6" sx={{ mb: 2, color: '#000000', textAlign: 'center' }}>
            Upcoming Meetings
          </Typography>
          <TableContainer component={Paper} sx={{ bgcolor: '#ffffff', boxShadow: '0 0 10px rgba(0, 0, 0, 0.1)', borderRadius: '8px', overflow: 'hidden' }}>
            <Table>
              <TableHead>
                <TableRow>
                  <TableCell sx={{ color: '#000000', fontWeight: 'bold' }}>Title</TableCell>
                  <TableCell sx={{ color: '#000000', fontWeight: 'bold' }}>Date</TableCell>
                  <TableCell sx={{ color: '#000000', fontWeight: 'bold' }}>Time</TableCell>
                  <TableCell sx={{ color: '#000000', fontWeight: 'bold' }}>Location</TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {meetingData.map((meeting, index) => (
                  <TableRow
                    key={index}
                    sx={{
                      cursor: 'pointer',
                      transition: 'background-color 0.3s ease',
                      '&:hover': {
                        backgroundColor: 'rgba(0, 0, 0, 0.1)',
                      },
                    }}
                    onClick={() => handleRowClick(meeting)}
                  >
                    <TableCell sx={{ color: '#000000' }}>{meeting.title}</TableCell>
                    <TableCell sx={{ color: '#000000' }}>{meeting.date}</TableCell>
                    <TableCell sx={{ color: '#000000' }}>{meeting.time}</TableCell>
                    <TableCell sx={{ color: '#000000' }}>{meeting.location}</TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </TableContainer>
        </Box>
      </Container>

      {/* Modal for Meeting Details */}
      <Modal
        open={open}
        onClose={handleClose}
        closeAfterTransition
        BackdropComponent={Backdrop}
        BackdropProps={{ timeout: 500 }}
      >
        <Fade in={open}>
          <Box sx={modalStyle}>
            <Typography variant="h6" component="h2" sx={{ mb: 2 }}>
              {selectedMeeting?.title}
            </Typography>
            <Typography sx={{ mb: 1 }}>
              <strong>Date:</strong> {selectedMeeting?.date}
            </Typography>
            <Typography sx={{ mb: 1 }}>
              <strong>Time:</strong> {selectedMeeting?.time}
            </Typography>
            <Typography sx={{ mb: 1 }}>
              <strong>Location:</strong> {selectedMeeting?.location}
            </Typography>
            <Typography>
              <strong>Details:</strong> {selectedMeeting?.details}
            </Typography>
          </Box>
        </Fade>
      </Modal>

      {/* Footer Section */}
      <Paper
        elevation={0}
        sx={{ position: 'fixed', bottom: '0', left: 0, right: 0, background: '#ffffff', zIndex: 1, borderTop: '1px solid #000000' }}
      >
        <FooterNavigation
          value={value}
          onChange={handleNavigationChange}
          showLabels
        >
          <BottomNavigationAction
            label="Add New"
            icon={<EventNoteIcon fontSize="medium" />}
            sx={{
              minWidth: '80px',
              color: value === 0 ? '#000000' : 'text.secondary',
              '&.Mui-selected': {
                color: '#000000',
              },
              transition: 'color 0.3s ease',
            }}
          />
          <BottomNavigationAction
            label="View All"
            icon={<DashboardCustomizeIcon fontSize="medium" />}
            sx={{
              minWidth: '80px',
              color: value === 1 ? '#000000' : 'text.secondary',
              '&.Mui-selected': {
                color: '#000000',
              },
              transition: 'color 0.3s ease',
            }}
          />
          <BottomNavigationAction
            label="Meet Area"
            icon={<MapIcon fontSize="medium" />}
            sx={{
              minWidth: '80px',
              color: value === 2 ? '#000000' : 'text.secondary',
              '&.Mui-selected': {
                color: '#000000',
              },
              transition: 'color 0.3s ease',
            }}
          />
          <BottomNavigationAction
            label="Profile"
            icon={<PersonOutlineIcon fontSize="medium" />}
            sx={{
              minWidth: '80px',
              color: value === 3 ? '#000000' : 'text.secondary',
              '&.Mui-selected': {
                color: '#000000',
              },
              transition: 'color 0.3s ease',
            }}
          />
        </FooterNavigation>
      </Paper>
    </Box>
  );
};

export default Home;
