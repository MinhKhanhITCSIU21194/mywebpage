import React from 'react'
import Header from '../Components/Header'
import Lowbar from '../Components/Lowbar'
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import { useSelector } from 'react-redux'

export default function Cart() {
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
            <TableCell align="center">Total</TableCell>
          </TableRow>
        </TableHead>
      {Cart.map((product)=>
     <TableBody>
    
       <TableRow>
         <TableCell align="center">{product.Name}</TableCell>
          <TableCell align="center"><img src={product.img} alt={product.Name} style={{width:'100px'}}/></TableCell>
         <TableCell align="center">{product.Price}</TableCell>
         <TableCell align="center">{product.quantity}</TableCell>
         <TableCell align="center">{product.total}</TableCell>
       </TableRow>
   </TableBody>
      )}
    </table>
      
      
      <Lowbar/>
    </div>
  )
}
