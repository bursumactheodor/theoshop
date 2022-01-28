import React from 'react';
import {Link} from 'react-router-dom';


function Page404() {
    return (
        <div>
           
            <div className="container-fluid container-min-max-width d-flex flex-column ">
                <h1>Eroare 404! Nu exista pagina cautata! </h1>
               
                <Link to='/'>
                    <button  className="btn btn-outline-dark ">
                      Inapoi la Home  
                    </button>  
                </Link>
            </div>
          
            
        </div>
    )
}

export default Page404
