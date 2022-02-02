import React from 'react';
import { connect } from 'react-redux';
import {addToCart} from '../store/actions/cart'
import { Link } from 'react-router-dom';
import './ProductItem.css';

function ProductItem(props) {
    const { id,name,price,currency,image,colour,motor,year,description } = props;
    const {addToCartInjected} = props;

    return (
        <div className="product-item col-12 col-md-6 d-flex flex-column align-items-center mb-3">
        <Link to={`/product/${id}`}>
            <img src={image} alt="produs" className="w-100"/>
            <p>{id}</p>
            <p>{name}</p>
        </Link>
            <p>{price}{" "}{currency}</p>
            <p>{year}</p>
            <p>{colour}{"-"}{motor}{"-"}{description}</p>
        
            <button 
                className="btn btn-outline-dark"
                onClick={()=>{
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
function mapDispatchToProps(dispatch){
    return {
        addToCartInjected : (payload) => dispatch(addToCart(payload))
    };
}

export default connect(null,mapDispatchToProps)(ProductItem);
