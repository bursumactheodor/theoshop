import React from 'react';
import { connect } from 'react-redux';
import {addToCart} from '../store/actions/cart'

function ProductItem(props) {
    const { id,name,price,currency,image,colour,motor,year,description,addToCartInjected } = props;
    
    return (
        <div className="col-6">
            <img src={image} alt="produs" className="w-100"/>
            {/* <p>{id}</p> */}
            <p>{name}</p>
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
                                description:description
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
