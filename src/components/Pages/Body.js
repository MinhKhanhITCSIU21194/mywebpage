import React from 'react'
import Typography from '@mui/material/Typography';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import { Button } from '@mui/material';
import {PRODUCTS} from '../../data/Data'
import CourseimageButton from '../Components/CourseimageButton';

var ProductAPI ='http://localhost:8090/product/'


function Body() {
  getProducts(function(data) {
    PRODUCTS.push(data);
  });
  const productsRef = React.useRef(null);
  const EduRef = React.useRef(null);
  function scrolldiv() {
    productsRef.current.scrollIntoView({ behavior: 'smooth' });}
  function scrolldiv1() {
    EduRef.current.scrollIntoView({ behavior: 'smooth' });
  }


  return (
  <div> 
  <div className='Introduction' style={{width:'100%', height:'600px', position:'relative'}}>
      <img src='../Assets/Piano/black-piano-steinway-sons-a3uq9j9kggcamrqn.jpg' alt='Steinway' style={{ maxWidth:'2000px', width:'100%', height:'100%' ,opacity: 0.15,  position:'absolute'}} ></img>
      
      <div>
      <Typography sx={{
        left: '15%', // Add this line
        fontSize:'40px',
        position:'relative',
        width:'75%',
        letterSpacing: '.5rem',

        marginBottom:'30px',
        fontFamily:'Playfair Display'
    }}>
      <br></br>Welcome to <span style={{fontFamily:'Dancing Script', fontWeight:'800', fontSize:'55px'}}>PianoCity</span>  
    </Typography>
    <Typography sx={{
      position:'relative',
      width:'70%',
      left: '15%',
      letterSpacing: '.1rem',
      fontFamily:'Playfair Display',
      fontWeight:500,
      marginBottom:'10px',
    }}
    >
    &emsp;&emsp;&emsp;PianoCity, World of Piano was founded in 1993 and formally established in 1996 with its origins in the School of Music Stream – the first private music school in Vietnam.
    Similar to the instrument distribution system, we have developed the PianoCity brand covering many locations across the country to meet the needs of music learning. PianoCity's first product portfolio was the new keyboard and piano from Casio and Kawai Japan introduced to the Vietnamese market.
    <br></br>&emsp;&emsp;&emsp;As one of the first instrument distributors to be present in the Vietnamese market, Piano World Music (PWM) is always striving for sustainable development and “Move to the Future” with Vietnam. Based on music knowledge, the work combination of the entire staff based on the motto Customer's interests is the most important, PWM has been, is and will not cease to provide to our partners and consumers authentic value with high quality products and services that meet international standards at the most reasonable price and perfect after-sales service. 
    <br></br>&emsp;&emsp;&emsp;We are confident that we will always bring the highest satisfaction to our customers, as well as contribute positively to the development of the Vietnamese Music Industry.
    </Typography>

    <div style={{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        height: '100%',
        position:'relative',
        }} >
      <Button onClick={scrolldiv}>
        <KeyboardArrowDownIcon  sx=
        {{
          
          cursor: 'pointer', // Change the cursor to a pointer
          padding: '10px', // Add some padding
          fontSize:'100px',
          color:'black',

        
        
        
        }}>
          
          </KeyboardArrowDownIcon>
          </Button>
    </div>
    </div>
    </div>

    <div ref={productsRef} className='Products' style={{width:'100%'}}>
    <Typography sx={{
        textAlign:'center',// Add this line
        fontSize:'45px',
        position:'relative',

        width:'100%',
        letterSpacing: '.5rem',


        fontFamily:'Playfair Display'
    }}>
      <br></br>Special Products
    </Typography>
    <div class="products" style={{display: 'flex', flexWrap: 'wrap', width:'100%', marginLeft:'30px'}} > 
        {PRODUCTS.slice(1,4).map((product) => (
            <span class="item" style={{width:'31%', margin:'10px'}}>
                <Button><img src={product.img} alt="Product" className="ProductImage" style={{width:'100%'}} /></Button>
                <div class="item-info" style={{textAlign:'center'}}>
                    <h2>{product.Name}</h2>
                    <h3>${product.Price}</h3>
                </div>
            </span>
        ))}
        </div>
        <div style={{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        height: '100%',
        position:'relative',
        }} >
      <Button onClick={scrolldiv1}>
        <KeyboardArrowDownIcon  sx=
        {{
          
          cursor: 'pointer', // Change the cursor to a pointer
          padding: '10px', // Add some padding
          fontSize:'100px',
          color:'black',
        }}>
          
          </KeyboardArrowDownIcon>
          </Button>
    </div>
      
      
      
      </div>

      <div ref={EduRef} className='Education' style={{position:'relative', height:'30%', marginBottom:'30px'}}>
          <img src='../Assets/Education/day-dan-piano-tai-nha-o-ha-noi.jpg' alt='Piano tai nha o' style={{  width:'100%', height:'100%' ,opacity: 0.15,  position:'absolute'}} ></img>
          <Typography sx={{
        textAlign:'center',// Add this line
        fontSize:'45px',
        position:'relative',
        width:'100%',
        letterSpacing: '.5rem',


        fontFamily:'Playfair Display'
    }}>
      <br></br>Education
      </Typography>
      <CourseimageButton/>
      </div>
    </div> 
  )
}
function getProducts(callback) {
    fetch(ProductAPI)
      .then(function(response) {
          return response.json();
})
      .then(callback);
}

export default Body
