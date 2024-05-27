import React from 'react'
import { Button } from '@mui/material'
import { NavLink } from 'react-router-dom'
function Addtocart() {
  return (

      
    <div>
        <NavLink>
      <Button 
      sx=
    
      {{
        width:'100%',
        bgcolor:'#6d4c41',
        color:'white',
        fontSize:'20px',
        padding:'20px',
        '&:hover': {
            bgcolor:'#9e9e9e',
            color:'White',
            border: 'none', 
          }
      }} >Add to cart</Button>
      </NavLink>
      </div>
      

  )
}

export default Addtocart

