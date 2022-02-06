import React from 'react';
import { Route,Routes } from 'react-router-dom';
import './App.css';
import Home from './pages/Home';
import Login from './pages/Login';
import About from './pages/About';
import Category from './pages/Category';
import Page404 from './pages/Page404';
import Cart from './pages/Cart';
import Product from './pages/Product';
import Terms from './pages/Terms';
import Favorites from './pages/Favorites';



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
