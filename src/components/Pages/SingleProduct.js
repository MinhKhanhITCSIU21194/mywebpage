import React from 'react'
import Header from '../Components/Header'
import Lowbar from '../Components/Lowbar'
import { Container, Typography } from '@mui/material'
import { PRODUCTS } from '../../data/Data'
import { useParams } from 'react-router-dom'

import Addtocart from '../Components/Addtocart'


function SingleProduct() {
    const {id} = useParams();
    const prod = PRODUCTS.find(item => item.ProductID === Number(id));
  return (
    <div>
      <Header/>
      <Container className='Body' sx={{width:'100%', margin:'none',}}>
      <Container className='Toppart'sx={{borderBottom:'solid 1px', marginBottom:'5%',marginTop:'5%',width:'100%', height:'60%',maxWidth:false}}>
          
          <div key={prod.id} style={{display:'flex',width:'100%',marginBottom:'5%'}}>
            <Container sx={{width:'40%',height:'50%', justifyContent:'center', alignItems:'center'}}>
              <img src={prod.img} alt={prod.Name} style={{width:'120%',height:'100%',border:'solid 0.5px'}} />
              </Container> 
            <Container  allignContent={'center'}  sx={{width:'60%',justifyContent:'center', display:'flex',alignItems:'center',flexDirection:'column'}}>  
            <Typography sx={{fontFamily:'Playfair Display', fontWeight:'700', fontSize:'40px'}}>{prod.Name}</Typography>
              <Typography sx={{margin:'5%',fontSize:'40px'}}>{prod.Price}$</Typography>
              <Addtocart item1={prod}/>
            </Container>
          </div>
        
      </Container>

      <Container className='BottomPart' allignContent={'center'} sx={{height:'40%',width:'60%',position:'relative',justifyContent:'center'}}>
              <Typography>{prod.Description}</Typography>
              <img src={prod.img1} alt={prod.Name} style={{height:'25%',width:'100%'}}/>
              <img src={prod.img2} alt={prod.Name} style={{height:'25%',width:'100%'}}/>
              <img src={prod.img3} alt={prod.Name} style={{height:'25%',width:'100%'}}/>
              <img src={prod.img4} alt={prod.Name} style={{height:'25%',width:'100%'}}/>
      </Container>
      </Container>
      <Lowbar/>
    </div>
  )
}

export default SingleProduct
