import React from 'react';
import Layout from '../components/Layout';
import {connect} from 'react-redux';

function Cart(props) {
    const { cartProducts } = props;
    return (  
        <div className="container">
            <Layout>
                <div className="container-fluid container-min-max-width">
                    <p>COS DE CUMPARATURI</p>
                    {
                        cartProducts.map((product) => {
                            return(
                                <div className="d-flex">
                                    <p className="w-50">{product.id}</p>
                                     <p className="w-50">{product.name}</p>
                                     <p className="w-50">{product.price}{product.currency}</p>
                                </div>
                            )
                        })
                    } 
               </div>
            </Layout>
        </div>
        
    )
}
function mapStateToProps(state){
    return{    
        cartProducts : state.cart.products      
    };
}

export default connect(mapStateToProps)(Cart);
