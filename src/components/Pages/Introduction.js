import React from 'react'
import Header from '../Components/Header';
import Section from '../Components/Section';
import { Introduction1 } from '../../data/Data';
import { Typography } from '@mui/material';
import Lowbar from '../Components/Lowbar';

function IntroductionComponent() {
  return (
    <div>
      <Header/>
    <Section Name='Introduction'/>
    <div className='Body'>
      {Introduction1.map((item) =>(
        <div className='IntroSec' style={{ width:'100%'}}>
          <Typography sx={{
            fontWeight: 700,
          fontSize: '30px', 
          fontFamily:'Playfair Display',
          textAlign:'center',
          margin:'15px'
          }}>
            {item.Name}
          </Typography>
          <Typography
          sx={{
            textAlign:'center',
            width:'70%',
            margin: '20px auto',
            marginBottom:'50px'

          }}>
            {item.Description}
          </Typography>
        </div>

      )
    ) 
    }

    </div>
    <Lowbar/>

    </div>
  )
}

export default IntroductionComponent
