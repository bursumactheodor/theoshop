import React from 'react'

function ProductItem(props) {
    const {id,name,price,currency,image}=props;
    return (
        <div>
            <img src={image} alt="produs"/>
            <p>{id}</p>
            <p>{name}</p>
            <p>{price}{"-"}{currency}</p>
        </div>
    )
}

export default ProductItem
