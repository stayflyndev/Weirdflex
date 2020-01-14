import React from 'react';
import ProductListItem from './ProductListItem.component'

const ProductList = ({productData}) =>{

    return (
        <div>
           
           {
              productData.map(product => 
                <ProductListItem product={product} key={product.id} />)
           }
        </div>
    );
}

export default ProductList;
