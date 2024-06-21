import React, { useState } from 'react';
import Header from '../Components/Header';
import Lowbar from '../Components/Lowbar';
import { Button, Container, TableCell, TableRow, TextField, Box, Typography, Table, TableBody} from '@mui/material';
import { useSelector } from 'react-redux';

const Checkout = () => {
    let total = 0;
    const cart = useSelector(state => state.cart.CartArr);
    const [cardDetails, setCardDetails] = useState({
    cardNumber: '',
    expiryDate: '',
    cvv: '',
    cardHolder: '',
    address: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setCardDetails(prevState => ({
      ...prevState,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Add your payment processing logic here
    console.log(cardDetails);
    alert('Payment Successful!');
  };

  return (
    <div>
          <Header />
          <Box sx={{ display: 'flex', flexDirection: 'row', justifyContent: 'space-between', width: '100%' }}>
             <Box sx={{ display: 'flex', flexDirection: 'row', justifyContent: 'space-between', width: '100%' }}>
                 <Box
                    sx={{
                  backgroundColor: 'rgba(255, 255, 255, 0.8)',
                  padding: '20px',
                  borderRadius: '8px',
                  zIndex: 1,
                  

              }}
          >
              <Typography
                  component="h1"
                  variant="h5"
                  sx={{
                      fontWeight: 700,
                      fontSize: '30px',
                      fontFamily: 'Playfair Display, serif',
                      textAlign: 'center',
                      margin: '15px 0',
                  }}
              >
                  Checkout
              </Typography>
              <form onSubmit={handleSubmit}>
                  <TextField
                      variant="outlined"
                      margin="normal"
                      required
                      fullWidth
                      id="Holder"
                      label="Full Name"
                      name="Holder"
                      value={cardDetails.cardHolder}
                      onChange={handleChange}
                      autoComplete="name"
                      autoFocus
                      sx={{ marginBottom: '10px' }} />
                  <TextField
                      variant="outlined"
                      margin="normal"
                      required
                      fullWidth
                      id="Number"
                      label="Card Number"
                      name="Number"
                      value={cardDetails.cardNumber}
                      onChange={handleChange}
                      autoComplete="email"
                      sx={{ marginBottom: '10px' }} />
                  <TextField
                      variant="outlined"
                      margin="normal"
                      required
                      fullWidth
                      id="cvv"
                      label="CVV"
                      name="cvv"
                      value={cardDetails.cvv}
                      onChange={handleChange}
                      autoComplete="cvv"
                      sx={{ marginBottom: '10px' }} />
                <TextField
                      variant="outlined"
                      margin="normal"
                      required
                      fullWidth
                      id="ExpiryDate"
                      label="Expiry Date"
                      name="ExpiryDate"
                      value={cardDetails.expiryDate}
                      onChange={handleChange}
                      type="date"
                      InputLabelProps={{ shrink: true }}
                      sx={{ marginBottom: '10px' }} />
                <TextField
                        variant="outlined"
                        margin="normal"
                        required
                        fullWidth
                        id="address"
                        label="Address"
                        name="address"
                        value={cardDetails.address}
                        onChange={handleChange}
                        autoComplete="address"
                        sx={{ marginBottom: '10px' }} />
                        
                  <Button
                      type="submit"
                      fullWidth
                      variant="contained"
                      sx={{
                          backgroundColor: '#333',
                          color: '#fff',
                          '&:hover': {
                              backgroundColor: '#555',
                          },
                      }}
                  >
                      Buy Now
                  </Button>


                  {/* Continue with the rest of your form elements */}
              </form>
            <Box sx={{ width: '50%', display: 'flex' }}></Box></Box>
    <Table>
        <TableBody>
            {cart.map((product) => (
                total += product.total,
                <TableRow key={product.id} sx={{ width: '100%' }}> {/* Ensure each product has a unique key */}
                    <TableCell align="center">{product.Name}</TableCell>
                    <TableCell align="center">
                        <img src={product.img} alt={product.Name} style={{ width: '100px' }} />
                    </TableCell>
                    <TableCell align="center">{product.Price}</TableCell>
                    <TableCell align="center">{product.quantity}</TableCell>
                    <TableCell align="center">{product.total}</TableCell>
                </TableRow>
                
            ))}
            <TableRow>
                    <TableCell align="center" sx={{fontSize:'Larger'}} colSpan={4}>Total</TableCell>
                    <TableCell align="center">{total}</TableCell>
            </TableRow>
                </TableBody>
             </Table>
            </Box>
            </Box>
            <Lowbar/>
    </div>
    
  );
};

export default Checkout;