import React from 'react';
import { Route,Routes } from 'react-router-dom';
import './App.css';
import Home from './pages/Home';
import Login from './pages/Login';
import About from './pages/About';
import Page404 from './pages/Page404';


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

        <Route  path="*" element={<Page404/>} />
      </Routes>
            
     
          
      </div>
    )

  }

}
export default App;
