import React from 'react'

function ProductItem(props) {
    const {id,name,price,currency,image,colour,motor,year,description}=props;
    
    return (
        <div className="col-6">
            <img src={image} alt="produs" className="w-100"/>
            {/* <p>{id}</p> */}
            <p>{name}</p>
            <p>{price}{" "}{currency}</p>
            <p>{year}</p>
            <p>{colour}{"-"}{motor}{"-"}{description}</p>
            
        </div>
    )
}

export default ProductItem
