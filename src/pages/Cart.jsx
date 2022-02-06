import React from 'react';
import Layout from '../components/Layout';
import {connect} from 'react-redux';
import { ReactComponent as Close} from '../assets/icons/close.svg';
import { Link } from 'react-router-dom';
import { removeFromCart } from '../store/actions/cart';
import './Cart.css';

function Cart(props) {

    const { cartProducts } = props;
    const {removeFromCart} = props;

    const totalSuma2  =  (vector) => {
     return vector.reduce ( (acc,elem) => {
        return acc + elem.price * elem.quantity;
        }, 0 )
    }
    // function totalSuma(vector) {
    //     let sum=0;
    //     vector.forEach((elem) => {
    //     sum += elem.quantity * elem.price;
    //     })
    // return sum;
    // }

 function groupById(vector)
{
    const result = [];
    let id = 0;
    let k = 0;
    
    const products = vector.map((elem) =>{return {
        id:elem.id,
        name:elem.name,
        price:elem.price,
        currency:elem.currency,
        image:elem.image,
        colour:elem.colour,
        motor:elem.motor,
        year:elem.year,
        description:elem.description,
        quantity:elem.quantity
  }} );

  products.sort((a,b) => a.id - b.id);
  products.forEach((elem) => {
        
   if(elem.id !== id)
   {
       result.push(elem);
       k = k + 1;
       id = elem.id;  
    }
    else
    {
       result[k-1].quantity = result[k-1].quantity + 1;
    }
  });
  return result;
}
    
    return ( 
            <Layout>
                
                            
                <div className="cart-page container-fluid container-min-max-width d-flex flex-column justify-content-center align-items-center">                     
                    {
                        cartProducts.length > 0 
                        ? <div className="w-100">
                                <div className="ml-3 pd-3 cart-page container-fluid container-min-max-width d-flex justify-content-start border-bottom">
                                    <h4>Cosul meu:</h4>
                                </div> 
                                <div className="d-flex justify-content-between text-center h4 text-bold">
                                    <p className="w-25">Produs</p>
                                    <p className="w-25">Pret</p>
                                    <p className="w-25">Cantitate</p>
                                    <p className="w-25">Total</p>
                                </div>
                                {
                                 groupById(cartProducts).map(product => {
                                 return (
                                        <div key={product.id} className="d-flex justify-content-between align-items-center text-center">
                                            <div  className="w-25 d-flex flex-column justify-content-center align-items-center">
                                                 <img src={product.image} alt="Produs"/>
                                                 <p>{ product.name }</p> 
                                           </div>
                                           <p className="w-25">{ product.price } { product.currency }</p>
                                           <p className="w-25">{ product.quantity }</p>
                                           <div className="w-25 d-flex justify-content-center">
                                                <p className="mr-2">{ product.price * product.quantity } { product.currency }</p>
                                                <div onClick={() => removeFromCart(product.id)}>
                                                    <Close />
                                                </div>
                                         </div>

                                        </div>
                                 )
                                 
                                })                               
                                
                            }
                            <div className="d-flex justify-content-end border-top">
                                <div className="w-25 d-flex align-items-center justify-content-center">
                                    <p className="my-4 text-center font-weight-bold">Total de plată: </p>
                                </div>
                                <div className="w-25">
                                    <p className="my-4 text-center">
                                        { totalSuma2(cartProducts)}  {cartProducts[0].currency}
                                    </p>
                                </div>
                            </div> 
                        </div>
                        : <div className="d-flex flex-column align-items-center">
                            <p className="h3">Nu ai produse în coș!</p>
                            <Link to="/"><button className="btn btn-outline-dark">Inapoi la home</button></Link>
                        </div>
                    } 
               </div>
            </Layout>
      
        
    )
}
function mapStateToProps(state){
    return {    
        cartProducts : state.cart.products      
    };
}

function mapDispatchToProps(dispatch){
    return {
        removeFromCart: (payload) => dispatch(removeFromCart(payload))
    };
}

export default connect(mapStateToProps, mapDispatchToProps)(Cart);

