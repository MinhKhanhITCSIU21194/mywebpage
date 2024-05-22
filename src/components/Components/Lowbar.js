import React from 'react'
import Typography from '@mui/material/Typography';
import { Button, Box } from '@mui/material';
import  {PaymentMed}  from '../../data/Data'

const info = ['Delivery', 'Repairs', 'Deal Match Promise','Terms and Conditions','Privacy', 'FAQ', 'Blog','Part Exchange'];
const support = ['About Us','Email Us','Where To Find Us']
const social = ['Facebook','Instagram','Twitter','Youtube']

function Lowbar() {
    const [setAnchorElNav] = React.useState(null);


    const handleCloseNavMenu = () => {
        setAnchorElNav(null);
  };
  return (
    <div>
      <Box sx={{
        backgroundColor: '#424242',
        display: 'flex',
        width: '100%',
        height: '400px',
        position:'relative',
      
        }} >
            <span style={{width:'20%', height:'100%'}}>     
                <Typography sx={{
        marginTop:'20px',
        textAlign:'center',
        fontSize:'25px',
        position:'relative',
        fontFamily:'Playfair Display',
        fontWeight: 700,
        color:'white',
       }}>
        INFORMATION
                </Typography>
                {info.map((info) => (
                <Button 
                key={info}
                onClick={handleCloseNavMenu}
                sx={{
                width:'100%',
                textAlign:'left',
                fontSize:'15px',
                position:'relative',
                color:'white',
                '&:hover': {
                    color:'yellow',

                    
                  }
       }}>
                
                {info}
                </Button>
                )
                )}
         </span>
         <span style={{width:'20%', height:'100%'}}>     
                <Typography sx={{
        marginTop:'20px',
        textAlign:'center',
        fontSize:'25px',
        position:'relative',
        fontWeight: 700,
        fontFamily:'Playfair Display',
        color:'white',
       }}>
        SUPPORT
                </Typography>
                {support.map((support) => (
                <Button 
                key={support}
                onClick={handleCloseNavMenu}
                sx={{
                width:'100%',
                textAlign:'left',
                fontSize:'15px',
                position:'relative',
                color:'white',
                '&:hover': {
                    color:'yellow',

                    
                  }
       }}>
                
                {support}
                </Button>
                )
                )}
         </span>
         <span style={{width:'20%', height:'100%'}}>     
                <Typography sx={{
        marginTop:'20px',
        textAlign:'center',
        fontSize:'25px',
        position:'relative',
        fontWeight: 700,
        fontFamily:'Playfair Display',
        color:'white',
       }}>
        SOCIAL
                </Typography>
                {social.map((social) => (
                <Button 
                key={social}
                onClick={handleCloseNavMenu}
                sx={{
                width:'100%',
                textAlign:'left',
                fontSize:'15px',
                position:'relative',
                color:'white',
                '&:hover': {
                    color:'yellow',

                    
                  }
       }}>
                
                {social}
                </Button>
                )
                )}
         </span>
         <span style={{width:'35%', height:'50px'}}>
         <Typography sx={{
        marginTop:'20px',
        textAlign:'center',
    
        fontSize:'25px',
        position:'relative',
        fontFamily:'Playfair Display',
        color:'white',
        fontWeight: 700,
       }}>
        PAYMENT METHODS
        </Typography>
                {PaymentMed.map((PaymentMed) => (
                <span>
                <Button 
                key={PaymentMed.Name}
                onClick={handleCloseNavMenu}
                sx={{
                    left:'10%',
                    margin:'10px',
                }}
                >
                <img src={PaymentMed.img} alt={PaymentMed.Name} style={{width:'60px'}} />
                </Button>
                
                    
                 </span>   
                )
            )}

</span> 
       </Box>
    </div>
  )
} 
  
  


export default Lowbar
