import React from 'react';
import Layout from '../../components/layout/Layout';
import { Link } from 'react-router-dom';

function About(){
    return (
        <div>
            <Layout>
           
            <div className="container-fluid container-min-max-width d-flex flex-column ">
                <h1>Despre</h1>
                <h3>Magazin online </h3>
                <p>Aici puteti gasi cele mai bune oferte! </p>
               
                <Link to='/'>
                    <button  className="btn btn-outline-dark ">
                      Inapoi la Home  
                    </button>  
                </Link>
            </div>
            </Layout>
            
        </div>
    )
}
export default About;