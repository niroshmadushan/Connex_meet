// src/pages/Register.js
import React, { useState } from 'react';
import {
  Box,
  TextField,
  Button,
  Container,
  Typography,
  IconButton,
  InputAdornment,
  FormControl,
  InputLabel,
  OutlinedInput,
  Paper,
  Avatar
} from '@mui/material';
import Visibility from '@mui/icons-material/Visibility';
import VisibilityOff from '@mui/icons-material/VisibilityOff';
import PhotoCamera from '@mui/icons-material/PhotoCamera'; // Icon for profile picture upload
import { styled } from '@mui/system';

// Theme colors
const themeColor = {
  primary: '#007aff', // iOS-like blue color
  textPrimary: '#333333', // Primary text color for better contrast
  cardBg: '#ffffff', // White background for cards
};

const StyledPaper = styled(Paper)(({ theme }) => ({
  backgroundColor: themeColor.cardBg,
  padding: '30px',
  borderRadius: '12px',
  boxShadow: '0 4px 10px rgba(0, 0, 0, 0.1)',
  maxWidth: '500px',
  width: '100%',
}));

const Register = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    address: '',
    bio: '',
    password: '',
    confirmPassword: '',
    profilePicture: '', // New field for profile picture
  });

  const [showPassword, setShowPassword] = useState(false);
  const [error, setError] = useState('');
  const [profilePreview, setProfilePreview] = useState(null); // For profile picture preview

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const toggleShowPassword = () => {
    setShowPassword((prev) => !prev);
  };

  const handleProfilePictureChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      setFormData({
        ...formData,
        profilePicture: file,
      });

      const reader = new FileReader();
      reader.onloadend = () => {
        setProfilePreview(reader.result);
      };
      reader.readAsDataURL(file);
    }
  };

  const handleRegister = (e) => {
    e.preventDefault();
    const { name, email, phone, address, bio, password, confirmPassword } = formData;

    // Simple validation
    if (password !== confirmPassword) {
      setError("Passwords do not match.");
      return;
    }

    if (name === '' || email === '' || phone === '' || address === '' || bio === '' || password === '' || confirmPassword === '') {
      setError("Please fill in all fields.");
      return;
    }

    // Reset error
    setError('');
    
    // Implement your registration logic here (e.g., API call)
    console.log('Registration Successful:', { name, email, phone, address, bio, password, profilePicture: formData.profilePicture });

    // Clear the form
    setFormData({
      name: '',
      email: '',
      phone: '',
      address: '',
      bio: '',
      password: '',
      confirmPassword: '',
      profilePicture: '',
    });
    setProfilePreview(null);
  };

  return (
    <Container sx={{ mt: 8, display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100vh' }}>
      <StyledPaper elevation={3}>
        <Typography variant="h5" sx={{ fontWeight: 'bold', mb: 3, textAlign: 'center', color: themeColor.primary }}>
          Register
        </Typography>
        <form onSubmit={handleRegister}>
          <TextField
            fullWidth
            label="Name"
            variant="outlined"
            margin="normal"
            name="name"
            value={formData.name}
            onChange={handleChange}
            required
          />
          <TextField
            fullWidth
            label="Email"
            variant="outlined"
            margin="normal"
            name="email"
            value={formData.email}
            onChange={handleChange}
            required
          />
          <TextField
            fullWidth
            label="Phone"
            variant="outlined"
            margin="normal"
            name="phone"
            value={formData.phone}
            onChange={handleChange}
            required
          />
          <TextField
            fullWidth
            label="Address"
            variant="outlined"
            margin="normal"
            name="address"
            value={formData.address}
            onChange={handleChange}
            required
          />
          <TextField
            fullWidth
            label="Bio"
            variant="outlined"
            margin="normal"
            name="bio"
            value={formData.bio}
            onChange={handleChange}
            multiline
            rows={3}
            required
          />

          {/* Profile Picture Upload */}
          <Box sx={{ display: 'flex', alignItems: 'center', mt: 2 }}>
            <Avatar
              src={profilePreview}
              alt="Profile Picture"
              sx={{ width: 56, height: 56, mr: 2 }}
            />
            <Button
              variant="outlined"
              component="label"
              startIcon={<PhotoCamera />}
              sx={{ textTransform: 'none', fontSize: '0.8rem' }}
            >
              Upload Profile Picture
              <input
                type="file"
                accept="image/*"
                hidden
                onChange={handleProfilePictureChange}
              />
            </Button>
          </Box>

          <FormControl fullWidth variant="outlined" margin="normal">
            <InputLabel htmlFor="password">Password</InputLabel>
            <OutlinedInput
              id="password"
              name="password"
              type={showPassword ? 'text' : 'password'}
              value={formData.password}
              onChange={handleChange}
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
              label="Password"
              required
            />
          </FormControl>
          <FormControl fullWidth variant="outlined" margin="normal">
            <InputLabel htmlFor="confirmPassword">Confirm Password</InputLabel>
            <OutlinedInput
              id="confirmPassword"
              name="confirmPassword"
              type={showPassword ? 'text' : 'password'}
              value={formData.confirmPassword}
              onChange={handleChange}
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
              label="Confirm Password"
              required
            />
          </FormControl>
          {error && (
            <Typography variant="body2" color="error" sx={{ mt: 1, mb: 1 }}>
              {error}
            </Typography>
          )}
          <Button
            type="submit"
            fullWidth
            variant="contained"
            color="primary"
            sx={{ mt: 2, mb: 2, backgroundColor: themeColor.primary }}
          >
            Register
          </Button>
        </form>
        <Typography variant="body2" align="center">
          Already have an account? <a href="/login" style={{ color: themeColor.primary }}>Login</a>
        </Typography>
      </StyledPaper>
    </Container>
  );
};

export default Register;
