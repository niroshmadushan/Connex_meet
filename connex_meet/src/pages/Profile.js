// src/pages/Profile.js
import React, { useState } from 'react';
import profilePic from '../img/th.jpeg';
import {
  Box,
  Avatar,
  Typography,
  TextField,
  Button,
  Grid,
  Container,
  Paper,
  IconButton,
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
  InputAdornment,
  FormControl,
  InputLabel,
  OutlinedInput
} from '@mui/material';
import EditIcon from '@mui/icons-material/Edit';
import SaveIcon from '@mui/icons-material/Save';
import CancelIcon from '@mui/icons-material/Cancel';
import LockIcon from '@mui/icons-material/Lock';
import Visibility from '@mui/icons-material/Visibility';
import VisibilityOff from '@mui/icons-material/VisibilityOff';
import { styled } from '@mui/system';

const themeColor = {
  primary: '#007aff', // iOS-like blue color
  primaryDark: '#005bb5',
  background: '#f9f9f9', // Light background color
  textPrimary: '#333333', // Primary text color for better contrast
  cardBg: '#ffffff', // Light background for cards
};

const StyledPaper = styled(Paper)(({ theme }) => ({
  backgroundColor: themeColor.cardBg,
  color: themeColor.textPrimary,
  padding: '20px',
  borderRadius: '10px',
  boxShadow: '0 2px 4px rgba(0, 0, 0, 0.1)',
}));

const Profile = () => {
  const [userData, setUserData] = useState({
    name: 'John Doe',
    email: 'johndoe@example.com',
    phone: '+1234567890',
    address: '123 Main Street, City, Country',
    bio: 'A passionate developer.',
    profilePic: profilePic, // Placeholder profile picture
  });

  const [editMode, setEditMode] = useState(false);
  const [openEdit, setOpenEdit] = useState(false);
  const [openPassword, setOpenPassword] = useState(false); // State to manage the password dialog
  const [editData, setEditData] = useState({ ...userData });
  const [passwordData, setPasswordData] = useState({
    currentPassword: '',
    newPassword: '',
    confirmPassword: '',
  });
  const [showPassword, setShowPassword] = useState(false); // State for password visibility

  const handleEdit = () => {
    setEditData({ ...userData });
    setOpenEdit(true);
  };

  const handleSave = () => {
    setUserData(editData);
    setEditMode(false);
    setOpenEdit(false);
  };

  const handleCancel = () => {
    setEditData({ ...userData });
    setEditMode(false);
    setOpenEdit(false);
  };

  const handlePasswordChange = () => {
    if (passwordData.newPassword !== passwordData.confirmPassword) {
      alert("New passwords do not match!");
      return;
    }
    alert("Password changed successfully!");
    setOpenPassword(false);
  };

  const handleChange = (e) => {
    setEditData({
      ...editData,
      [e.target.name]: e.target.value,
    });
  };

  const handlePasswordFieldChange = (e) => {
    setPasswordData({
      ...passwordData,
      [e.target.name]: e.target.value,
    });
  };

  const toggleShowPassword = () => {
    setShowPassword((prev) => !prev);
  };

  return (
    <Container sx={{ mt: 4 }}>
      <StyledPaper elevation={3}>
        <Grid container spacing={2} alignItems="center">
          {/* Profile Picture and Name in the Same Row */}
          <Grid item xs={12} sm={4} sx={{ display: 'flex', alignItems: 'center' }}>
            <Avatar
              alt={userData.name}
              src={userData.profilePic}
              sx={{ width: 100, height: 100, marginRight: '10px' }}
            />
            {/* Name */}
            <Box sx={{ flexGrow: 1 }}>
              <Typography variant="h6" sx={{ fontWeight: 'bold' }}>
                {userData.name}
              </Typography>
            </Box>
          </Grid>
          <Grid item xs={12} sm={8}>
            <Typography variant="body1" sx={{ mb: 2 }}><strong>Email:</strong> {userData.email}</Typography>
            <Typography variant="body1" sx={{ mb: 2 }}><strong>Phone:</strong> {userData.phone}</Typography>
            <Typography variant="body1" sx={{ mb: 2 }}><strong>Address:</strong> {userData.address}</Typography>
            <Typography variant="body1" sx={{ mb: 2 }}><strong>Bio:</strong> {userData.bio}</Typography>
          </Grid>
        </Grid>
        
        {/* Edit Profile and Change Password Buttons in the Center */}
        <Box sx={{ mt: 2, display: 'flex', justifyContent: 'center', gap: 2 }}>
          <Button
            variant="outlined"
            color="primary"
            size="small"
            onClick={handleEdit}
            sx={{ padding: '2px 8px', fontSize: '0.75rem' }}
          >
            Edit Profile
          </Button>
          <Button
            variant="outlined"
            color="primary"
            size="small"
            onClick={() => setOpenPassword(true)}
            sx={{ padding: '2px 8px', fontSize: '0.75rem' }}
          >
            Change Password
          </Button>
        </Box>
      </StyledPaper>

      {/* Edit Profile Dialog */}
      <Dialog open={openEdit} onClose={handleCancel}>
        <DialogTitle>Edit Profile</DialogTitle>
        <DialogContent>
          <TextField
            fullWidth
            margin="dense"
            label="Name"
            name="name"
            value={editData.name}
            onChange={handleChange}
          />
          <TextField
            fullWidth
            margin="dense"
            label="Email"
            name="email"
            value={editData.email}
            onChange={handleChange}
          />
          <TextField
            fullWidth
            margin="dense"
            label="Phone"
            name="phone"
            value={editData.phone}
            onChange={handleChange}
          />
          <TextField
            fullWidth
            margin="dense"
            label="Address"
            name="address"
            value={editData.address}
            onChange={handleChange}
          />
          <TextField
            fullWidth
            margin="dense"
            label="Bio"
            name="bio"
            value={editData.bio}
            onChange={handleChange}
            multiline
            rows={3}
          />
        </DialogContent>
        <DialogActions>
          <Button onClick={handleSave} variant="contained" color="primary" startIcon={<SaveIcon />}>
            Save
          </Button>
          <Button onClick={handleCancel} variant="outlined" color="secondary" startIcon={<CancelIcon />}>
            Cancel
          </Button>
        </DialogActions>
      </Dialog>

      {/* Change Password Dialog */}
      <Dialog open={openPassword} onClose={() => setOpenPassword(false)}>
        <DialogTitle>Change Password</DialogTitle>
        <DialogContent>
          <FormControl variant="outlined" fullWidth margin="dense">
            <InputLabel htmlFor="currentPassword">Current Password</InputLabel>
            <OutlinedInput
              id="currentPassword"
              name="currentPassword"
              type={showPassword ? 'text' : 'password'}
              value={passwordData.currentPassword}
              onChange={handlePasswordFieldChange}
              endAdornment={
                <InputAdornment position="end">
                  <IconButton
                    aria-label="toggle password visibility"
                    onClick={toggleShowPassword}
                    edge="end"
                  >
                    {showPassword ? <VisibilityOff /> : <Visibility />}
                  </IconButton>
                </InputAdornment>
              }
              label="Current Password"
            />
          </FormControl>
          <FormControl variant="outlined" fullWidth margin="dense">
            <InputLabel htmlFor="newPassword">New Password</InputLabel>
            <OutlinedInput
              id="newPassword"
              name="newPassword"
              type={showPassword ? 'text' : 'password'}
              value={passwordData.newPassword}
              onChange={handlePasswordFieldChange}
              endAdornment={
                <InputAdornment position="end">
                  <IconButton
                    aria-label="toggle password visibility"
                    onClick={toggleShowPassword}
                    edge="end"
                  >
                    {showPassword ? <VisibilityOff /> : <Visibility />}
                  </IconButton>
                </InputAdornment>
              }
              label="New Password"
            />
          </FormControl>
          <FormControl variant="outlined" fullWidth margin="dense">
            <InputLabel htmlFor="confirmPassword">Confirm New Password</InputLabel>
            <OutlinedInput
              id="confirmPassword"
              name="confirmPassword"
              type={showPassword ? 'text' : 'password'}
              value={passwordData.confirmPassword}
              onChange={handlePasswordFieldChange}
              endAdornment={
                <InputAdornment position="end">
                  <IconButton
                    aria-label="toggle password visibility"
                    onClick={toggleShowPassword}
                    edge="end"
                  >
                    {showPassword ? <VisibilityOff /> : <Visibility />}
                  </IconButton>
                </InputAdornment>
              }
              label="Confirm New Password"
            />
          </FormControl>
        </DialogContent>
        <DialogActions>
          <Button onClick={handlePasswordChange} variant="contained" color="primary">
            Change Password
          </Button>
          <Button onClick={() => setOpenPassword(false)} variant="outlined" color="secondary">
            Cancel
          </Button>
        </DialogActions>
      </Dialog>
    </Container>
  );
};

export default Profile;
