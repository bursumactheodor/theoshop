import React from 'react';
import Layout from '../components/Layout';
import { useParams } from 'react-router-dom';

function Category () {
    
    const routeParams = useParams();
    const routeParam=routeParams.categoryName;
   // console.log(routeParam);
         
        return (
            <div className="container">
                <Layout>
                <h1>{routeParam}</h1>
                </Layout>
               
            </div>
        )
    
    
}

export default Category
