import React from 'react';
import Layout from '../components/Layout';
import { Link } from 'react-router-dom';

function Terms(){
    return (
        <div>
            <Layout>
           
            <div className="container-fluid container-min-max-width d-flex flex-column ">
                <h1>Termeni si conditii</h1>
                <p>Datele continute sunt fictive si au fost luate aleator de pe internet! </p>
               
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


export default Terms;
