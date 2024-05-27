import React, { useState } from 'react';
import { Button } from '@mui/material';

import { Link } from 'react-router-dom';
import Header from '../Components/Header';
import Section from '../Components/Section';
import Lowbar from '../Components/Lowbar';
import AppPagination from '../Components/PaginationButton';


function ProdBody() {
  
const [products, setProducts] = useState([]);
  return (
    <div>
      <Header/>
      <Section Name='Products'/>
      <div class="products" style={{display: 'flex', flexWrap: 'wrap', width:'100%', marginLeft:'5p%'}} > 
        {products.map((product) => (
            <span class="item" style={{width:'31%', margin:'10px'}}>
                <Button
                component={Link}
                to={`/products/${product.ProductID}`}
                
                ><img src={product.img} alt="Product" className="ProductImage" style={{width:'100%'}} /></Button>
                <div class="item-info" style={{textAlign:'center'}}>
                    <h2>{product.Name}</h2>
                    <h3>${product.Price}</h3>
                </div>
            </span>
        ))}
        </div>
        <AppPagination setProducts={(p) => setProducts(p)}/>
        <Lowbar/>
        
    </div>
  )
}

export default ProdBody
