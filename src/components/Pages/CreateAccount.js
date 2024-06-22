import React, { useState } from 'react';
import { Typography, TextField, Button, Container, Link, Box } from '@mui/material';

import Header from '../Components/Header';

const InitialFormValue = {
  name:"",
  email:"",
  username:"",
  password:"",
  confirmPassword:"",
  address:"",
  phoneNumber:"",
  dob:"",


}

const ErrorValue= (value) => {
  return value.trim().length < 8
}



function CreateAccount() {
  const [formValue, setformValue] = useState(InitialFormValue);
  const [formerror, setformError] = useState({});

  const ErrorConfPass = (value) => {
    return value !== formValue.password 
  }
  const validateForm = () => {
      const error = {};
      if (ErrorValue(formValue.username)){
        error["username"] = "Username should have 8 characters"
      }
      if (ErrorValue(formValue.email)){
        error["email"] = "Email should have 8 characters"
      }
      if (ErrorValue(formValue.address)){
        error["address"] = "address should have 8 characters"
      }
      if (ErrorValue(formValue.password)){
        error["password"] = "password should have 8 characters"
      }
      if (ErrorConfPass(formValue.confirmPassword)){
        error["ConfirmPassword"] = "Confirm Password must be the same with the password"
        
      }
      setformError(error)
      return Object.keys(error).length===0

  }
  

  const handleChange = (event) => {
    const {value, name} = event.target;
    setformValue({
      ...formValue,
      [name]: value,
    });
  }
  const handleSubmit = (event) => {
    event.preventDefault();
    if (validateForm()){
      
      console.log(formValue); 
  } else {
    console.log(formerror);
  }
}

  

  return (
    <>
      <Header />
      <Container
        maxWidth={false}
        disableGutters
        sx={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          minHeight: '100vh',
          position: 'relative',
          overflow: 'hidden',
        }}
      >
        <Box
          sx={{
            position: 'absolute',
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            backgroundImage: 'url(/Assets/Piano/black-piano-steinway-sons-a3uq9j9kggcamrqn.jpg)',
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            backgroundRepeat: 'no-repeat',
            filter: 'blur(10px)',
            zIndex: -1,
          }}
        />
        <Box
          sx={{
            backgroundColor: 'rgba(255, 255, 255, 0.8)',
            padding: '20px',
            borderRadius: '8px',
            width: '100%',
            maxWidth: '400px',
            zIndex: 1,
          }}
        >
          <Typography
            component="h1"
            variant="h5"
            sx={{
              fontWeight: 700,
              fontSize: '30px',
              fontFamily: 'Playfair Display, serif',
              textAlign: 'center',
              margin: '15px 0',
            }}
          >
            Create Account
          </Typography>
          <form onSubmit={handleSubmit}>
            <TextField
              variant="outlined"
              margin="normal"
              required
              fullWidth
              id="name"
              label="Name"
              name="name"
              value={formValue.name}
              onChange={handleChange}
              autoComplete="name"
              autoFocus
              sx={{ marginBottom: '10px' }}
            />
            <TextField
              variant="outlined"
              margin="normal"
              required
              fullWidth
              id="email"
              label="Email Address"
              name="email"
              value={formValue.email}
              onChange={handleChange}
              autoComplete="email"
              sx={{ marginBottom: '10px' }}
            />
            <TextField
              variant="outlined"
              margin="normal"
              required
              fullWidth
              id="address"
              label="Address"
              name="address"
              value={formValue.address}
              onChange={handleChange}
              autoComplete="address"
              sx={{ marginBottom: '10px' }}
            />
            <TextField
              variant="outlined"
              margin="normal"
              required
              fullWidth
              id="phoneNumber"
              label="Phone Number"
              name="phoneNumber"
              value={formValue.phoneNumber}
              onChange={handleChange}
              autoComplete="tel"
              sx={{ marginBottom: '10px' }}
            />
            <TextField
              variant="outlined"
              margin="normal"
              required
              fullWidth
              id="dob"
              label="Date of Birth"
              name="dob"
              value={formValue.dob}
              onChange={handleChange}
              type="date"
              InputLabelProps={{ shrink: true }}
              sx={{ marginBottom: '10px' }}
            />
            <TextField
              variant="outlined"
              margin="normal"
              required
              fullWidth
              id="username"
              label="Username"
              name="username"
              value={formValue.username}
              onChange={handleChange}
              autoFocus
              sx={{ marginBottom: '10px' }}
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
              value={formValue.password}
              onChange={handleChange}
              autoComplete="new-password"
              sx={{ marginBottom: '10px' }}
            />
            <TextField
              variant="outlined"
              margin="normal"
              required
              fullWidth
              name="confirmPassword"
              label="Confirm Password"
              type="password"
              value={formValue.confirmPassword}
              onChange={handleChange}
              id="confirmPassword"
              autoComplete="new-password"
              sx={{ marginBottom: '10px' }}
            />
            <Button
              type="submit"
              to="/login"
              fullWidth
              variant="contained"
              sx={{
                backgroundColor: '#333',
                color: '#fff',
                '&:hover': {
                  backgroundColor: '#555',
                },
              }}
            >
              Create Account
            </Button>
            <Typography
              component="p"
              sx={{
                textAlign: 'center',
                marginTop: '10px',
              }}
            >
              Already have an account?{' '}
              <Link href="/login" sx={{ textDecoration: 'none', color: '#333' }}>
                Login
              </Link>
            </Typography>
          </form>
        </Box>
      </Container>
    </>
  );
}

export default CreateAccount;
