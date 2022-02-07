import React from 'react';
import {useState,useEffect} from 'react';
import { useParams } from 'react-router-dom';
import Layout from '../../components/layout/Layout';
import products from '../../utils/products.json';
import {ReactComponent as FullHeart} from '../../assets/icons/full-heart.svg';
import {ReactComponent as EmptyHeart} from '../../assets/icons/empty-heart.svg';
import {addToFavorites,removeFromFavorites} from '../../store/favorites/favoritesActions';
import {addToCart} from '../../store/cart/cartActions';
import { connect } from 'react-redux';
import './Product.css';

function Product(props) {
    const {addToCart,addToFavorites,removeFromFavorites} = props;
    const {idFavorites} = props;

    function addRemove(payload,option)
    {
        if(option) 
            removeFromFavorites(payload.product.id);
        else
            addToFavorites(payload);       
    }

    const routeParams = useParams();
    const productId = Number(routeParams.productId);
    const dataProducts = Object.values(products);


/*
    const productItems = categoryValues.reduce((acc, category) => {
            return [
                ...acc,
                ...category.items
            ]
    }, []);  
*/

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
          
        }     
       }); 
    
    const {id,name,price,currency,image,colour,motor,year,description} = productState.product;
   
   
    return (
            <Layout>
                <div className="product-page container-fluid container-min-max-width">
                    <div className="product-info d-flex">
                    {
                        Object.keys(productState.product).length > 0
                        ? <div>
                            <h1 className="my-3" >{name}</h1>
                            <div className="image-wrapper d-flex   mr-5">
                                <img src={image} alt="Product presentation"/>
                                <div className="add-to-favorites d-flex align-items-center" 
                                 onClick={ () => addRemove({
                                            product:{
                                                id:id,
                                                name:name,
                                                price:price,
                                                currency:currency,
                                                image:image,
                                                colour:colour,
                                                motor:motor,
                                                year:year,
                                                description:description,
                                                quantity:1
                                            }
                                            },idFavorites.includes(id))}
                            >    
                            {
                                idFavorites.includes(id) 
                                ? <FullHeart/>   
                                : <EmptyHeart/> 
                            } 
                             </div>
                            </div>
                            
                            
                            <div className="product-details">
                                <p className="h3 text-danger my-3">{price} {currency}</p>
                                <button 
                                    className="btn btn-dark mb-4 font-weight-bold" 
                                    onClick = { () => {addToCart ({
                                                product:{
                                                        id:id,
                                                        name:name,
                                                        price:price,
                                                        currency:currency,
                                                        image:image,
                                                        colour:colour,
                                                        motor:motor,
                                                        year:year,
                                                        description:description,
                                                        quantity:1
                                                }
                                            })
                                            }
                                        }                                 
                                >
                                Adauga in cos
                                </button>
                                <p><span className="font-weight-bold">An aparitie</span>: {year}</p>
                                <p><span className="font-weight-bold">Culoare</span>: {colour}</p>
                                <p><span className="font-weight-bold">Motor</span>: {motor}</p>
                             
                                <p className="font-weight-bold mb-1">Descriere:</p>
                                <p>{description}</p>
                            </div>
                        </div>                      
                        : <h1>{"Nu exista produsul!"}</h1>
                    } 
                    </div>
                </div> 
            </Layout>
        )
}

function mapStateToProps(state){
    return {
        idFavorites : state.favorites.products.map( elem => elem.id )
    };
}
function mapDispatchToProps(dispatch){
    return {
        addToCart : (payload) => dispatch(addToCart(payload)),
        addToFavorites : (payload) => dispatch(addToFavorites(payload)),
        removeFromFavorites : (payload) => dispatch(removeFromFavorites(payload)),
    };
}
export default connect(mapStateToProps,mapDispatchToProps)(Product);
