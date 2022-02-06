import React from 'react';
import { connect } from 'react-redux';
import {addToCart} from '../store/actions/cart';
import {addToFavorites,removeFromFavorites} from '../store/actions/favorites';
import { Link } from 'react-router-dom';
import './ProductItem.css';
import {ReactComponent as FullHeart} from '../assets/icons/full-heart.svg';
import {ReactComponent as EmptyHeart} from '../assets/icons/empty-heart.svg';

function ProductItem(props) {
    const { id,name,price,currency,image,colour,motor,year,description } = props;
    const {addToCartInjected,addToFavorites,removeFromFavorites} = props;
    const {idFavorites} = props;
   
function addRemove(payload,option)
{
    if(option) 
        removeFromFavorites(payload.product.id);
    else
        addToFavorites(payload);       
}

    return (
        <div className="product-item col-12 col-md-6 d-flex flex-column align-items-center mb-3">
            <Link to={`/product/${id}`}>
                    <img src={image} alt="produs" className="w-100"/>
                    <p >{name}</p>
            </Link>
            <div 
                className="add-to-favorites d-flex flex-row align-items-center" 
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
            <p>{price}{" "}{currency}</p>
            <button 
                className="btn btn-outline-dark"
                onClick={() => {
                        addToCartInjected({
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
            
        </div>
    )
}

function mapStateToProps(state){
    return {
        idFavorites : state.favorites.products.map( elem => elem.id )
    };
}

function mapDispatchToProps(dispatch){
    return {
        addToCartInjected : (payload) => dispatch(addToCart(payload)),
        addToFavorites : (payload) => dispatch(addToFavorites(payload)),
        removeFromFavorites : (payload) => dispatch(removeFromFavorites(payload)),
    };
}

export default connect(mapStateToProps,mapDispatchToProps)(ProductItem);
