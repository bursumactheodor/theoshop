import React from 'react';
import { Link } from 'react-router-dom';
import logo from '../assets/images/logo.png';
import './Header.css';
import {ReactComponent as ShoppingCart} from '../assets/icons/shopping-cart.svg';
import {connect} from 'react-redux';


function Header(props){

    const {numberOfProducts}=props;

    return (
        <div className="header d-flex justify-content-between align-items-center container">
            <Link to="/">
                <img src={logo} alt="logo"/>
            </Link>
            <div>
                <Link to="/login">Login</Link>
                <Link to="/cart">
                    <ShoppingCart/>
                </Link>
                <p className="ml-1">{numberOfProducts}</p>
            </div>
           
             
            
        </div>
    )
}
function mapStateToProps(state){
    return {
        numberOfProducts : state.products.length
    };
}
export default connect(mapStateToProps)(Header);