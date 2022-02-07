import React from 'react';
import Header from '../header/Header';
import Footer from '../footer/Footer';
import './Layout.css';

function Layout(props) {
    
    return (
        <div>
           <Header/> 
           {props.children}
           <Footer/>
        </div>
    )
}

export default Layout;
