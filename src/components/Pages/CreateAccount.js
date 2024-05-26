import React from 'react';
import { Typography, TextField, Button, Container, Link, Box } from '@mui/material';
import Header from '../Components/Header';

function CreateAccount() {
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
          <form noValidate>
            <TextField
              variant="outlined"
              margin="normal"
              required
              fullWidth
              id="name"
              label="Name"
              name="name"
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
              autoComplete="username"
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
              id="confirmPassword"
              autoComplete="new-password"
              sx={{ marginBottom: '10px' }}
            />
            <Button
              type="submit"
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
