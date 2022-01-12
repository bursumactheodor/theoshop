import React from 'react';
import {useState,useEffect} from 'react';
import Layout from '../components/Layout';
import ProductList from '../components/ProductList';
import { useParams } from 'react-router-dom';
import products from '../utils/products.json';

function Category () {
    
    const routeParams = useParams();
    const routeParam=routeParams.categoryName;
    const categoryName=routeParams.categoryName;
  
   const [stateCateg, setStateCateg] = useState({  category:{}  });

    useEffect(() => {          
        if (Object.keys(stateCateg.category).length === 0 )
        {
            setStateCateg({category:products[categoryName]}); 
        }     
       });       
        return (
            <div className="container">
                <Layout>
                <h1>{stateCateg.category.name}</h1>
                <ProductList products={stateCateg.category.items}/>
                </Layout>
               
            </div>
        )
    
    
}

export default Category;
