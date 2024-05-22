import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import Button from '@mui/material/Button';
import { Router, Route, Link} from 'react-router-dom';





const pages = ['Introduction','Products', 'Education', 'Contact','Login','Cart'];


function Header() {
  

  return (
    <div>
    <AppBar sx={{display:'flex', position:'relative', marginBottom:'10px', width:'100%' ,border: 'solid grey 2px' }} >
      <Container maxWidth="100%"  sx={{ bgcolor:'#9e9e9e'}}>
        <Toolbar disableGutters >
          <Typography>
          <Button
            noWrap
            component={Link}
            to={'/'}
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
  );
}
export default Header;