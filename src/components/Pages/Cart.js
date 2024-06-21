import React from 'react'
import Header from '../Components/Header'
import Lowbar from '../Components/Lowbar'
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import { useSelector } from 'react-redux'
import { Button } from '@mui/material';
import { Link } from 'react-router-dom';
import Delete from '../Components/Products/Delete';





export default function Cart() {
  let total = 0;
  const Cart = useSelector(state => state.cart.CartArr)
  return (
    <div>
      <Header/>
    <table width={'100%'}>
      <TableHead>
          <TableRow>
            <TableCell align="center">Name</TableCell>
            <TableCell align="center">Image</TableCell>
            <TableCell align="center">Price</TableCell>
            <TableCell align="center">Quantity</TableCell>
            <TableCell align="center"></TableCell>
            <TableCell align="center">Total</TableCell>
          </TableRow>
        </TableHead>
      {Cart.map((product)=>(
        total += product.total,
     <TableBody>
       <TableRow>
         <TableCell align="center">{product.Name}</TableCell>
          <TableCell align="center"><img src={product.img} alt={product.Name} style={{width:'100px'}}/></TableCell>
         <TableCell align="center">{product.Price}</TableCell>
         <TableCell align="center">{product.quantity}</TableCell>
         <TableCell align="center"><Delete item1={product}/></TableCell>
         <TableCell align="center">{product.total}</TableCell>
       </TableRow>
       
   </TableBody>
      ))}
      <TableRow>
            <TableCell align="center" sx={{fontSize:'Larger'}} colSpan={5}>Total</TableCell>
            <TableCell align="center">{total}</TableCell>
        </TableRow>
    </table>
      
      <Button 
          variant="contained" 
          color="primary"
          component={Link}
          to={'/Checkout'}
          style={{
            margin:'10px',
            width:'15%',
            marginLeft:'70.5%', 
            
            }}>Checkout</Button>
      <Lowbar/>
    </div>
  )
}
