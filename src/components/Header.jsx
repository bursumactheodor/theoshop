import React from 'react';
import { Link } from 'react-router-dom';
import logo from '../assets/images/logo.png';
import './Header.css';
import {ReactComponent as ShoppingCart} from '../assets/icons/shopping-cart.svg';
import {connect} from 'react-redux';
import {logOutUserGoogle,logOutUserFacebook} from '../store/actions/user';

function Header(props){
    const { numberOfProducts,user,logOutUserGoogle,logOutUserFacebook,signF,signG } = props; 

    return (
        <header className="border-bottom mb-3">
        <div className="container-fluid container-min-max-width d-flex justify-content-between align-items-center">
            <Link to="/" className="my-3">
                <img src={logo} alt="logo" className="logo"/>
            </Link>
            <div>
                {
                    user 
                    ? <p>Salut, {user.displayName}</p>
                    : null
                }
                <div className="d-flex justify-content-end" >
                    {
                        user 
                        ? <div>
                            {
                                 signG 
                                 ? <p className="logout h5" onClick={ () => logOutUserGoogle()}>Delogare</p>
                                 : null
                            }
                            {
                                signF 
                                ? <p className="logout h5" onClick={ () => logOutUserFacebook()}>Delogare</p>
                                : null  
                            }                         
                            
                          </div>
                         
                        : <Link  to="/login" className="h5 mb-0">Logare</Link>
                    }
                   
                    <div className="d-flex align-items-center">
                        <Link to="/cart" className="d-flex">
                            <ShoppingCart className="ml-2"/>
                            <p className="ml-1 mb-0">{numberOfProducts}</p>
                        </Link>
                    </div>
                    
                </div>
            </div>
        </div>
        </header>
    )
}
function mapStateToProps(state){
    return {
        numberOfProducts : state.cart.products.length,
        user:state.user.data,
        signF:state.user.signInFacebook,
        signG:state.user.signInGoogle

    };
}
function mapDispatchToProps(dispatch){
    return {
        logOutUserGoogle: () => dispatch(logOutUserGoogle()),
        logOutUserFacebook: () => dispatch(logOutUserFacebook()),

    }
}
export default connect(mapStateToProps,mapDispatchToProps)(Header);