import React from 'react'
import { Button } from '@mui/material'
import { NavLink } from 'react-router-dom'
import { useSelector, useDispatch } from 'react-redux'
import {AddProd, DeleteProd} from '../../../Redux/slice/cartslice'

function Addtocart({item1}) {
  
  const dispatch = useDispatch()
  const CartProducts = useSelector(state => state.cart.CartArr)
  console.log(CartProducts)
  

  return (
    <div>
      <Button 
      onClick={() => dispatch(AddProd(item1))}
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

      </div>
      
      

  )
}

export default Addtocart

