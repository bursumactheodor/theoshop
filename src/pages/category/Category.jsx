import React from 'react';
import {useState,useEffect} from 'react';
import Layout from '../../components/layout/Layout';
import BaseListSidebar from '../../components/baseListSidebar/BaseListSidebar';
import ProductList from '../../components/productList/ProductList';
import { useParams } from 'react-router-dom';
import products from '../../utils/products.json';
import './Category.css';

function Category () {
    
    const routeParams = useParams();
    const categoryName=routeParams.categoryName;
   
    const [stateCateg, setStateCateg] = useState({  category:{}  });
    const [pret0,setPret0] = useState(false);
    const [pret1,setPret1] = useState(false);
    const [pret2,setPret2] = useState(false);
    const [pret3,setPret3] = useState(false);
    const [an0,setAn0] = useState(false);
    const [an1,setAn1] = useState(false);
    const [an2,setAn2] = useState(false);
  
    useEffect(() => {   
            if (stateCateg.category && Object.keys(stateCateg.category).length === 0  )
            {
                setStateCateg({category:products[categoryName]}); 
            }     
       }); 
   
        return (
            <div className="container-fluid container-min-max-width">
                <Layout>
                    <div className="container-fluid  d-flex flex-row justify-content-start category-page">
                        <div >                   
                        {
                            stateCateg.category 
                            ? <BaseListSidebar 
                                setPret0 = {setPret0}
                                setPret1 = {setPret1}
                                setPret2 = {setPret2}
                                setPret3 = {setPret3}
                                setAn0 = {setAn0}
                                setAn1 = {setAn1}
                                setAn2 = {setAn2}
                                pret0 = {pret0}
                                pret1 = {pret1}
                                pret2 = {pret2}
                                pret3 = {pret3}
                                an0 = {an0}
                                an1 = {an1}
                                an2 = {an2}
                            />                             
                            : null
                        } 
                        </div> 
                        <div className="container-fluid  d-flex flex-column justify-content-center ">
                            <div>   
                            {
                                stateCateg.category
                                ? <h1 className="text-center"> {stateCateg.category.name} </h1>
                                : <h1 className="text-center"> {"Marca nu exista!"} </h1>
                            }  
                            </div>       
                            <ProductList 
                                pret0 = {pret0}
                                pret1 = {pret1}
                                pret2 = {pret2}
                                pret3 = {pret3}
                                an0 = {an0}
                                an1 = {an1}
                                an2 = {an2}
                                products = {
                                    stateCateg.category 
                                    ?  stateCateg.category.items                                
                                    : null
                                }
                            /> 
                        </div> 
                    </div>             
                </Layout>
               
            </div>
        )
    
    
}

export default Category;
