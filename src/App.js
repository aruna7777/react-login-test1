import React, { Component }  from 'react';
import {CssBaseline,Grid,makeStyles,Box, Paper,Typography} from '@material-ui/core';
import 'fontsource-roboto';
import './App.css';
import Signin from './Signin';
import Signup from './Signup';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";

const useStyles = makeStyles((theme) => ({
  root: {
    height: '100vh',
  },
  image: {
    backgroundImage: 'url(/election.jpg)',
    backgroundSize: 'cover',
    backgroundPosition: 'center',
  },
}));

function Copyright() {
  return (
    <Typography variant="body2" color="textSecondary" align="center">
      {'Copyright © '}
        Election Commission IT Department
      {' '}
      {new Date().getFullYear()}
      {'.'}
    </Typography>
  );
}

function App() {
  const classes = useStyles();
    return (
      <Router>
      <Grid container component="main" className={classes.root}>
      <CssBaseline />
        <Grid item xs={false} sm={4} md={7} className={classes.image} />
          <Grid item xs={12} sm={8} md={5} component={Paper} elevation={6} square>
            <div>
              <Switch>
                <Route exact path="/"><Signin /></Route>
                <Route exact path="/Signup"><Signup /></Route>
              </Switch>
              <Box mt={5}><Copyright/></Box>
            </div>
          </Grid>
        </Grid>
        </Router>
    );
  }

export default App;
