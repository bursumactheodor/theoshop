import React from 'react';
import {useState,useEffect} from 'react';
import { useParams } from 'react-router-dom';
import Layout from '../components/Layout';
import { connect } from 'react-redux';
import {addToCart} from '../store/actions/cart'
import products from '../utils/products.json';

function Product(props) {
   
    const{ addToCartInjected } = props;

    const routeParams = useParams();
    const productId = Number(routeParams.productId);
    const dataProducts = Object.values(products);

    function getProduct()
    {
        const cutProducts = dataProducts.map((elem) => {
            return  elem.items
          });

        let resultProducts=[];
        cutProducts.forEach((vector) => {
            resultProducts = [...resultProducts,...vector];
        });

        const selectProd = resultProducts.find((elem) => elem.id === productId );
        return selectProd;
    }
   
    const [productState, setProductState] = useState({  product:{}  });

    useEffect(() => { 
        const selectProd = getProduct();
        if(selectProd === undefined)
           return;
        if ( productState.product && Object.keys(productState.product).length === 0 )
        { 
            setProductState({product:selectProd}); 
           // console.log(selectProd);
           // console.log(productState.product);
        }     
       });  
  
 // const selectProd = getProduct();
 // const productState={product:selectProd};
    
    const {id,name,price,currency,image,colour,motor,year,description} = productState.product;
    return (
        
        <div className="container-fluid container-min-max-width">
                <Layout>
                    {
                        Object.keys(productState.product).length > 0
                        ? <div>
                            <h1>{name}</h1>
                            <div>
                                <img src={image} alt="produs"/>
                            </div>
                            <p>{price}{currency}</p>
                            <p>{colour}</p>
                            <p>{motor}</p>
                            <p>{year}</p>
                            <p>{description}</p>
                            <button 
                            className="btn btn-dark mt-3" 
                            onClick = { () => {addToCartInjected ({
                                    product:{
                                            id:id,
                                            name:name,
                                            price:price,
                                            currency:currency,
                                            image:image,
                                            colour:colour,
                                            motor:motor,
                                            year:year,
                                            description:description,
                                            quantity:1
                                    }
                                })
                            }
                        }                            
                                
                            >
                            Adauga in cos
                            </button>
                          </div>
                        
                        : <h1>{"Nu exista produsul!"}</h1>
                    }
                    
               
                </Layout>
               
            </div>
    )
}

function mapDispatchToProps(dispatch){
    return {
        addToCartInjected : (payload) => dispatch(addToCart(payload))
    };
}

export default connect(null,mapDispatchToProps)(Product);

/*
import React from 'react';
import Layout from '../components/Layout';
import products from '../utils/products.json';
import './Product.css';
import { connect } from 'react-redux';
import { addToCart } from '../redux/actions/cart';

class Product extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            product: {}
        }
    }

    componentDidMount() {
        const { match } = this.props;
        const productId = match.params.productId;
        const categoryValues = Object.values(products);
        const productItems = categoryValues.reduce((acc, category) => {
            return [
                ...acc,
                ...category.items
            ]
        }, []);
        const currentProduct = productItems.find(product => {
            return Number(productId) === product.id;
        });
        this.setState({product: currentProduct});
    }

    render() {
        const { product} = this.state;

        return (
            <Layout>
                <div className="product-page container-fluid container-min-max-width">
                    <h1 className="my-5 h2">{product.name}</h1>
                    <div className="product-info d-flex">
                        <div className="image-wrapper d-flex mr-5">
                            <img src={product.image} alt="Product presentation"/>
                        </div>
                        <div className="product-details">
                            <p className="h3 text-danger">{product.price} {product.currency}</p>
                            <button
                                className="btn btn-dark mb-4 font-weight-bold"
                                onClick={() => {
                                    this.props.addToCart({
                                        product: {
                                            id: product.id,
                                            name: product.name,
                                            price: product.price,
                                            currency: product.currency,
                                            image: product.image
                                        }
                                    })
                                }}
                            >
                                Adaugă în coș
                            </button>
                            <p><span className="font-weight-bold">Mărime</span>: {product.size}</p>
                            <p><span className="font-weight-bold">Culoare</span>: {product.colour}</p>
                            <p><span className="font-weight-bold">Material</span>: {product.material}</p>
                            <p><span className="font-weight-bold">Brand</span>: {product.brand}</p>
                            <p className="font-weight-bold mb-1">Descriere:</p>
                            <p>{product.description}</p>
                        </div>
                    </div>
                </div>
            </Layout>
        );
    }
}

function mapDispatchToProps(dispatch) {
    return {
        addToCart: (payload) => dispatch(addToCart(payload))
    }
}

export default connect(null, mapDispatchToProps)(Product);


*/
