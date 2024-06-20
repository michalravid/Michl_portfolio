import React, { useEffect, useState } from "react";
import { useRef } from "react";
import { connect } from "react-redux";
import LoginData from "./login";
import { useParams, Navigate, useNavigate } from 'react-router-dom'
import axios from "axios";
import { getAllContacts } from "../redux/action";



// export default connect(mapStateToProps)(function Connect(props) {
//     const { contactsList } = props
//     let idRef = useRef('')
//     let nameRef = useRef('')
//     const [flag, setFlag] = useState(false);

//     const connecting = (() => {
//         if (contactsList.find(num => num.id === idRef.current.value)) {
//             alert(`hello ${nameRef.current.value}`)
//         }
//         else {
//             setFlag(true)
//             alert(`oops... you are not founds`)
//         }
//     })
//     return (
//         <>
//             <label>name </label>
//             <input ref={nameRef}></input>
//             <br></br>
//             <label> id</label>
//             <input ref={idRef}></input>
//             <br></br>
//             <button onClick={connecting}>connect</button>
//             {!flag || <LoginData />}
//         </>
//     )
// })

// import * as React from 'react';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import TextField from '@mui/material/TextField';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import Link from '@mui/material/Link';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
// import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import { createTheme, ThemeProvider } from '@mui/material/styles';
// import {Link} from 'react-router-dom'

// function Copyright(props) {
//   return (
//     // <Typography variant="body2" color="text.secondary" align="center" {...props}>
//     //   {'Copyright © '}
//     //   {/* <Link color="inherit" href="https://mui.com/">
//     //     Your Website
//     //   </Link>{' '} */}
//     //   {new Date().getFullYear()}
//     //   {'.'}
//     // </Typography>
//   );
// }

// TODO remove, this demo shouldn't need to reset the theme.

function mapStateToProps(state) {
  return { contactsList: state.contacts.contactsList };
}

const defaultTheme = createTheme();

export default connect(mapStateToProps)(function SignIn(props) {
  const { contactsList,dispatch } = props
  // let idRef = useRef('')
  // let nameRef = useRef('')
  const newNavigate=useNavigate()

  const getAllContactsList = async () => {
    try {
      
        const response = await axios.get('http://localhost:8000/contact/')
        console.log(response.data);
        if (response.status == 200) {
            dispatch(getAllContacts(response.data))
        }
    }
    catch (error) {
        console.log("oops")
    }
}
useEffect(() => {
    getAllContactsList()
}, [])

  const handleSubmit = (event) => {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    const idUser=data.get('password');
    if (contactsList.find(num => num.id === data.get('password'))) {
      alert(`hello ${data.get('name')}`)
      newNavigate('/presentationTasks',{state:{idUser}})
    }
    else {
      // setFlag(true)
      alert(`oops... you are not founds`)
      newNavigate('/login')
    }
    // console.log({
    //   email: data.get('name'),
    //   password: data.get('password'),
    // });
  };

  return (
    <ThemeProvider theme={defaultTheme}>
      <Container component="main" maxWidth="xs">
        <CssBaseline />
        <Box
          sx={{
            marginTop: 8,
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
          }}
        >
          <Avatar sx={{ m: 1, bgcolor: 'secondary.main' }}>
            {/* <LockOutlinedIcon /> */}
          </Avatar>
          <Typography component="h1" variant="h5">
            Sign in
          </Typography>
          <Box component="form" onSubmit={handleSubmit} noValidate sx={{ mt: 1 }}>
            <TextField
              margin="normal"
              required
              fullWidth
              id="name"
              label="Your Name"
              name="name"
              autoComplete="name"
              autoFocus
            />
            <TextField
              margin="normal"
              required
              fullWidth
              name="password"
              label="Password"
              type="password"
              id="password"
              autoComplete="current-password"
            />
            {/* <FormControlLabel
              control={<Checkbox value="remember" color="primary" />}
              label="Remember me"
            /> */}
            <Button
              type="submit"
              fullWidth
              variant="contained"
              sx={{ mt: 3, mb: 2 }}
            >
              Sign In
            </Button>
            <Grid container>
              {/* <Grid item xs>
                <Link href="#" variant="body2">
                  Forgot password?
                </Link>
              </Grid> */}
              <Grid item>
                <Link href="./login" variant="body2">
                  {"Don't have an account?    Sign Up"}
                </Link>
              </Grid>
            </Grid>
          </Box>
        </Box>
        {/* <Copyright sx={{ mt: 8, mb: 4 }} /> */}
      </Container>
    </ThemeProvider>
  );
});
