import React from 'react';
import { Route,Routes } from 'react-router-dom';
import './App.css';
import Home from './pages/home/Home';
import Login from './pages/login/Login';
import About from './pages/about/About';
import Category from './pages/category/Category';
import Page404 from './pages/page404/Page404';
import Cart from './pages/cart/Cart';
import Product from './pages/product/Product';
import Terms from './pages/terms/Terms';
import Favorites from './pages/favorites/Favorites';



class App extends React.Component {

constructor ()
{
  super();
  this.state={};
}
render(){
   return ( 
      <div>
      <Routes>
        <Route exact path="/" element={<Home/>} />
        <Route exact path="/home" element={<Home/>} />
        <Route exact path="/login" element={<Login/>} />
        <Route exact path="/about" element={<About/>} />
        <Route exact path="/terms" element={<Terms/>} />
        <Route exact path="/category/:categoryName" element={<Category/>} />
        <Route exact path="/cart" element={<Cart/>} />
        <Route exact path="/product/:productId" element={<Product/>} />
        <Route exact path="/favorites" element={<Favorites/>} />
        <Route  path="*" element={<Page404/>} />
      </Routes>      
      </div>
    )

  }

}
export default App;
