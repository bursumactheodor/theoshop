import React from 'react';
import { Link } from 'react-router-dom';

function HomeCategory(props){
    const {image,routeName}=props;
    //console.log(routeName);
    
    return (       
        <div className="col-12 col-md-4 mb-3">          
            <Link to={`/category/${routeName}`}>
                <img 
                className="img-thumbnail w-50"
                src={image}
                alt="car"
                />
               
            </Link>           
        </div>
    )
}
export default HomeCategory;