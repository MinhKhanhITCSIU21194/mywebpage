import React, { useState } from 'react';
import { Box, Button, Container, TextField} from '@mui/material';
function Search({ handleInputChange, query }) {
  return (
    <div>
      <Button variant='contained' onChange={handleInputChange} value={query}
      sx={{
        width:'100%',
         margin:'2% 0',
         padding:'0'}
            }>Search</Button>
    </div>
  )
}

export default Search
