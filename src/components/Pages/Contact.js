import React from 'react'
import Section from '../Components/Section'
import Header from '../Components/Header'
import Lowbar from '../Components/Lowbar'
import { Box, Typography } from '@mui/material'

export default function Contact() {
  return (
    <div>
        <Header/>
      <Section Name='Contact'/>
      <Box justifyContent={"center"} alignContent={"center"} display={'flex'} sx={{margin:'20px 0px', width:'50%', height:'500px'}}>
        <Typography
        sx={{fontSize: '20px', margin: '20px 10px'}}
        >Contact us to book an appointment or enquire for more information.
        <br></br>
        Call us on 0908274728 or email us at <a href="mailto:tinlun12344@gmail.com">tinlun12344@gmail.com</a>
        
        </Typography>
        

       </Box> 
      <Lowbar/>
      
    </div>
  )
}
