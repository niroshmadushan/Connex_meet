// src/theme/theme.js
import { createTheme } from '@mui/material/styles';

const theme = createTheme({
  palette: {
    primary: {
      main: '#3f51b5',  // Adjust primary color to a rich blue
    },
    secondary: {
      main: '#f50057',  // Adjust secondary color to a bold pink
    },
  },
  typography: {
    fontFamily: 'Roboto, Arial, sans-serif',
    fontSize: 14,
    h6: {
      fontWeight: 'bold',
    },
  },
});

export default theme;
