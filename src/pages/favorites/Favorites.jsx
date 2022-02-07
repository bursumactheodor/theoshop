import React from 'react';
import { Link } from 'react-router-dom';
import {ReactComponent as Close} from '../../assets/icons/close.svg';
import Layout from '../../components/layout/Layout';
import {connect} from 'react-redux';
import { removeFromFavorites } from '../../store/favorites/favoritesActions';
import { addToCart } from '../../store/cart/cartActions';
import './Favorites.css';

function Favorites(props) {
  const { favoritesProducts } = props;
  const {removeFromFavorites,addToCart} = props;


  return ( 
    <Layout>
        <div className="cart-page container-fluid container-min-max-width d-flex flex-column justify-content-center align-items-center">
            {
                favoritesProducts.length > 0 
                ? <div className="w-100 ">
                        <div className="d-flex justify-content-start  align-items-end  h4 text-center border-bottom">
                            <h3>Favorite</h3>  <h4>-</h4> <h4>{favoritesProducts.length}{" produse"} </h4>
                        </div>
                        {
                         favoritesProducts.map(product => {
                         return (
                                <div key={product.id} className="d-flex justify-content-between align-items-center text-center border-bottom">
                                  <div  className="w-50 d-flex flex-column justify-content-center align-items-center">
                                         <img src={product.image} alt="Produs"/>
                                         <p>{ product.name }</p> 
                                  </div>
                                   <div className=" d-flex justify-content-center flex-column">
                                        <div >
                                          <p className="text-center mb-3">{ product.price } { product.currency }</p>
                                        </div>
                                        <button 
                                            className="btn btn-dark mb-3"
                                            onClick = { () => {addToCart({
                                                    product:{
                                                            id:product.id,
                                                            name:product.name,
                                                            price:product.price,
                                                            currency:product.currency,
                                                            image:product.image,
                                                            colour:product.colour,
                                                            motor:product.motor,
                                                            year:product.year,
                                                            description:product.description,
                                                            quantity:1
                                                    }
                                                   })
                                                  }
                                              }                              
                                        >
                                        Adauga in cos
                                        </button>
                                        <div  className="mb-3" onClick={() => removeFromFavorites(product.id)}>
                                            <Close />
                                        </div>
                                 </div>
                              </div>
                         )
                        })                                  
                    }
                   
                </div>
                : <div className="d-flex flex-column align-items-center">
                    <p className="h3">Nu ai adaugat nici un produs in lista de favorite!</p>
                    <Link to="/"><button className="btn btn-outline-dark">Inapoi la home</button></Link>
                </div>
            } 
       </div>
    </Layout>


)
  
}

function mapStateToProps(state){
  return {    
      favoritesProducts : state.favorites.products      
  };
}

function mapDispatchToProps(dispatch){
  return {
      removeFromFavorites: (payload) => dispatch(removeFromFavorites(payload)),
      addToCart: (payload) => dispatch(addToCart(payload))
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(Favorites);






