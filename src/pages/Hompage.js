import React from 'react';
import productData from '../data/products.json'
import ProductList from '../components/ProductList.component'
import Container from '@material-ui/core/Container';

const Hompage = (props) => {
 
    return (
       
        <div>
             <Container maxWidth="sm">
           <ProductList products={productData.products} />
            
           </Container>
  
        </div>
        
    );
    
}

export default Hompage;
