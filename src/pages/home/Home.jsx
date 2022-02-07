import React from 'react';
import Layout from '../../components/layout/Layout';
import HomeCategory from '../../components/homeCategory/HomeCategory';
import products from '../../utils/products.json';


class Home extends React.Component {
    constructor()
    {
        super();
        this.state={
            categories:[],
            categoryNames:[]
           
        };

    }
    componentDidMount(){

       const categories = Object.values(products);
       const categoryNames = Object.keys(products);
     //  console.log(categories);
     //  console.log(categoryNames);
      // this.setState({categories});
       this.setState({
           categories:categories,
           categoryNames:categoryNames         
       })
    }
    render(){
        
        return (
            <div >
                <Layout>
                    <div className="container"> 
                        <div className="row"> 
                        {
                            this.state.categories.map((category,index) =>{
                                return(
                                    <HomeCategory 
                                        key={index}                          
                                        description = {category.description}
                                        image={category.image}
                                        title={category.name}
                                        routeName={this.state.categoryNames[index]}
                                                       
                                    />
                                    )

                                    })                    
                        }                         
                        </div>
    
                    </div>                                                   
                </Layout>                              
            </div>
        )

    }
   
}

export default Home
