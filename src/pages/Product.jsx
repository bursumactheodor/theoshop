import React from 'react';
import {useState,useEffect} from 'react';
import { useParams } from 'react-router-dom';
import Layout from '../components/Layout';
import { connect } from 'react-redux';
import {addToCart} from '../store/actions/cart'
import products from '../utils/products.json';

function Product(props) {
   
    const{ addToCartInjected } = props;

    const routeParams = useParams();
    const productId = Number(routeParams.productId);
    const dataProducts = Object.values(products);

    function getProduct()
    {
        const cutProducts = dataProducts.map((elem) => {
            return  elem.items
          });

        let resultProducts=[];
        cutProducts.forEach((vector) => {
            resultProducts = [...resultProducts,...vector];
        });

        const selectProd = resultProducts.find((elem) => elem.id === productId );
        return selectProd;
    }
   
    const [productState, setProductState] = useState({  product:{}  });

    useEffect(() => { 
        const selectProd = getProduct();
        if(selectProd === undefined)
           return;
        if ( productState.product && Object.keys(productState.product).length === 0 )
        { 
            setProductState({product:selectProd}); 
           // console.log(selectProd);
           // console.log(productState.product);
        }     
       });  
  
 // const selectProd = getProduct();
 // const productState={product:selectProd};
    
    const {id,name,price,currency,image,colour,motor,year,description} = productState.product;
    return (
        
        <div className="container-fluid container-min-max-width">
                <Layout>
                    {
                        Object.keys(productState.product).length > 0
                        ? <div>
                            <h1>{name}</h1>
                            <div>
                                <img src={image} alt="produs"/>
                            </div>
                            <p>{price}{currency}</p>
                            <p>{colour}</p>
                            <p>{motor}</p>
                            <p>{year}</p>
                            <p>{description}</p>
                            <button 
                            className="btn btn-dark mt-3" 
                            onClick = { () => {addToCartInjected ({
                                    product:{
                                            id:id,
                                            name:name,
                                            price:price,
                                            currency:currency,
                                            image:image,
                                            colour:colour,
                                            motor:motor,
                                            year:year,
                                            description:description
                                    }
                                })
                            }
                        }                            
                                
                            >
                            Adauga in cos
                            </button>
                          </div>
                        
                        : <h1>{"Nu exista produsul!"}</h1>
                    }
                    
               
                </Layout>
               
            </div>
    )
}

function mapDispatchToProps(dispatch){
    return {
        addToCartInjected : (payload) => dispatch(addToCart(payload))
    };
}

export default connect(null,mapDispatchToProps)(Product);
