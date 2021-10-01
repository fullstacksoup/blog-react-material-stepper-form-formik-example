import * as React from 'react';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import CssBaseline from '@material-ui/core/CssBaseline';
import Container from '@material-ui/core/Container';
import AppRouter from './AppRouter';
import { useLocation } from 'react-router-dom';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
    flexDirection: 'column',
    minHeight: '100vh',
  },
  main: {
    position: 'absolute',
    marginTop: '-40vh'
    
  },
  footer: {
    padding: theme.spacing(1, 2),
    marginTop: 'auto',
    
    backgroundColor:
      theme.palette.type === 'light' ? theme.palette.grey[200] : theme.palette.grey[800],
  },
  
}));

export default function AppLayout() {
  const location = useLocation();
  const classes = useStyles();

  return (
    <React.Fragment>
    <CssBaseline />
      <AppBar>
        <Toolbar>
          <Typography variant="h6" component="div">
            Material Multi-Step Form With Formik & Yup
          </Typography>
        </Toolbar>
      </AppBar>
    <Toolbar />
    <Container fixed>      
      <AppRouter />
    </Container>
  </React.Fragment>
  );
}
