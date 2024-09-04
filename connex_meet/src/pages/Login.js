// src/pages/Login.js
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
} from '@mui/material';
import Visibility from '@mui/icons-material/Visibility';
import VisibilityOff from '@mui/icons-material/VisibilityOff';
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
  maxWidth: '400px',
  width: '100%',
}));

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const [error, setError] = useState('');

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };

  const toggleShowPassword = () => {
    setShowPassword((prev) => !prev);
  };

  const handleLogin = (e) => {
    e.preventDefault();
    // Implement your login logic here (e.g., API call)
    if (email === '' || password === '') {
      setError('Please enter both email and password.');
      return;
    }
    // Reset error
    setError('');
    console.log('Login Successful:', { email, password });
  };

  return (
    <Container sx={{ mt: 8, display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100vh' }}>
      <StyledPaper elevation={3}>
        <Typography variant="h5" sx={{ fontWeight: 'bold', mb: 3, textAlign: 'center', color: themeColor.primary }}>
          Login
        </Typography>
        <form onSubmit={handleLogin}>
          <TextField
            fullWidth
            label="Email"
            variant="outlined"
            margin="normal"
            value={email}
            onChange={handleEmailChange}
            required
          />
          <FormControl fullWidth variant="outlined" margin="normal">
            <InputLabel htmlFor="password">Password</InputLabel>
            <OutlinedInput
              id="password"
              type={showPassword ? 'text' : 'password'}
              value={password}
              onChange={handlePasswordChange}
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
            Login
          </Button>
        </form>
        <Typography variant="body2" align="center">
          Don't have an account? <a href="/register" style={{ color: themeColor.primary }}>Register</a>
        </Typography>
      </StyledPaper>
    </Container>
  );
};

export default Login;
