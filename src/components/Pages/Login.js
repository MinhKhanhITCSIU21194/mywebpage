import React from 'react';
import { Typography, TextField, Button, Container, Link, Box } from '@mui/material';
import Header from '../Components/Header';

function Login() {
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
          height: '100vh',
          width: '100vw',
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
            Login
          </Typography>
          <form noValidate>
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
              sx={{ marginBottom: '16px' }}
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
              autoComplete="current-password"
              sx={{ marginBottom: '16px' }}
            />
            <Typography
              component="p"
              sx={{
                textAlign: 'center',
                marginBottom: '16px',
              }}
            >
              Don't have an account?{' '}
              <Link href="/create-account" sx={{ textDecoration: 'none', color: '#333' }}>
                Create Account
              </Link>
            </Typography>
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
              Login
            </Button>
          </form>
        </Box>
      </Container>
    </>
  );
}

export default Login;
