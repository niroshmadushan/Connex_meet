// src/pages/AddMeetingSession.js
import React, { useState } from 'react';
import { Box, TextField, Button, Grid, Paper, Typography, MenuItem } from '@mui/material';
import { useNavigate } from 'react-router-dom';
import Swal from 'sweetalert2';  // Import SweetAlert2

const AddMeetingSession = () => {
  const [formData, setFormData] = useState({
    title: '',
    date: '',
    startTime: '',
    endTime: '',
    location: '',
    type: 'meeting', // Default type
    participants: '',
    specialNote: '',  // New field for special notes
  });

  const navigate = useNavigate();

  // Handle input changes
  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  // Handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();
    // Logic to add the meeting/session
    console.log(formData);

    // Show success alert using SweetAlert2
    Swal.fire({
      title: 'Success!',
      text: 'The meeting/session has been added successfully.',
      icon: 'success',
      confirmButtonText: 'OK',
    }).then(() => {
      // Reset the form after alert confirmation
      setFormData({
        title: '',
        date: '',
        startTime: '',
        endTime: '',
        location: '',
        type: 'meeting',
        participants: '',
        specialNote: '',  // Reset special note field
      });
      // Navigate back to the dashboard or another desired route
      navigate('/home-dashboard'); // Replace with your actual route
    });
  };

  return (
    <Box sx={{ padding: '20px' }}>
      <Typography variant="h6" sx={{ fontWeight: 'bold', marginBottom: '20px', textAlign: 'center' }}>
        Add a New Meeting or Session
      </Typography>
      <Paper elevation={3} sx={{ padding: '20px', borderRadius: '8px' }}>
        <form onSubmit={handleSubmit}>
          <Grid container spacing={2}>
            <Grid item xs={12}>
              <TextField
                fullWidth
                label="Title"
                name="title"
                value={formData.title}
                onChange={handleChange}
                required
              />
            </Grid>
            <Grid item xs={12} sm={6}>
              <TextField
                fullWidth
                label="Date"
                name="date"
                type="date"
                value={formData.date}
                onChange={handleChange}
                InputLabelProps={{
                  shrink: true,
                }}
                required
              />
            </Grid>
            <Grid item xs={12} sm={6}>
              <TextField
                fullWidth
                label="Start Time"
                name="startTime"
                type="time"
                value={formData.startTime}
                onChange={handleChange}
                InputLabelProps={{
                  shrink: true,
                }}
                required
              />
            </Grid>
            <Grid item xs={12} sm={6}>
              <TextField
                fullWidth
                label="End Time"
                name="endTime"
                type="time"
                value={formData.endTime}
                onChange={handleChange}
                InputLabelProps={{
                  shrink: true,
                }}
                required
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                fullWidth
                label="Location"
                name="location"
                value={formData.location}
                onChange={handleChange}
                required
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                fullWidth
                select
                label="Type of Event"
                name="type"
                value={formData.type}
                onChange={handleChange}
                required
              >
                <MenuItem value="meeting">Meeting</MenuItem>
                <MenuItem value="session">Session</MenuItem>
                <MenuItem value="interview">Interview</MenuItem>
                <MenuItem value="service">Service</MenuItem>
              </TextField>
            </Grid>
            <Grid item xs={12}>
              <TextField
                fullWidth
                label="Participants"
                name="participants"
                value={formData.participants}
                onChange={handleChange}
                placeholder="Enter participants separated by commas"
                required
              />
            </Grid>

            {/* New Special Note Field */}
            <Grid item xs={12}>
              <TextField
                fullWidth
                label="Special Note"
                name="specialNote"
                value={formData.specialNote}
                onChange={handleChange}
                multiline
                rows={4}
                placeholder="Enter any special notes regarding the event"
              />
            </Grid>

            <Grid item xs={12}>
              <Button type="submit" variant="contained" color="primary" fullWidth>
                Add
              </Button>
            </Grid>
          </Grid>
        </form>
      </Paper>
    </Box>
  );
};

export default AddMeetingSession;
