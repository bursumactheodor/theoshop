import React from 'react';
import { Link } from 'react-router-dom';

function HomeCategory(props){
    const {image,title,description,routeName}=props;
    //console.log(routeName);
    
    return (       
        <div className="col-4 mb-4">          
            <Link to={`/category/${routeName}`}>
                <img 
                className="img-thumbnail w-50"
                src={image}
                alt="car"
                />
                {/* <h2>{title}</h2>
                <p>{description}</p> */}
            </Link>           
        </div>
    )
}
export default HomeCategory;