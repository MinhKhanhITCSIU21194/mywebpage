
import { Button } from '@mui/material';
import {PRODUCTS} from '../../data/Data'
import React from 'react'
import Header from '../Components/Header';
import Section from '../Components/Section';
import Lowbar from '../Components/Lowbar';

function ProdBody() {
  return (
    <div>
      <Header/>
      <Section Name='Products'/>
      <div class="products" style={{display: 'flex', flexWrap: 'wrap', width:'100%', marginLeft:'5p%'}} > 
        {PRODUCTS.map((product) => (
            <span class="item" style={{width:'31%', margin:'10px'}}>
                <Button><img src={product.img} alt="Product" className="ProductImage" style={{width:'100%'}} /></Button>
                <div class="item-info" style={{textAlign:'center'}}>
                    <h2>{product.Name}</h2>
                    <h3>${product.Price}</h3>
                </div>
            </span>
        ))}
        </div>
        <Lowbar/>
    </div>
  )
}

export default ProdBody
