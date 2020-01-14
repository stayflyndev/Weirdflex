import React from 'react';
import productData from '../data/products.json'
import ProductList from '../components/ProductList.component'
import Container from '@material-ui/core/Container';

const Hompage = (props) => {
 
    return (
        <Container maxWidth="sm">
        <div>
           <ProductList productData={productData.products} />
            
            
        </div>
        </Container>
        
    );
    
}

export default Hompage;
