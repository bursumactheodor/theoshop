import React from 'react';
import {useState,useEffect} from 'react';
import Layout from '../components/Layout';
import BaseListSidebar from '../components/BaseListSidebar';
import ProductList from '../components/ProductList';
import { useParams } from 'react-router-dom';
import products from '../utils/products.json';

function Category () {
    
    const routeParams = useParams();
    const categoryName=routeParams.categoryName;
  
  const [stateCateg, setStateCateg] = useState({  category:{}  });

    useEffect(() => {   
            if (stateCateg.category && Object.keys(stateCateg.category).length === 0  )
            {
                setStateCateg({category:products[categoryName]}); 
            }     
       }); 
   
 //   const stateCateg = {category:products[categoryName]};
        return (
            <div className="container-fluid container-min-max-width">
                <Layout>
                        {
                            stateCateg.category 
                            ? <div>
                                    <h1> {stateCateg.category.name} </h1>
                                    <BaseListSidebar/> 
                              </div>
                            : <h1> {"Marca nu exista!"} </h1>
                        } 
                               
                    <ProductList 
                        products = {
                            stateCateg.category 
                            ? stateCateg.category.items
                            : null
                        }
                    />               
                </Layout>
               
            </div>
        )
    
    
}

export default Category;
