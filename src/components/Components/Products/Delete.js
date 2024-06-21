import React from 'react'
import {AddProd, DeleteProd} from '../../../Redux/slice/cartslice'
import { Box, Button, Container, TextField, Typography, RadioGroup,FormControlLabel,Radio } from '@mui/material'
import { useDispatch, useSelector } from 'react-redux'

function Delete({item1}) {
    const dispatch = useDispatch()
    const CartProducts = useSelector(state => state.cart.CartArr)
    console.log(CartProducts)
  return (
    <div>
      <Button 
      onClick={() => dispatch(DeleteProd(item1))}
      sx=
    
      {{
        width:'20%',
        height:'5%',
        bgcolor:'#b71c1c',
        color:'white',
        fontSize:'10px',
        padding:'10px',
      }} >Delete</Button>
    </div>
  )
}

export default Delete
