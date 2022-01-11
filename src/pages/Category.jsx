import React from 'react';
import {useState,useEffect} from 'react';
import Layout from '../components/Layout';
import ProductList from '../components/ProductList';
import { useParams } from 'react-router-dom';
import prducts from '../utils/products.json';

function Category () {
    
    const routeParams = useParams();
    const routeParam=routeParams.categoryName;
   
    const [count, setCount] = useState(0);
    useEffect(() => {
        // Update the document title using the browser API
        document.title = `You clicked ${count} times`;
      });

      return (
        <div>
        <Layout>
          <h1>{routeParam}</h1>
          <p>You clicked {count} times</p>
          <button onClick={() => setCount(count + 1)}>
            Click me
          </button>
          </Layout>
        </div>
      );

/*


function Example() {
  

  // Similar to componentDidMount and componentDidUpdate:
  

  
}
*/

   // console.log(routeParam);
   /*
    constructor(props){
        super(props);
        this.state={
            category:{}
        }
    }
    componentdiMount(){

        console.log(this.state);
        const {match}=props;
        const categoryName=match.params.categoryName;
        this.setState({category:products[ategoryName]});

        render(){
            return (
                    <div className="container">
                        <Layout>
                        <div className="container-fluid container-min-max-width ">
                        <h2>{this.state.category.name}</h2>
                        </div>
                        <h1>{routeParam}</h1>
                        </Layout>
                    
                    </div>
        )

        }
    }
   */
      /*   
        return (
            <div className="container">
                <Layout>
                <h1>{routeParam}</h1>
                </Layout>
               
            </div>
        )
    */
    
}

export default Category
