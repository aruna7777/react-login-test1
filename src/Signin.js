import React,{Component} from "react";
import { Button,Grid,Typography,makeStyles,Avatar,TextField,FormControlLabel,
        Checkbox,Box,InputAdornment} from '@material-ui/core';
import LockOutlinedIcon from '@material-ui/icons/LockOutlined';
import AccountCircle from '@material-ui/icons/AccountCircle';
import VpnKeyIcon from '@material-ui/icons/VpnKey';
import AddCircleOutlinedIcon from '@material-ui/icons/AddCircleOutlined';
import 'fontsource-roboto';
import './App.css';
import {Link} from "react-router-dom";


const useStyles = makeStyles((theme) => ({
  paper: {
    margin: theme.spacing(8),
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  },
  avatar: {
    margin: theme.spacing(1),
    // backgroundColor: theme.palette.primary.main,
    background:'linear-gradient(70deg,#008B8B,#40E0D0)',
  },
  form: {
    width: '100%', // Fix IE 11 issue.
    marginTop: theme.spacing(3),
  },
  submit: {
    margin: theme.spacing(3, 0, 2),
    background:'linear-gradient(70deg,#008B8B,#40E0D0)',
    border:0,
    borderRadius:15,
    color:'white',
    padding:'5px 30px'
  },
  
}));

function Signin(){
    const classes = useStyles();
    const [checked,setChecked]=React.useState(false);
    return(
        <div className={classes.paper}>
            <Avatar className={classes.avatar}><LockOutlinedIcon/></Avatar>
              <Typography component="h1" variant="h5">Sign in</Typography>
              <form className={classes.form} noValidate>
                <TextField
                  variant="outlined"
                  margin="normal"
                  required
                  fullWidth
                  id="email"
                  label="Email Address"
                  name="email"
                  autoComplete="email"
                  autoFocus
                  InputProps={{startAdornment: (<InputAdornment position="start"><AccountCircle /></InputAdornment>),}}
                />
                <TextField
                  variant="outlined"
                  margin="normal"
                  required
                  fullWidth
                  name="password"
                  label="Password"
                  type="password"
                  id="password"
                  color="primary"
                  autoComplete="current-password"
                  InputProps={{startAdornment: (<InputAdornment position="start"><VpnKeyIcon/></InputAdornment>),}}
                />
                <FormControlLabel control={<Checkbox checked={checked} checkedIcon={<AddCircleOutlinedIcon/>} 
                  onChange={(e)=>setChecked(e.target.checked)} inputProps={{'aria-label':'primary checkbox'}}/>}
                  label="Remember Me"
                />
                <Button type="submit" fullWidth variant="contained" color="primary" className={classes.submit}>Sign In</Button>
                <Grid container>
                  <Grid item xs>
                    <Link to="#" variant="body2">Forgot password?</Link>
                  </Grid>
                  <Grid item>
                    <Link to="/Signup" variant="body2">{"Don't have an account? Sign Up"}</Link>
                  </Grid>
                </Grid>
              </form>
        </div>
    );
}
export default Signin