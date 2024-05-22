import React from 'react'
import { Typography } from '@mui/material'

function Section({Name}) {
  return (
    <div sx={{width:'100%'}}>
      <Typography sx={{
        fontSize:'35px',
        position:'relative',

        width:'100%',
        letterSpacing: '.5rem',
        marginLeft:'5%',
        marginTop:'2.5%',
        fontFamily:'Playfair Display'
            }}>
      {Name}
      </Typography>
    </div>
  )
}

export default Section
