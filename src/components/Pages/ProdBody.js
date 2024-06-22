import React, { useState, useEffect } from 'react';
import { Box, Button, Container, TextField, Typography, RadioGroup,FormControlLabel,Radio } from '@mui/material';
import { Link } from 'react-router-dom';
import Header from '../Components/Header';
import Section from '../Components/Section';
import Lowbar from '../Components/Lowbar';
import AppPagination from '../Components/PaginationButton';
import Addtocart from '../Components/Products/Addtocart';
import { PRODUCTS } from '../../data/Data';



const ProdBody = () => {
  const [products, setProducts] = useState([PRODUCTS]); // Initialize with actual products data
  const [filteredProducts, setFilteredProducts] = useState([PRODUCTS]);
  const [selectedCategory, setSelectedCategory] = useState('');
  const [selectedPriceRange, setSelectedPriceRange] = useState('');

  useEffect(() => {
    filterProducts();
  }, [products, selectedCategory, selectedPriceRange]); // Add products to dependency array if PRODUCTS can change

  const handleChangeCategory = (event) => {
    setSelectedCategory(event.target.value);
  };

  const handleChangePriceRange = (event) => {
    setSelectedPriceRange(event.target.value);
  };

  const filterProducts = () => {
    let tempProducts = products;

    if (selectedCategory) {
      // Ensure property name matches. Example: 'category'
      tempProducts = tempProducts.filter(product => product.Category === selectedCategory);
    }

    if (selectedPriceRange) {
      switch (selectedPriceRange) {
        case '1':
          tempProducts = tempProducts.filter(product => product.Price >= 100 && product.Price <= 200);
          break;
        case '2':
          tempProducts = tempProducts.filter(product => product.Price >= 200 && product.Price <= 500);
          break;
        case '3':
          tempProducts = tempProducts.filter(product => product.Price >= 500 && product.Price <= 1000);
          break;
        case '4':
          tempProducts = tempProducts.filter(product => product.Price > 1000);
          break;
        default:
          break;
      }
    }

    setFilteredProducts(tempProducts);
  
  };
  return (
    <div>
      <Header/>
      <Section Name='Products'/>
    <Box disableGutters className='body' sx={{display:'flex', width:'100%',padding:'0px'}}>

      {/* This is for filter */}


      <Container  sx={{width:'18%', marginTop:'3%'}}>
          <TextField label='keybword' fullWidth size='small'/>
          <Button variant='contained' sx={{width:'100%', margin:'2% 0',padding:'0'}}>Search</Button>
          <Container sx={{width:'100%', margin:'2% 0',padding:'0'}}>

              <Typography sx={{fontSize:'20px', fontWeight:'700', textAlign:'center',marginTop:'10%'}}>Categories</Typography>
              <RadioGroup
                aria-labelledby="demo-controlled-radio-buttons-group"
                name="controlled-radio-buttons-group"
                sx={{marginBottom:'10%'}}
                // value={value}
                onChange={handleChangeCategory}
              >
                <FormControlLabel value="Piano" control={<Radio />} label="Piano" handleChangeCategory={handleChangeCategory}/>
                <FormControlLabel value="Keyboard" control={<Radio />} label="Keyboard" handleChangeCategory={handleChangeCategory}/>
                <FormControlLabel value="Equipments" control={<Radio />} label="Equipments" handleChangeCategory={handleChangeCategory}/>
              </RadioGroup>
              <Typography sx={{fontSize:'20px', fontWeight:'700', textAlign:'center'}}>Price</Typography>
              <RadioGroup
                aria-labelledby="demo-controlled-radio-buttons-group"
                name="controlled-radio-buttons-group"
                // value={value}
                onChange={handleChangePriceRange}
              >
                <FormControlLabel value="0" control={<Radio />} label="All" handleChangePriceRange={handleChangePriceRange} />
                <FormControlLabel value="1" control={<Radio />} label="100-200$" handleChangePriceRange={handleChangePriceRange}/>
                <FormControlLabel value="2" control={<Radio />} label="200-500$" handleChangePriceRange={handleChangePriceRange}/>
                <FormControlLabel value="3" control={<Radio />} label="500-1000$" handleChangePriceRange={handleChangePriceRange}/>
                <FormControlLabel value="4" control={<Radio />} label="Over 1000$" handleChangePriceRange={handleChangePriceRange}/>
              </RadioGroup>

          </Container>
      </Container>

    {/* This is for filter */}


    {/* This is for products */}
      <div class="products" style={{display: 'flex', flexWrap: 'wrap', width:'80%', }} > 
        {filteredProducts.map((product) => (
            <span class="item" style={{width:'31%', margin:'10px'}}>
                <Button
                component={Link}
                to={`/products/${product.id}`}
                sx={{height:'70%'}}
                ><img src={product.img} alt="product" className="productImage" style={{width:'100%'}} /></Button>
                <div class="item-info" style={{textAlign:'center', height:'30%'}}>
                    <h2>{product.Name}</h2>
                    <h3>${product.Price}</h3>
                    <Addtocart item1={product}/>
                </div>
            </span>
        ))}
        
        
        </div>
        
      {/* This is for products */}
    </Box>  
    <AppPagination setProducts={(p) => setProducts(p)}/>
        <Lowbar/>
        
    </div>
  )
}

export default ProdBody
