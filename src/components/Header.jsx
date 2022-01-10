import React from 'react';
import { Link } from 'react-router-dom';
import logo from '../assets/images/logo.png';
import './Header.css';
import {ReactComponent as ShoppingCart} from '../assets/icons/shopping-cart.svg';


function Header(){

    return (
        <div className="header d-flex justify-content-between align-items-center container">
            <Link to="/">
                <img src={logo} alt="logo"/>
            </Link>
            <div>
                <Link to="/login">Login</Link>
                <ShoppingCart/>
            </div>
            
        </div>
    )
}
export default Header;