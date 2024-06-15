import React, { useState } from 'react';
import { Box, Button, Container, TextField, Typography, RadioGroup,FormControlLabel,Radio } from '@mui/material';
import { Link } from 'react-router-dom';
import Header from '../Components/Header';
import Section from '../Components/Section';
import Lowbar from '../Components/Lowbar';
import AppPagination from '../Components/PaginationButton';
import Addtocart from '../Components/Addtocart';
import { PRODUCTS } from '../../data/Data';
import { Category } from '@mui/icons-material';



function ProdBody() {
  
const [products, setProducts] = useState([]);
const [selectedCategory, setSelectedCategory] = useState(null);
// -----------inputFilter ------------
const [query, setQuery] = useState('');
const handleInputChange = (e) => {
  setQuery(e.target.value);
}
const filteredItems = PRODUCTS.filter((PRODUCTS=>PRODUCTS.Name.toLocaleLowerCase().indexOf(query.toLocaleLowerCase()!== -1)));
// -----------inputFilter ------------

//-----------------RadioFilter----------------

const handleChange= (e) => {
  setSelectedCategory(e.target.value);
}


}
//-----------------RadioFilter----------------

const handleClick = event => {
  setSelectedCategory(event.target.value);
}
function filterdData(products, selected, query) {
  let filteredProducts = products;
  if (query) {
    filteredProducts = filteredItems;
  }
  if (selected) {
    filteredProducts = filteredProducts.filter((product) => product.Category === selected || product.Price === selected);
  }
}

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
                onChange={handleChange}
              >
                <FormControlLabel value="1" control={<Radio />} label="Piano" />
                <FormControlLabel value="2" control={<Radio />} label="Keyboard" />
                <FormControlLabel value="3" control={<Radio />} label="Equipments" />
              </RadioGroup>
              <Typography sx={{fontSize:'20px', fontWeight:'700', textAlign:'center'}}>Price</Typography>
              <RadioGroup
                aria-labelledby="demo-controlled-radio-buttons-group"
                name="controlled-radio-buttons-group"
                // value={value}
                onChange={handleChange}
              >
                <FormControlLabel value="1" control={<Radio />} label="All" />
                <FormControlLabel value="1" control={<Radio />} label="100-200$" />
                <FormControlLabel value="2" control={<Radio />} label="200-500$" />
                <FormControlLabel value="3" control={<Radio />} label="500-1000$" />
                <FormControlLabel value="3" control={<Radio />} label="Over 1000$" />
              </RadioGroup>

          </Container>
      </Container>

    {/* This is for filter */}


    {/* This is for products */}
      <div class="products" style={{display: 'flex', flexWrap: 'wrap', width:'80%', }} > 
        {products.map((product) => (
            <span class="item" style={{width:'31%', margin:'10px'}}>
                <Button
                component={Link}
                to={`/products/${product.id}`}
                sx={{height:'70%'}}
                ><img src={product.img} alt="Product" className="ProductImage" style={{width:'100%'}} /></Button>
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
