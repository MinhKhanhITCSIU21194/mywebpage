
import React, { useState } from 'react';
import { Box, Button, Container, TextField, Typography, RadioGroup,FormControlLabel,Radio } from '@mui/material';

function Price({handleChange}) {
  return (
    <div>
       <Typography sx={{fontSize:'20px', fontWeight:'700', textAlign:'center'}}>Price</Typography>
              <RadioGroup
                aria-labelledby="demo-controlled-radio-buttons-group"
                name="controlled-radio-buttons-group"
                // value={value}
                onChange={handleChange}
              >
                <FormControlLabel value="0" control={<Radio />} label="All" handleChange={handleChange}/>
                <FormControlLabel value="1" control={<Radio />} label="100-200$" handleChange={handleChange}/>
                <FormControlLabel value="2" control={<Radio />} label="200-500$" handleChange={handleChange}/>
                <FormControlLabel value="3" control={<Radio />} label="500-1000$" handleChange={handleChange} />
                <FormControlLabel value="4" control={<Radio />} label="Over 1000$" handleChange={handleChange}/>
              </RadioGroup>
    </div>
  )
}

export default Price
