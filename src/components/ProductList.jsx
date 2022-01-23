import React from 'react';
import ProductItem from './ProductItem';
import { Link } from 'react-router-dom';

function ProductList(props) {
    const {products}=props;

    return (
        <div className="container-fluid">
            <div className="row">
            {
            products 
            ? products.map((product)=>{
                return (
                    <ProductItem
                        key={product.id}
                        id={product.id}
                        name={product.name}
                        price={product.price}
                        currency={product.currency}
                        image={product.image}  
                        colour ={product.colour} 
                        motor ={product.motor} 
                        year={product.year}
                        description ={product.description}               
                    />
               
                )
            })
            :null
           } 

            </div>
            
        </div>
    )
}

export default ProductList
