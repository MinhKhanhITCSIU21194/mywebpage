import React from 'react'
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import Button from '@mui/material/Button';
import { Link} from 'react-router-dom';
import Body from './Body';
import Header from '../Components/Header';
import Lowbar from '../Components/Lowbar';
import Section from '../Components/Section';

const pages = ['Introduction','Products', 'Education', 'Contact','Log out','Cart'];

function Homepage2(id) {
  return (
    <div>
    <div>
    <AppBar sx={{display:'flex', position:'relative', marginBottom:'10px', width:'100%' ,border: 'solid grey 2px' }} >
      <Container maxWidth="100%"  sx={{ bgcolor:'#9e9e9e'}}>
        <Toolbar disableGutters >
          <Typography>
          <Button
            component={Link}
            to={'/Homepage'}
            sx={{
              fontFamily: 'Dancing Script',
              position:'relative',
              fontSize:'65px',
              fontWeight: 700,
              letterSpacing: '.3rem',
              color: 'black',
              textDecoration: 'none', 
              textTransform: 'none',
              marginRight: '0',

              '&:hover': {
                bgcolor:'#9e9e9e',

              }
            }}
          >
            PianoCity
          </Button>
            </Typography>
            <Toolbar disableGutters  sx={{display:'flex', justifyContent: 'space-between', width:'100%'}} >
            {pages.map((page) => (
              <Button
                component={Link}
                to={`/${page.toLowerCase()}`}
                key={page}
                variant="outlined"
                size='large'
                position='relative'
                sx={{
                  fontFamily: 'Playfair Display',
                  color: 'black',
                  border: 'none',
                  fontSize: 'Larger',
                  '&:hover': {
                    bgcolor:'#9e9e9e',
                    color:'White',
                    border: 'none', 
                  }
                }}  
              >
                {page}
              </Button>
            )
            )}
        </Toolbar>
        </Toolbar>
      </Container>
    </AppBar>       
    </div>
    <div style={{marginLeft:'5%', fontSize:'40px',fontFamily:'Dancing Script'}}>Welcome Minh Khanh</div>
   <Body/>
   <Lowbar/>
    </div>
  )
}

export default Homepage2
