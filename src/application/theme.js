import { createTheme } from '@mui/material/styles';

const theme = createTheme({
  palette: {
    primary: {
      light: '#76D9B9',
      main: '#2FDF84',
      dark: '#2FDF84',
      contrastText: '#F3F3F1',
    },
    secondary: {
      main: '#556cd6'
    }
  }
});

export default theme