import React, { useState } from 'react';
import { Box, Button, Container, TextField, Typography, RadioGroup,FormControlLabel,Radio } from '@mui/material';


function Category({handleChange}) {
  return (
    <div>
      <Typography sx={{fontSize:'20px', fontWeight:'700', textAlign:'center',marginTop:'10%'}}>Categories</Typography>
              <RadioGroup
                aria-labelledby="demo-controlled-radio-buttons-group"
                name="controlled-radio-buttons-group"
                sx={{marginBottom:'10%'}}
                // value={value}
                onChange={handleChange}
              >
                <FormControlLabel value="1" control={<Radio />} label="Piano" handleChange={handleChange}/>
                <FormControlLabel value="2" control={<Radio />} label="Keyboard" handleChange= {handleChange}/>
                <FormControlLabel value="3" control={<Radio />} label="Equipments" handleChange={handleChange} />
              </RadioGroup>
    </div>
  )
}

export default Category
