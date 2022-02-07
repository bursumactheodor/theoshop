import React from 'react';
import ProductItem from '../productItem/ProductItem';


function ProductList(props) {
    const { products } = props;
    const { pret0,pret1,pret2,pret3,an0,an1,an2 } = props;
    let  resultProducts=[];   
    
    function getProducts()
    {
        let  result = [];
        let  resultPrice = [];
        let  resultYear = [];

        let  resultPrice0 = [];
        let  resultPrice1 = [];
        let  resultPrice2 = [];
        let  resultPrice3 = [];
        let  resultYear0 = [];
        let  resultYear1 = [];
        let  resultYear2 = [];

        if((pret0 || pret1 || pret2 || pret3) === true)
        {
           // console.log("Cel putin un pret selectat!");
            if(pret0)
                resultPrice0 = products.filter((o)=>{return o.price > 100 && o.price <= 10000});
            if(pret1)
                resultPrice1 = products.filter((o)=>{return o.price > 10000 && o.price <= 20000});   
            if(pret2)    
                resultPrice2 = products.filter((o)=>{return o.price > 20000 && o.price <= 30000});  
            if(pret3)    
                resultPrice3 = products.filter((o)=>{return o.price > 30000 }); 
            
            resultPrice=[...resultPrice0,...resultPrice1,...resultPrice2,...resultPrice3]
        }
        else 
        {  
            //console.log("Nici un pret selectat!");
            // if (!pret0  &&  !pret1  && !pret2 && !pret3 === true)
            resultPrice = products;   
            
        }
        if((an0 || an1 || an2 ) === true)
        {
            //console.log("Cel putin un an selectat!");
            if(an0)
                resultYear0 = products.filter((o)=>{return o.year > 2010 && o.year <= 2015});
            if(an1)
                resultYear1 = products.filter((o)=>{return o.year > 2015 && o.year <= 2020});   
            if(an2)  
                resultYear2 = products.filter((o)=>{return o.year > 2020});
            
            resultYear = [...resultYear0,...resultYear1,...resultYear2];
        }
        else
        {
          //  console.log("Nici un an selectat!");
          // if(!an0  &&  !an1  && !an2  === true)
            resultYear = products ;
        }
        if(resultPrice !== undefined && resultYear !== undefined) 
        {  
            resultPrice.forEach((elem) => {    
                if (resultYear.includes(elem)) 
                { 
                    return  result.push(elem); 
                }
            }) 
        }

        return result;
    }

    resultProducts =  getProducts() ;
   // console.log(resultProducts);
  
    return (
        <div className="container-fluid">
            
            <div className="row">
            {
            resultProducts.length > 0
            ? resultProducts.map((product)=>{
                return (
                    <ProductItem
                        key={product.id}
                        id={product.id}
                        name={product.name}
                        price={product.price}
                        currency={product.currency}
                        image={product.image}  
                        colour ={product.colour} 
                        motor ={product.motor} 
                        year={product.year}
                        description ={product.description}               
                    />
               
                )
            })
            :<h3 className="text-center">Nu exista produse conform criteriilor!</h3>
           } 

            </div>
            
        </div>
    )
}

export default ProductList
